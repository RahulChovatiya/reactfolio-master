import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work Experience"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./TSC.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">The Special Character PVT.LTD</div>
							<div className="work-subtitle">
								Full-Stack Developer
							</div>
							<div className="work-duration">June-2023 to April-2024</div>
						</div>
						<div className="work">
							<img
								src="./easy_tax_1.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Electrocom Software PVT.LTD</div>
							<div className="work-subtitle">
								Full-Stack Developer
							</div>
							<div className="work-duration">Apile-2024 - Present</div>
						</div>
					</div>
				}
			/>

		</div>
	);
};

export default Works;
