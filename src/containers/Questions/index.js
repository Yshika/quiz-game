import React from "react";
import { useLocation } from "react-router-dom";
import "./style.scss";
const Questions = () => {
  const {
    state: { data = {} },
  } = useLocation();
  console.log(data);
  return (
    <div className="ques">
      {data.map(({ question = "", answers = [] }, index) => {
        return (
          <div
            key={index}
            className="questions-card"
            style={{ justifySelf: index % 2 === 0 ? "" : "self-end" }}
          >
            <div>
              Question {index + 1}: {question}
            </div>
            <ol type="a">
              {Object.values(answers).map((ele, i) =>
                ele ? (
                  <li className="list" key={i}>
                    <input type="checkbox" value={ele} key={i}></input>
                    <label>{ele}</label>
                  </li>
                ) : (
                  void 0
                )
              )}
            </ol>
          </div>
        );
      })}
    </div>
  );
};

export default Questions;
