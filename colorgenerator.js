// colorGenerator.js
// Generatore di colori casuali nei formati HEX, RGB e HSL

const ColorGenerator = {
  randomHex() {
    const hex = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${hex.padStart(6, '0')}`;
  },

  randomRgb() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  },

  randomHsl() {
    const h = Math.floor(Math.random() * 360);
    const s = Math.floor(Math.random() * 101);
    const l = Math.floor(Math.random() * 101);
    return `hsl(${h}, ${s}%, ${l}%)`;
  },

  randomAll() {
    return {
      hex: this.randomHex(),
      rgb: this.randomRgb(),
      hsl: this.randomHsl()
    };
  }
};

// Esempi:
// console.log(ColorGenerator.randomHex()); // "#a3d9f4"
// console.log(ColorGenerator.randomRgb()); // "rgb(123, 45, 200)"
// console.log(ColorGenerator.randomHsl()); // "hsl(278, 44%, 67%)"
// console.log(ColorGenerator.randomAll()); // { hex: "...", rgb: "...", hsl: "..." }

export default ColorGenerator;
