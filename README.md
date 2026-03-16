# input-dice

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A custom HTML element that displays a 3D dice with a random number.

## Demo
https://code4fukui.github.io/input-dice/

## Features
- Displays a 3D dice with a random number between 1 and 6
- Provides an "input" event when the dice is rolled
- Can be controlled via JavaScript to roll the dice programmatically

## Usage
To use the `<input-dice>` element, include the `input-dice.js` file and add the element to your HTML:

```html
<script type="module" src="./input-dice.js"></script>
<input-dice id="dice"></input-dice>
```

You can roll the dice programmatically using the `roll()` method:

```javascript
const dice = document.getElementById('dice');
dice.roll();
```

The dice will dispatch an "input" event when it is rolled, which you can listen for:

```javascript
dice.oninput = () => {
  console.log(`Dice value: ${dice.value}`);
};
```

## License
MIT License — see [LICENSE](LICENSE).