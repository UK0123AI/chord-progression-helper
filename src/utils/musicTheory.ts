import {
  MAJOR_CHORD_QUALITIES,
  MAJOR_SCALES,
} from "../data/music";

import type {
  Chord,
  MajorKey,
  Note,
} from "../types/music";

/**
 * 指定したキーからメジャースケールの7音を取得する。
 *
 * 例：
 * getMajorScale("F")
 * → ["F", "G", "A", "Bb", "C", "D", "E"]
 */
export const getMajorScale = (key: MajorKey): Note[] => {
  return MAJOR_SCALES[key];
};

/**
 * 指定したメジャーキーから、
 * 7つのダイアトニックコードを作る。
 *
 * 例：
 * getDiatonicChords("C")
 * → C, Dm, Em, F, G, Am, Bdim
 */
export const getDiatonicChords = (key: MajorKey): Chord[] => {
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
