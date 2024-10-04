import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/homeAllProject.css";

const HomeAllProjects = () => {
    return (
        <>
            <div className="heading">
                <h2>My Portfolio</h2>
                <p>Explore the achievements of the completed projects, showcasing successful outcomes and remarkable outputs. These endeavors exemplify the unwavering commitment to excellence and the skillful execution based on client goals and requirements.</p>
            </div>
            <div className="all-projects-container">
                {INFO.projects.map((project, index) => (
                    <div className="all-projects-project" key={index}>
                        <Project
                            logo={project.logo}
                            title={project.title}
                            description={project.description}
                            linkText={project.linkText}
                            link={project.link}
                        />
                    </div>
                ))}
            </div>
        </>
    );
};

export default HomeAllProjects;
