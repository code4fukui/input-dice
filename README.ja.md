# input-dice

Three.jsを利用した、依存関係のないWeb用3DサイコロのカスタムHTML要素です。

## デモ

https://code4fukui.github.io/input-dice/


![3Dサイコロが4の目で止まるアニメーションデモ](https://code4fukui.github.io/input-dice/input-dice.gif)


## 機能

- **3Dアニメーション:** スムーズに転がるアニメーションを備えた、美しくレンダリングされる3Dサイコロ。
- **標準的な要素の振る舞い:** 標準の `.value` プロパティと `input` イベントを通じて、HTMLフォームやJavaScriptとシームレスに統合できます。
- **プログラムによる制御:** 必要に応じて、ランダムな値や特定の目を指定してサイコロを振ることができます。
- **使いやすさ:** ページにスクリプトタグと `<input-dice>` 要素を追加するだけで簡単に使用できます。

## 使い方

モジュールをインポートし、HTMLに `<input-dice>` 要素を追加します。

```html
<!-- コンポーネントを読み込み -->
<script type="module" src="https://code4fukui.github.io/input-dice/input-dice.js"></script>

<!-- HTMLで使用 -->
<input-dice id="my-dice"></input-dice>
<br>
<button id="roll-button">振る</button>
<p>結果: <span id="result-display"></span></p>

<script type="module">
  const dice = document.getElementById('my-dice');
  const rollButton = document.getElementById('roll-button');
  const resultDisplay = document.getElementById('result-display');

  // ボタンクリック時にサイコロを振る
  rollButton.onclick = () => dice.roll();

  // 'input'イベントを監視して結果を取得
  dice.oninput = () => {
    resultDisplay.textContent = dice.value;
    console.log(`サイコロの結果: ${dice.value}`);
  };
</script>
```

## API

### プロパティ

- `.value`
    - **型:** `Number`
    - **説明:** サイコロの現在の目の値（1-6）を取得します。値はロールアニメーションが完了した後に更新されます。

### メソッド

- `.roll()`
    - **説明:** サイコロを振り、1〜6の新しいランダムな値を出します。
    - **例:** `dice.roll();`

- `.roll(value)`
    - **説明:** 指定した目が出るようにサイコロを振ります。
    - **パラメータ:**
        - `value` (Number): 出したい目の値（1-6）。
    - **例:** `dice.roll(6); // サイコロは6の目で止まります`

### イベント

- `input`
    - **説明:** サイコロのロールアニメーションが終了し、`.value` プロパティが更新されたときに発火します。

## スタイリング

`<input-dice>` 要素は `inline-block` 要素であり、標準的なCSSの `width` および `height` プロパティを使用してサイズを調整できます。

```css
input-dice {
  width: 250px;
  height: 250px;
  cursor: pointer; /* 任意: UX向上のため */
}
```

## ライセンス

MIT License — [LICENSE](LICENSE)を参照してください。
