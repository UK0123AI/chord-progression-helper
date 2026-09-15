import { UI_TEXT } from "../data/uiText";
import type { Chord } from "../types/music";

type TransposedResultProps = {
  progression: number[];
  chords: Chord[];
};

/**
 * 選択したコード進行を、
 * 移調先のキーに変換して表示するコンポーネント。
 */
function TransposedResult({
  progression,
  chords,
}: TransposedResultProps) {
  return (
    <section className="card">
      <div className="section-heading">
        <div>
          <h2>
            {UI_TEXT.transposedResult.title}
          </h2>

          <span className="section-japanese">
            {UI_TEXT.transposedResult.japanese}
          </span>
        </div>

        <p className="section-description">
          {UI_TEXT.transposedResult.description}
        </p>
      </div>

      <div className="transposed-result">
        {progression.length === 0 ? (
          <p className="empty-message">-</p>
        ) : (
          progression.map(
            (degreeIndex, index) => (
              <div
                className="progression-item"
                key={index}
              >
                <span className="transposed-chip">
                  {chords[degreeIndex].label}
                </span>

                {index < progression.length - 1 && (
                  <span className="arrow">
                    →
                  </span>
                )}
              </div>
            ),
          )
        )}
      </div>
    </section>
  );
}

export default TransposedResult;
