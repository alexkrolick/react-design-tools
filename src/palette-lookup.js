// @flow strict
import * as React from "react";
import findKey from "lodash/fp/findKey";
import kebabCase from "lodash/fp/kebabCase";

type Props = {
  palette: { [string]: string },
};

type State = {
  selectedColor: string,
};

const containerStyle = {
  display: "flex",
  justifyContent: "center",
};

const hexInputStyle = {
  width: "50px",
  margin: "5px",
  height: "2.5em",
};

const nameInputStyle = {
  width: "100px",
  margin: "5px",
  height: "2.5em",
};

class PaletteLookup extends React.Component<Props, State> {
  static defaultProps = {
    palette: {},
  };

  state = {
    selectedColor: "#ffffff",
  };

  handleColorChange = (e: SyntheticInputEvent<EventTarget>) => {
    const color = e.target.value;
    this.setState({ selectedColor: color });
  };

  render() {
    const { palette, ...props } = this.props;
    const { selectedColor } = this.state;
    const { handleColorChange } = this;
    const paletteJsName = findKey(c => c === selectedColor, palette) || "";
    const paletteScssName = kebabCase(paletteJsName);
    return (
      <div style={containerStyle} {...props}>
        <input
          type="color"
          value={selectedColor}
          style={hexInputStyle}
          onChange={handleColorChange}
          aria-label="palette color picker"
        />
        <input
          type="text"
          value={selectedColor}
          style={nameInputStyle}
          readOnly
          title={`Hex: ${selectedColor}`}
          aria-label="color hex value"
        />
        <input
          type="text"
          value={paletteJsName}
          style={nameInputStyle}
          title={`JS: ${paletteJsName}`}
          readOnly
          aria-label="palette JS color"
        />
        <input
          type="text"
          value={paletteScssName}
          style={nameInputStyle}
          title={`SCSS: ${paletteScssName}`}
          readOnly
          aria-label="palette SCSS color"
        />
      </div>
    );
  }
}

export default PaletteLookup;
