const Colors = {
  primary: "rgb(26, 150, 111)",
  secondary: "rgb(255, 177, 69)",
};
export default Colors;

export const addColor = (color1, color2) => {
  let c1 = color1
    .substring(4, color1.length - 1)
    .replace(/ /g, "")
    .split(",");

  let c2 = color2
    .substring(4, color2.length - 1)
    .replace(/ /g, "")
    .split(",");

  return `rgba(${parseInt(c1[0], 10) + parseInt(c2[0], 10)},${
    parseInt(c1[1], 10) + parseInt(c2[1], 10)
  },${parseInt(c1[2], 10) + parseInt(c2[2], 10)},1)`;
};
