# input-dice

1〜6の目を表示するキューブの入力コンポーネントです。Three.jsを使用して3Dのサイコロを実装しています。

## デモ
https://code4fukui.github.io/input-dice/

## 機能
- 1〜6の目が表示されるサイコロ入力コンポーネント
- ボタンをクリックして目をランダムに振ることができる
- 入力値がinputイベントを発行する

## 使い方
以下のようにHTMLに`<input-dice>`要素を追加します。

```html
<input-dice id="dice"></input-dice>
<button id="btn">roll</button>
<script type="module">
btn.onclick = () => dice.roll();
dice.oninput = () => inoutput.value = dice.value;
</script>
```

## ライセンス
MIT License