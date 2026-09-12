import { useState } from "react";

import { MAJOR_DEGREE_LABELS, NOTES } from "./data/music";
import type { Note } from "./types/music";
import { getDiatonicChords } from "./utils/musicTheory";

function App() {
  const [originalKey, setOriginalKey] = useState<Note>("C");
  const [targetKey, setTargetKey] = useState<Note>("D");
  const [progression, setProgression] = useState<number[]>([]);

  const originalChords = getDiatonicChords(originalKey);
  const targetChords = getDiatonicChords(targetKey);

  /**
   * 選択したコードを進行に追加する。
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

  return (
    <main>
      <h1>Chord Progression Helper</h1>

      <div>
        <label htmlFor="original-key">Original Key</label>

        <select
          id="original-key"
          value={originalKey}
          onChange={(event) => setOriginalKey(event.target.value as Note)}
        >
          {NOTES.map((note) => (
            <option key={note} value={note}>
              {note} Major
            </option>
          ))}
        </select>
      </div>

      <div>
        {originalChords.map((chord) => (
          <button
            key={chord.degreeIndex}
            onClick={() => handleChordClick(chord.degreeIndex)}
          >
            {chord.label}
          </button>
        ))}
      </div>

      <h2>Progression</h2>

      <p>
        {progression.length === 0
          ? "コードを選択してください"
          : progression
              .map((degreeIndex) => originalChords[degreeIndex].label)
              .join(" → ")}
      </p>

      <h2>Degree</h2>

      <p>
        {progression.length === 0
          ? "-"
          : progression
              .map((degreeIndex) => MAJOR_DEGREE_LABELS[degreeIndex])
              .join(" → ")}
      </p>

      <div>
        <label htmlFor="target-key">Transpose To</label>

        <select
          id="target-key"
          value={targetKey}
          onChange={(event) => setTargetKey(event.target.value as Note)}
        >
          {NOTES.map((note) => (
            <option key={note} value={note}>
              {note} Major
            </option>
          ))}
        </select>
      </div>

      <h2>Transposed Result</h2>

      <p>
        {progression.length === 0
          ? "-"
          : progression
              .map((degreeIndex) => targetChords[degreeIndex].label)
              .join(" → ")}
      </p>

      <div>
        <button
          onClick={handleUndo}
          disabled={progression.length === 0}
        >
          Undo
        </button>

        <button
          onClick={handleClear}
          disabled={progression.length === 0}
        >
          Clear
        </button>
      </div>
    </main>
  );
}

export default App;