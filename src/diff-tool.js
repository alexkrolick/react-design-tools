// @flow strict
import * as React from "react";
import { XRay } from "@compositor/kit";

type Props = {
  imgUrl: string,
  children: React.Node,
  imgHeight: number,
  imgWidth: number,
};

type BlendMode =
  | "hard-light"
  | "exclusion"
  | "difference"
  | "multiply"
  | "normal";

type State = {
  offsetX: number,
  offsetY: number,
  xray: boolean,
  overlay: boolean,
  blendMode: BlendMode,
  opacity: number,
};

const blendOptions: Array<BlendMode> = [
  "hard-light",
  "exclusion",
  "difference",
  "multiply",
  "normal",
];

type TargetAttribute = "checked" | "value";

class DiffTool extends React.Component<Props, State> {
  state = {
    offsetX: 0,
    offsetY: 0,
    xray: false,
    overlay: false,
    blendMode: "normal",
    opacity: 1,
  };

  linkInput = (
    path: string,
    attribute: TargetAttribute = "value",
    eventType: string = "change",
  ) => {
    return {
      [attribute]: this.state[path],
      ["on" + eventType[0].toUpperCase() + eventType.slice(1)]: (
        e: SyntheticInputEvent<EventTarget>,
      ) => {
        e.persist();
        this.setState(() => ({
          [path]: attribute === "checked" ? e.target.checked : e.target.value,
        }));
      },
    };
  };

  render() {
    const { imgUrl, children, imgHeight, imgWidth } = this.props;
    const { offsetX, offsetY, xray, overlay, blendMode, opacity } = this.state;

    const X = xray ? XRay : "div";
    const containerHeight = overlay ? 1 * imgHeight : 2 * imgHeight;

    const ControlPanel = (
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center ",
          padding: 10,
          color: "#ccc",
          background: "#222",
          borderRadius: "3px",
          boxShadow: "0 2px 2px 1px #ccc",
          marginBottom: 5,
        }}
      >
        <label htmlFor="overlay-toggle">
          Overlay{" "}
          <input
            name="overlay-toggle"
            type="checkbox"
            style={{ marginRight: 10 }}
            {...this.linkInput("overlay", "checked")}
          />
        </label>
        <label htmlFor="offset-x">
          Offset X{" "}
          <input
            name="offset-x"
            type="number"
            max={imgWidth}
            min={-100}
            step={1}
            style={{ width: 70, marginRight: 10 }}
            {...this.linkInput("offsetX")}
          />
        </label>
        <label htmlFor="offset-y">
          Offset Y{" "}
          <input
            name="offset-y"
            type="number"
            max={imgHeight}
            min={-1 * imgHeight}
            step={1}
            style={{ width: 70, marginRight: 10 }}
            {...this.linkInput("offsetY")}
          />
        </label>
        <label htmlFor="opacity-slider">
          Opacity{" "}
          <input
            name="opacity-slider"
            type="range"
            max={1}
            min={0}
            step={0.01}
            style={{ width: 50, marginRight: 10 }}
            {...this.linkInput("opacity")}
          />
        </label>
        <label htmlFor="x-ray-toggle">
          XRay{" "}
          <input
            name="x-ray-toggle"
            type="checkbox"
            style={{ marginRight: 10 }}
            {...this.linkInput("xray", "checked")}
          />
        </label>
        <label htmlFor="blend-mode">
          Blend{" "}
          <select
            name="blend-mode"
            style={{ marginRight: 10 }}
            {...this.linkInput("blendMode", "value")}
          >
            {blendOptions.map(o => <option value={o}>{o}</option>)}
          </select>
        </label>
      </div>
    );

    return (
      <div>
        {ControlPanel}
        <X>
          <div
            style={{
              position: "relative",
              height: containerHeight,
              width: imgWidth,
              backgroundImage: `url(${imgUrl})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "0 0",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: parseInt(offsetY, 0) + (overlay ? 0 : imgHeight),
                left: offsetX,
                opacity: opacity,
                mixBlendMode: blendMode,
              }}
            >
              {children}
            </div>
          </div>
        </X>
      </div>
    );
  }
}

export default DiffTool;
