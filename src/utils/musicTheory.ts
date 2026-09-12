import {
  MAJOR_CHORD_QUALITIES,
  MAJOR_SCALE_INTERVALS,
  NOTES,
} from "../data/music";

import type { Chord, Note } from "../types/music";

/**
 * 指定した音を基準に、メジャースケールの7音を作る。
 *
 * 例：
 * getMajorScale("C")
 * → ["C", "D", "E", "F", "G", "A", "B"]
 */
export const getMajorScale = (key: Note): Note[] => {
  const keyIndex = NOTES.indexOf(key);

  return MAJOR_SCALE_INTERVALS.map((interval) => {
    const noteIndex = (keyIndex + interval) % NOTES.length;

    return NOTES[noteIndex];
  });
};

/**
 * 指定したメジャーキーから、7つのダイアトニックコードを作る。
 *
 * 例：
 * getDiatonicChords("C")
 * → C, Dm, Em, F, G, Am, Bdim
 */
export const getDiatonicChords = (key: Note): Chord[] => {
  const scale = getMajorScale(key);

  return scale.map((root, degreeIndex) => {
    const quality = MAJOR_CHORD_QUALITIES[degreeIndex];

    let label = root;

    if (quality === "minor") {
      label += "m";
    }

    if (quality === "diminished") {
      label += "dim";
    }

    return {
      root,
      quality,
      label,
      degreeIndex,
    };
  });
};