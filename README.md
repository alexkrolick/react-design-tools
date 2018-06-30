# react-design-tools
Tools for making pixel-perfect designs with React

## Demo

[![Edit 6vr85vjq1k](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/6vr85vjq1k?autoresize=1&hidenavigation=1&view=preview)


[![screenshot](https://user-images.githubusercontent.com/1571667/42123140-9d981674-7c01-11e8-8f22-27971dc706fd.png)](https://codesandbox.io/s/6vr85vjq1k?autoresize=1&hidenavigation=1&view=preview)

## Using

### PaletteLookup

```js

const colors = {
  primary: "#336699",
  secondary: "#cccccc",
  skyBlue: "#3399cc"
}

<PaletteLookup palette={colors} />
```

_See [this gist](https://gist.github.com/alexkrolick/652718f1f6ca3f4decab7f9222634c5a) for a way to parse SCSS variables into ES modules._

## DiffTool

```js
import designImgUrl from "./design.png"

// dimensions, currently required (may be able to extract them in a future release)
const w = 500;
const h = 250;

<DiffTool imgUrl={designImgUrl} imgHeight={h} imgWidth={w}>
  <MyComponent />
</Difftool>
```
