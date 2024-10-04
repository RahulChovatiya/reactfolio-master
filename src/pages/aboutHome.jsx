import React, { useEffect } from "react";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/aboutHome.css";

const AboutHome = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const currentSEO = SEO.find((item) => item.page === "about");

    return (
        <React.Fragment>

            <div className="page-content1">
                <div className="content-wrapper">
                    <div className="about-container">
                        <div className="about-main flex flex-row-reverse">
                            <div className="about-right-side">
                                <div className="title about-title">
                                    {INFO.about.title}
                                </div>

                                <div className="about-subTitle">
                                    {INFO.about.subTitle}
                                </div>

                                <div className="subtitle about-subtitle">
                                    {INFO.about.description}
                                </div>
                            </div>

                            <div className="about-left-side">
                                <div className="about-image-container">
                                    <div className="about-image-wrapper">
                                        <img
                                            src="homepage.jpg"
                                            alt="about"
                                            className="about-image"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default AboutHome;
