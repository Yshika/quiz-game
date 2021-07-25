import React from 'react';
import './style.scss';
import nerd from "../../assets/images/nerd.png"
const Main = () => {
    return (
        <div className='main-page'>
            <div className="container">
                <section className="left">
                    <p>
                        OH, Hello There Nerd!
                        <br />
                        A Perfect Quiz just for you...
                        <br />
                        Just click on the button below
                        <br />
                        & Choose your Poison!
                    </p>
                    <button className="btn">Take a Quiz</button>
                </section>
                <section className="right">
                    <div className="img-container">
                        <img src={nerd} alt="" />
                    </div>
                </section>
            </div>
            <div className="main">
                <section>
                    <h2>
                        Choose your Topic!
                    </h2>
                    <h3>We will help you test your knowledge!</h3>
                </section>

            </div>
        </div>
    )
}

export default Main
