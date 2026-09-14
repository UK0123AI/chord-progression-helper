/**
 * 画面上に表示する文言。
 *
 * UIの表示文言をコンポーネントから分離することで、
 * 文言の変更や管理をしやすくする。
 *
 * 小規模なアプリのため、
 * 現時点ではi18nライブラリは使用せず、
 * 必要な文言のみを定数として管理する。
 */
export const UI_TEXT = {
  app: {
    title: "Chord Progression Helper",
    tagline: "Understand. Transpose. Play.",
    description:
      "コード進行の仕組みを理解しながら、別のキーへ簡単に移調できるツールです。",
  },

  originalKey: {
    title: "Original Key",
    japanese: "元のキー",
    description: "現在の楽曲のキーを選択します。",
  },

  targetKey: {
    title: "Transpose To",
    japanese: "移調先のキー",
    description:
      "コード進行を変換したいキーを選択します。",
  },

  chordSelector: {
    title: "Chord Selector",
    japanese: "コードを選ぶ",
    description:
      "使いたいコードを順番に選択してください。",
  },

  progression: {
    title: "Progression",
    japanese: "コード進行",
    description:
      "選択したコードが順番に表示されます。",
    empty: "コードを選択してください",
  },

  degree: {
    title: "Degree",
    japanese: "度数",
    description:
      "コードがキーの中で何番目にあたるかを表します。同じ度数なら、キーが変わっても似た役割になります。",
    example:
      "例：C Majorでは I = C、V = G、vi = Am",
  },

  transposedResult: {
    title: "Transposed Result",
    japanese: "移調後のコード進行",
    description:
      "元のコード進行と同じ役割を保ったまま、選択したキーに変換します。",
  },

  actions: {
    undo: "Undo",
    clear: "Clear",
  },
} as const;
