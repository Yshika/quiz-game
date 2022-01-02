import React, { useState } from 'react';
import "./style.scss";
import axios from "axios";
import { RouteName } from '../../routes/_base';
import { useHistory } from 'react-router-dom';
const Quiz = () => {

    const [data, setData] = useState({
        category: '',
        difficulty: '',
        noOfQues: 10
    });
    const history = useHistory();
    const handleOnChange = ({ target: { value, name } = {} }) => {
        setData({
            ...data,
            [name]: value
        })
    }

    const handleSubmit = () => {

        axios.get("https://quizapi.io/api/v1/questions?apiKey=Y8P8ae8ghMNpzmuMaDHmQuHPNNpXA4uZERJJ1JLu", {
            params: {
                limit: data.noOfQues,
                category: data.category,
                difficulty: data.difficulty
            }
        }).then((res) => {
            console.log("data", data, res?.data);
            history.push(RouteName.Questions, { data: res?.data });
        }

        ).catch((e) => {
            console.log("error::::", e)
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
                    <article>
                        <label className="quiz-label">Category</label>
                        <select className="quiz-select" name="category" value={data?.category} onChange={handleOnChange} id="category">
                            <option className="quiz-option" value="" defaultValue>Any Category</option>
                            <option className="quiz-option" value="Linux">Linux</option>
                            <option className="quiz-option" value="Bash">Bash</option>
                            <option className="quiz-option" value="Random">Random</option>
                            <option className="quiz-option" value="SQL">SQL</option>
                        </select>
                    </article>
                    <article>
                        <label className="quiz-label">Difficulty</label>
                        <select className="quiz-select" name="difficulty" value={data?.difficulty} onChange={handleOnChange} id="difficulty">
                            <option className="quiz-option" value="" defaultValue>Any Difficulty</option>
                            <option className="quiz-option" value="Easy">Easy</option>
                            <option className="quiz-option" value="Medium">Medium</option>
                            <option className="quiz-option" value="Hard">Hard</option>
                        </select>
                    </article>
                    <article>
                        <label className="quiz-label">Questions</label>
                        <select className="quiz-select" name="noOfQues" value={data?.noOfQues} onChange={handleOnChange} id="noOfQues">
                            {
                                [...Array(20).keys()]?.map(item => {
                                    return (<option className="quiz-option" value={item + 1} key={item + 1}>{item + 1}</option>)
                                })
                            }
                        </select>
                    </article>
                    <button className="quiz-btn" onClick={handleSubmit}>Generate Quiz</button>
                </div>
            </div>
        </div>
    );
}

export default Quiz;
