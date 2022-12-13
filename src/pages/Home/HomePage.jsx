import React from 'react';
import { Helmet } from 'react-helmet';
import Header from "../../components/Header";

import './HomePage.css';

const HomePage = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Home | ENational Library</title>
            </Helmet>
            <div id="main">
                <Header />

            </div>
        </React.Fragment>
    );
};

export default HomePage;
