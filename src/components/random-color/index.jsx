import { useEffect, useState } from "react";

export default function RandomColorGenerator() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function getRandomNumbers(length) {
    return Math.floor(Math.random() * length);
  }

  function handleGenerateRandomColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    //logic of 6digits hex numbers
    for (let i = 0; i < 6; i++) {
      hexColor = hexColor + hex[getRandomNumbers(hex.length)];
    }
    console.log(hexColor);
    setColor(hexColor);
  }

  function handleRGBColor() {
    const r = getRandomNumbers(256);
    const g = getRandomNumbers(256);
    const b = getRandomNumbers(256);
    console.log(`rgb(${r},${g},${b})`);
    setColor(`rgb(${r},${g},${b})`);

 
  }
  //swtiches between which effect to use
  useEffect(() => {
    if (typeOfColor === "rgb") handleRGBColor();
    else handleGenerateRandomColor();
  }, [typeOfColor]);

  return (
    <div
      style={{
        background: color,
        width: "100vw",
        height: "100vh",
      }}
    >
      <button onClick={() => setTypeOfColor("rgb")}>Generate RGB Color</button>
      <button onClick={() => setTypeOfColor("hex")}>Generate Hex Color</button>
      <button
        onClick={
          typeOfColor === "hex" ? handleGenerateRandomColor : handleRGBColor
        }
      >
        Generate Random Color
      </button>
    </div>
  );
}
