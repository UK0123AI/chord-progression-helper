/**
 * アプリで使用できる音名を定義。
 * 今回はシンプルにするため、C〜Bまでをシャープ（#）表記で統一する。
 */
export type Note =
  | "C"
  | "C#"
  | "D"
  | "D#"
  | "E"
  | "F"
  | "F#"
  | "G"
  | "G#"
  | "A"
  | "A#"
  | "B";

/**
 * コードの種類を定義。
 * メジャーコード、マイナーコード、ディミニッシュコードの3種類を扱う。
 */
export type ChordQuality =
  | "major"
  | "minor"
  | "diminished";

/**
 * 1つのコードが持つ情報を定義。
 * 例：Amの場合
 * root: "A"
 * quality: "minor"
 * label: "Am"
 * degreeIndex: 5
 *
 * degreeIndexには、キーの中で何番目のコードなのかを0〜6で保持する。
 * コード名ではなく位置を保持することで、別のキーへの移調をしやすくする。
 */
export type Chord = {
  root: Note;
  quality: ChordQuality;
  label: string;
  degreeIndex: number;
};
