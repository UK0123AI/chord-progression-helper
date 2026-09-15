import { MAJOR_DEGREE_LABELS } from "../data/music";
import { UI_TEXT } from "../data/uiText";
import type { Chord } from "../types/music";

type ProgressionDisplayProps = {
  progression: number[];
  chords: Chord[];
};

/**
 * 選択したコード進行と、
 * そのコード進行の度数を表示するコンポーネント。
 */
function ProgressionDisplay({
  progression,
  chords,
}: ProgressionDisplayProps) {
  return (
    <section className="card">
      <div className="section-heading">
        <div>
          <h2>{UI_TEXT.progression.title}</h2>

          <span className="section-japanese">
            {UI_TEXT.progression.japanese}
          </span>
        </div>

        <p className="section-description">
          {UI_TEXT.progression.description}
        </p>
      </div>

      <div className="progression">
        {progression.length === 0 ? (
          <p className="empty-message">
            {UI_TEXT.progression.empty}
          </p>
        ) : (
          progression.map(
            (degreeIndex, index) => (
              <div
                className="progression-item"
                key={index}
              >
                <span className="chord-chip">
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

      <div className="degree-section">
        <div className="section-heading">
          <div>
            <h2>{UI_TEXT.degree.title}</h2>

            <span className="section-japanese">
              {UI_TEXT.degree.japanese}
            </span>
          </div>

          <p className="section-description">
            {UI_TEXT.degree.description}
          </p>
        </div>

        <p className="degree">
          {progression.length === 0
            ? "-"
            : progression
                .map(
                  (degreeIndex) =>
                    MAJOR_DEGREE_LABELS[
                      degreeIndex
                    ],
                )
                .join(" → ")}
        </p>

        <p className="degree-example">
          {UI_TEXT.degree.example}
        </p>
      </div>
    </section>
  );
}

export default ProgressionDisplay;
