import { MAJOR_DEGREE_LABELS } from "../data/music";
import { UI_TEXT } from "../data/uiText";
import type { Chord } from "../types/music";

type ChordSelectorProps = {
  chords: Chord[];
  onChordSelect: (degreeIndex: number) => void;
};

/**
 * 選択中のキーで使用できる
 * ダイアトニックコードを表示するコンポーネント。
 *
 * コードが選択されたら、
 * degreeIndexを親コンポーネントへ通知する。
 */
function ChordSelector({
  chords,
  onChordSelect,
}: ChordSelectorProps) {
  return (
    <section className="card">
      <div className="section-heading">
        <div>
          <h2>{UI_TEXT.chordSelector.title}</h2>

          <span className="section-japanese">
            {UI_TEXT.chordSelector.japanese}
          </span>
        </div>

        <p className="section-description">
          {UI_TEXT.chordSelector.description}
        </p>
      </div>

      <div className="chord-list">
        {chords.map((chord) => (
          <button
            key={chord.degreeIndex}
            className="chord-button"
            onClick={() =>
              onChordSelect(chord.degreeIndex)
            }
          >
            <span>{chord.label}</span>

            <small>
              {
                MAJOR_DEGREE_LABELS[
                  chord.degreeIndex
                ]
              }
            </small>
          </button>
        ))}
      </div>
    </section>
  );
}

export default ChordSelector;
