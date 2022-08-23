import React from "react";
import createSvgIcon from "utils/createSvgIcon";

export default createSvgIcon(
  React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L7.35355 6.64645C7.54882 6.84171 7.54882 7.15829 7.35355 7.35355L1.35355 13.3536C1.15829 13.5488 0.841709 13.5488 0.646447 13.3536C0.451184 13.1583 0.451184 12.8417 0.646447 12.6464L6.29289 7L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z",
  }),
  { viewBox: "0 0 8 14" },
  "ArrowRight"
);
