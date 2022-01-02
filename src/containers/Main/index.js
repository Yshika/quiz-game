import React from 'react';
import './style.scss';
import nerd from "../../assets/images/nerd.png"
import { Link } from 'react-router-dom';
import { RouteName } from '../../routes/_base';
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
                    <Link to={RouteName.Quiz} className="route">
                        <button className="btn">Take a Quiz</button>
                    </Link>
                </section>
                <section className="right">
                    <div className="img-container">
                        <img src={nerd} alt="" />
                    </div>
                </section>
            </div>
            {/* <div className="main">
                <section>
                    <h2>
                        Choose your Topic!
                    </h2>
                    <h3>We will help you test your knowledge!</h3>
                </section>

            </div> */}
            <footer className="footer">
                <address>
                    In case of any queries, please <a className="link-mail" href='mailto:yshika0581@gmail.com'>contact me</a>.
                </address>
            </footer>
        </div>
    )
}

export default Main
