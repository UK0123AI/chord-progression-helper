import {
  COMMON_KEY_NOTATIONS,
  KEY_DESCRIPTIONS,
  MAJOR_KEYS,
} from "../data/music";
import { UI_TEXT } from "../data/uiText";
import type { MajorKey } from "../types/music";

type KeySelectorProps = {
  originalKey: MajorKey;
  targetKey: MajorKey;
  onOriginalKeyChange: (key: MajorKey) => void;
  onTargetKeyChange: (key: MajorKey) => void;
};

/**
 * 元のキーと移調先のキーを選択するコンポーネント。
 *
 * 選択中のキーはAppで管理し、
 * このコンポーネントではキー選択のUIを担当する。
 */
function KeySelector({
  originalKey,
  targetKey,
  onOriginalKeyChange,
  onTargetKeyChange,
}: KeySelectorProps) {
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
            onOriginalKeyChange(
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
            onTargetKeyChange(
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
  );
}

export default KeySelector;
