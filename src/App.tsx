import { useState } from "react";

import "./App.css";
import {
  COMMON_KEY_NOTATIONS,
  KEY_DESCRIPTIONS,
  MAJOR_DEGREE_LABELS,
  MAJOR_KEYS,
} from "./data/music";
import { UI_TEXT } from "./data/uiText";
import type { MajorKey } from "./types/music";
import { getDiatonicChords } from "./utils/musicTheory";

function App() {
  const [originalKey, setOriginalKey] =
    useState<MajorKey>("C");

  const [targetKey, setTargetKey] =
    useState<MajorKey>("D");

  /**
   * 選択したコード進行を、コード名ではなく
   * キーの中で何番目のコードなのかで保存する。
   *
   * 例：
   * C → G → Am → F
   * 0 → 4 → 5 → 3
   *
   * この位置を保存することで、
   * キーを変更しても同じ役割のコードへ変換できる。
   */
  const [progression, setProgression] = useState<number[]>([]);

  const originalChords = getDiatonicChords(originalKey);
  const targetChords = getDiatonicChords(targetKey);

  /**
   * 選択したコードを進行の最後に追加する。
   */
  const handleChordClick = (degreeIndex: number) => {
    setProgression((prev) => [...prev, degreeIndex]);
  };

  /**
   * 最後に追加したコードを1つ削除する。
   */
  const handleUndo = () => {
    setProgression((prev) => prev.slice(0, -1));
  };

  /**
   * 選択したコード進行をすべて削除する。
   */
  const handleClear = () => {
    setProgression([]);
  };

  /**
   * プルダウンに表示するキー名を作る。
   *
   * C# / Db、F# / Gbのように複数の表記がある場合は、
   * 初心者が選びやすいよう一般的な表記を案内する。
   */
  const getKeyOptionLabel = (key: MajorKey) => {
    const isCommonNotation =
      COMMON_KEY_NOTATIONS.includes(key);

    return `${key} Major${
      isCommonNotation
        ? "（一般的な表記）"
        : ""
    }`;
  };

  return (
    <main className="app">
      <header className="app-header">
        <h1>{UI_TEXT.app.title}</h1>

        <p className="app-tagline">
          {UI_TEXT.app.tagline}
        </p>

        <p className="app-description">
          {UI_TEXT.app.description}
        </p>
      </header>

      <section className="key-panel">
        <div className="field">
          <div className="field-heading">
            <label htmlFor="original-key">
              {UI_TEXT.originalKey.title}
            </label>

            <span className="field-japanese">
              {UI_TEXT.originalKey.japanese}
            </span>
          </div>

          <p className="field-description">
            {UI_TEXT.originalKey.description}
          </p>

          <select
            id="original-key"
            value={originalKey}
            onChange={(event) =>
              setOriginalKey(
                event.target.value as MajorKey,
              )
            }
          >
            {MAJOR_KEYS.map((key) => (
              <option key={key} value={key}>
                {getKeyOptionLabel(key)}
              </option>
            ))}
          </select>

          {KEY_DESCRIPTIONS[originalKey] && (
            <p className="key-description">
              {KEY_DESCRIPTIONS[originalKey]}
            </p>
          )}
        </div>

        <span className="key-arrow">→</span>

        <div className="field">
          <div className="field-heading">
            <label htmlFor="target-key">
              {UI_TEXT.targetKey.title}
            </label>

            <span className="field-japanese">
              {UI_TEXT.targetKey.japanese}
            </span>
          </div>

          <p className="field-description">
            {UI_TEXT.targetKey.description}
          </p>

          <select
            id="target-key"
            value={targetKey}
            onChange={(event) =>
              setTargetKey(
                event.target.value as MajorKey,
              )
            }
          >
            {MAJOR_KEYS.map((key) => (
              <option key={key} value={key}>
                {getKeyOptionLabel(key)}
              </option>
            ))}
          </select>

          {KEY_DESCRIPTIONS[targetKey] && (
            <p className="key-description">
              {KEY_DESCRIPTIONS[targetKey]}
            </p>
          )}
        </div>
      </section>

      <section className="card">
        <div className="section-heading">
          <div>
            <h2>
              {UI_TEXT.chordSelector.title}
            </h2>

            <span className="section-japanese">
              {UI_TEXT.chordSelector.japanese}
            </span>
          </div>

          <p className="section-description">
            {UI_TEXT.chordSelector.description}
          </p>
        </div>

        <div className="chord-list">
          {originalChords.map((chord) => (
            <button
              key={chord.degreeIndex}
              className="chord-button"
              onClick={() =>
                handleChordClick(chord.degreeIndex)
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

      <section className="card">
        <div className="section-heading">
          <div>
            <h2>
              {UI_TEXT.progression.title}
            </h2>

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
                    {
                      originalChords[degreeIndex]
                        .label
                    }
                  </span>

                  {index <
                    progression.length - 1 && (
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

      <section className="card">
        <div className="section-heading">
          <div>
            <h2>
              {UI_TEXT.transposedResult.title}
            </h2>

            <span className="section-japanese">
              {
                UI_TEXT.transposedResult
                  .japanese
              }
            </span>
          </div>

          <p className="section-description">
            {
              UI_TEXT.transposedResult
                .description
            }
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
                    {
                      targetChords[degreeIndex]
                        .label
                    }
                  </span>

                  {index <
                    progression.length - 1 && (
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

      <div className="actions">
        <button
          className="undo-button"
          onClick={handleUndo}
          disabled={progression.length === 0}
        >
          {UI_TEXT.actions.undo}
        </button>

        <button
          className="clear-button"
          onClick={handleClear}
          disabled={progression.length === 0}
        >
          {UI_TEXT.actions.clear}
        </button>
      </div>
    </main>
  );
}

export default App;
