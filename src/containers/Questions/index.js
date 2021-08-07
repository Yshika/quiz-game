import React from 'react'
import { useLocation } from 'react-router-dom';
import "./style.scss";
const Questions = () => {
    const { state: { data = {} } } = useLocation();
    console.log(data);
    return (

        <div className="ques">
            {data.map(({ question = "", answers = [] }, index) => {
                return (
                    <div key={index} className="questions-card" style={{ justifySelf: index % 2 === 0 ? '' : "self-end" }}>
                        <div>{question}
                        </div>
                        {Object.values(answers).map((ele, i) => (
                            ele ? <div>
                                <input type="checkbox" value={ele} key={i}></input>
                                <label>{ele}</label>
                            </div> : void (0)
                        ))}
                    </div>
                )
            })}

        </div>
    )
}

export default Questions;
