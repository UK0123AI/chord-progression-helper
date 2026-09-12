import type { ChordQuality, Note } from "../types/music";

/**
 * アプリで使用する12音を、半音ずつ順番に並べたもの。
 * スケールを作るときに、この並び順を基準に音を取得する。
 */
export const NOTES: Note[] = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
];

/**
 * メジャースケールを作るための、基準となる音からの半音数。
 *
 * 例：Cメジャーの場合
 * C → D → E → F → G → A → B
 * 0    2    4    5    7    9    11
 */
export const MAJOR_SCALE_INTERVALS = [0, 2, 4, 5, 7, 9, 11];

/**
 * メジャーキーの各コードの種類を、1番目から7番目まで順番に定義。
 *
 * 例：Cメジャーの場合
 * C   Dm   Em   F   G   Am   Bdim
 * I   ii   iii  IV  V   vi   vii°
 */
export const MAJOR_CHORD_QUALITIES: ChordQuality[] = [
  "major",
  "minor",
  "minor",
  "major",
  "major",
  "minor",
  "diminished",
];

/**
 * メジャーキーの各コードに対応する度数表記。
 *
 * 例：Cメジャーの場合
 * C   Dm   Em   F   G   Am   Bdim
 * I   ii   iii  IV  V   vi   vii°
 */
export const MAJOR_DEGREE_LABELS = [
  "I",
  "ii",
  "iii",
  "IV",
  "V",
  "vi",
  "vii°",
];
