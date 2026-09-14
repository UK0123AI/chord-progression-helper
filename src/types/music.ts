/**
 * アプリで扱う音名。
 *
 * シャープとフラットの両方を扱うことで、
 * キーに合った自然なコード名を表示できるようにする。
 */
export type Note =
  | "C"
  | "C#"
  | "Db"
  | "D"
  | "D#"
  | "Eb"
  | "E"
  | "E#"
  | "F"
  | "F#"
  | "Gb"
  | "G"
  | "G#"
  | "Ab"
  | "A"
  | "A#"
  | "Bb"
  | "B"
  | "B#"
  | "Cb";

/**
 * アプリで選択できるメジャーキー。
 *
 * C# / Db、F# / Gbのように、
 * 同じ高さの音でも異なる表記を選べるようにする。
 */
export type MajorKey =
  | "C"
  | "C#"
  | "Db"
  | "D"
  | "Eb"
  | "E"
  | "F"
  | "F#"
  | "Gb"
  | "G"
  | "Ab"
  | "A"
  | "Bb"
  | "B";

/**
 * コードの種類。
 */
export type ChordQuality =
  | "major"
  | "minor"
  | "diminished";

/**
 * 1つのコードが持つ情報。
 *
 * degreeIndexには、
 * キーの中で何番目のコードなのかを0〜6で保持する。
 *
 * コード名ではなく位置を保存することで、
 * 別のキーへの移調を簡単に行える。
 */
export type Chord = {
  root: Note;
  quality: ChordQuality;
  label: string;
  degreeIndex: number;
};
