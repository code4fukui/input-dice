# input-dice

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A zero-dependency, 3D dice custom HTML element for the web, powered by Three.js.

## Demo

https://code4fukui.github.io/input-dice/


![Demo animation showing a 3D die rolling and landing on the number 4.](https://github.com/code4fukui/input-dice)


## Features

-   **3D Animation:** A beautifully rendered 3D dice with a smooth rolling animation.
-   **Standard Element Behavior:** Integrates seamlessly with HTML forms and JavaScript through a standard `.value` property and `input` event.
-   **Programmatic Control:** Roll the dice on demand, either to a random value or a specific number.
-   **Easy to Use:** Simply add the script tag and the `<input-dice>` element to your page.

## Usage

Import the module and add the `<input-dice>` element to your HTML.

```html
<!-- Load the component -->
<script type="module" src="https://code4fukui.github.io/input-dice/input-dice.js"></script>

<!-- Use it in your HTML -->
<input-dice id="my-dice"></input-dice>
<br>
<button id="roll-button">Roll</button>
<p>Result: <span id="result-display"></span></p>

<script type="module">
  const dice = document.getElementById('my-dice');
  const rollButton = document.getElementById('roll-button');
  const resultDisplay = document.getElementById('result-display');

  // Roll the dice when the button is clicked
  rollButton.onclick = () => dice.roll();

  // Listen for the 'input' event to get the result
  dice.oninput = () => {
    resultDisplay.textContent = dice.value;
    console.log(`The dice landed on: ${dice.value}`);
  };
</script>
```

## API

### Properties

-   `.value`
    -   **Type:** `Number`
    -   **Description:** Gets the current face value of the dice (1-6). The value is updated after the roll animation completes.

### Methods

-   `.roll()`
    -   **Description:** Rolls the dice to a new random value between 1 and 6.
    -   **Example:** `dice.roll();`

-   `.roll(value)`
    -   **Description:** Rolls the dice so it lands on a specific face.
    -   **Parameters:**
        -   `value` (Number): The desired face value (1-6).
    -   **Example:** `dice.roll(6); // The dice will land on 6`

### Events

-   `input`
    -   **Description:** Fired when the dice has finished its roll animation and the `.value` property has been updated.

## Styling

The `<input-dice>` element is an `inline-block` element and can be sized using standard CSS `width` and `height` properties.

```css
input-dice {
  width: 250px;
  height: 250px;
  cursor: pointer; /* Optional: for better UX */
}
```

## License

MIT License — see [LICENSE](LICENSE).