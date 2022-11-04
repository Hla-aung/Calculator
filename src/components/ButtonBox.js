import Button from "./Button";
import ScButton from "../sc-calculator/ScButton";
//import { UseScCal } from "../sc-calculator/UseScCal";

const btnValues = [
    ["C", "±", "%", "÷"],
    [7, 8, 9, "×"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0,  ".", "="],
  ];

export const bcCalculator = btnValues.flat().map((btn, i) => (
  <Button
    value={btn}
    key={i}
  />  
))

const scBtnValues = [
  ["C", "log", "xʸ", "√"],
  [7, 8, 9, "sin"],
  [4, 5, 6, "cos"],
  [1, 2, 3, "tan"],
  [0,  ".", "="],
]
export const scCalculator = scBtnValues.flat().map((scbtn, i) => (
  <ScButton
    value={scbtn}
    key={i}
    />
))

export const ButtonBox = (props) => {
    return (
        <div className="buttonBox">
            {props.scCal}
        </div>
    )
}

