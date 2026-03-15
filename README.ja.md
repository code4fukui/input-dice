# input-dice

3Dの立方体のサイコロを表示する入力コンポーネントです。Three.jsを使用して3Dの立方体を実装し、1〜6の目をランダムに表示することができます。サイコロを振ると、inputイベントが発行されます。

## デモ
https://code4fukui.github.io/input-dice/

## 機能
- 1〜6の目が表示される3Dの立方体型サイコロ入力コンポーネント
- ボタンをクリックしてサイコロをランダムに振ることができる
- 入力値がinputイベントを発行する

## 使い方
HTMLに`<input-dice>`要素を追加するだけで利用できます。

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