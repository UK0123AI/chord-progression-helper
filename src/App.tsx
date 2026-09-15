import { useState } from "react";

import "./App.css";
import ChordSelector from "./components/ChordSelector";
import KeySelector from "./components/KeySelector";
import ProgressionDisplay from "./components/ProgressionDisplay";
import TransposedResult from "./components/TransposedResult";
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

      <KeySelector
        originalKey={originalKey}
        targetKey={targetKey}
        onOriginalKeyChange={setOriginalKey}
        onTargetKeyChange={setTargetKey}
      />

      <ChordSelector
        chords={originalChords}
        onChordSelect={handleChordClick}
      />

      <ProgressionDisplay
        progression={progression}
        chords={originalChords}
      />

      <TransposedResult
        progression={progression}
        chords={targetChords}
      />

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
