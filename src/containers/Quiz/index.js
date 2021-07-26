import React, { useState, useEffect } from 'react';
import "./style.scss"
const Quiz = () => {

    const [data, setData] = useState({
        category: 'Linux',
        difficulty: 'Any Difficulty',
        noOfQues: 10
    });

    const handleOnChange = ({ target: { value, name } = {} }) => {
        setData({
            ...data,
            [name]: value
        })
    }


    console.log("data", data);
    return (
        <div className="quiz">
            <div className="quiz-backdrop">
                <div className="quiz-backdrop">
                    <div className="quiz-backdrop">
                    </div>
                </div>
            </div>
            <div className="quiz-card">
                <div className="category-form">
                    <select name="category" value={data?.category} onChange={handleOnChange} id="category">
                        <option value="Linux">Linux</option>
                        <option value="Bash">Bash</option>
                        <option value="Random">Random</option>
                        <option value="SQL">SQL</option>
                    </select>
                    <br />
                    <select name="difficulty" value={data?.difficulty} onChange={handleOnChange} id="difficulty">
                        <option value="Any Difficulty">Any Difficulty</option>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                    <br />
                    <select name="noOfQues" value={data?.noOfQues} onChange={handleOnChange} id="noOfQues">
                        {
                            [...Array(20).keys()]?.map(item => {
                                return (<option value={item + 1} key={item + 1}>{item + 1}</option>)
                            })
                        }
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Quiz;
