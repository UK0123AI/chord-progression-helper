import type {
  ChordQuality,
  MajorKey,
  Note,
} from "../types/music";

/**
 * アプリで選択できるメジャーキー。
 *
 * C# / Db、F# / Gbのように、
 * 同じ高さの音でも異なる表記を選べるようにする。
 */
export const MAJOR_KEYS: MajorKey[] = [
  "C",
  "C#",
  "Db",
  "D",
  "Eb",
  "E",
  "F",
  "F#",
  "Gb",
  "G",
  "Ab",
  "A",
  "Bb",
  "B",
];

/**
 * 各メジャーキーを構成する7つの音。
 *
 * 音の高さだけでなく、
 * そのキーで自然な音名になるように定義する。
 */
export const MAJOR_SCALES: Record<MajorKey, Note[]> = {
  C: ["C", "D", "E", "F", "G", "A", "B"],

  "C#": ["C#", "D#", "E#", "F#", "G#", "A#", "B#"],

  Db: ["Db", "Eb", "F", "Gb", "Ab", "Bb", "C"],

  D: ["D", "E", "F#", "G", "A", "B", "C#"],

  Eb: ["Eb", "F", "G", "Ab", "Bb", "C", "D"],

  E: ["E", "F#", "G#", "A", "B", "C#", "D#"],

  F: ["F", "G", "A", "Bb", "C", "D", "E"],

  "F#": ["F#", "G#", "A#", "B", "C#", "D#", "E#"],

  Gb: ["Gb", "Ab", "Bb", "Cb", "Db", "Eb", "F"],

  G: ["G", "A", "B", "C", "D", "E", "F#"],

  Ab: ["Ab", "Bb", "C", "Db", "Eb", "F", "G"],

  A: ["A", "B", "C#", "D", "E", "F#", "G#"],

  Bb: ["Bb", "C", "D", "Eb", "F", "G", "A"],

  B: ["B", "C#", "D#", "E", "F#", "G#", "A#"],
};

/**
 * メジャーキーの各コードの種類。
 *
 * どのメジャーキーでも、
 * コードの種類はこの順番になる。
 *
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
 * 各コードに対応する度数表記。
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

/**
 * 異名同音のキーのうち、
 * 初心者にも案内しやすい一般的な表記。
 *
 * 例：
 * C# Major と Db Major は同じ高さの音を使うが、
 * 一般的には Db Major の方が読みやすい。
 */
export const COMMON_KEY_NOTATIONS: MajorKey[] = [
  "Db",
  "F#",
];

/**
 * 初心者向けに表示するキー表記の補足説明。
 *
 * 異名同音のキーについて、
 * 同じ高さの音であることと、
 * 一般的によく使われる表記を案内する。
 */
export const KEY_DESCRIPTIONS: Partial<
  Record<MajorKey, string>
> = {
  "C#":
    "Db Majorと同じ高さの音です。一般的にはDb Majorの表記がよく使われます。",

  Db:
    "C# Majorと同じ高さの音です。Db Majorは一般的によく使われる表記です。",

  "F#":
    "Gb Majorと同じ高さの音です。F# Majorは一般的によく使われる表記です。",

  Gb:
    "F# Majorと同じ高さの音です。一般的にはF# Majorの表記がよく使われます。",
};
