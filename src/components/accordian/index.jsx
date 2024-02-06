import { useState } from "react";
import data from "./data";
import "./style.css";

/* Approach
-----------------
created the folder so that its reusable


two type of accordian
- single selection
- multiple

*/
export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelect, setEnableMultiSelect] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelect(getCurrentId) {
    let cpMulti = [...multiple];
    const findIndexOfCurrentId = cpMulti.indexOf(getCurrentId);

    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) cpMulti.push(getCurrentId);
    else cpMulti.splice(findIndexOfCurrentId, 1);

    setMultiple(cpMulti)
  }
  console.log(selected, multiple);

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelect(!enableMultiSelect)}>
        Enable multi selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={
                  enableMultiSelect
                    ? () => handleMultiSelect(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelect
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content">{dataItem.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>data not found</div>
        )}
      </div>
    </div>
  );
}
