import React from "react";

function article_1() {
	return {
		date: "7 May 2023",
		title: "The Benefits of Cloud Computing",
		description:
			"Cloud computing offers a range of benefits, including cost savings and increased flexibility. Find out why more businesses are turning to the cloud.",
		keywords: [
			"The Benefits of Cloud Computing",
			"Rahul",
			"Rahul Patel",
			"Rahul Chovatiya",
		],
		style: `
				.article-content {
					display: flex;
					
					align-items: center;
				}

				.randImage {
					align-self: center;
					width: 50%;
					
				}
				`,
		body: (
			<React.Fragment>

				<div className="article-content">
					<div className="paragraph">Simply put, cloud computing is the delivery of computing services—including servers, storage, databases, networking, software, analytics, and intelligence—over the internet (“the cloud”) to offer faster innovation, flexible resources, and economies of scale. You typically pay only for cloud services you use, helping you lower your operating costs, run your infrastructure more efficiently, and scale as your business needs change.</div>
					<img
						src="https://ik.imagekit.io/cri8rv9sn/Overview_image.avif?updatedAt=1728043231838"
						alt="random"
						className="randImage"
					/>
				</div>
				<div>
					Not all clouds are the same and no single type of cloud computing is right for everyone. Several different models, types, and services have evolved to help offer the right solution for your needs.
					First, you need to determine the type of cloud deployment, or cloud computing architecture, that your cloud services will be implemented on. There are three different ways to deploy cloud services: on a public cloud, private cloud, or hybrid cloud.
				</div>
				<div>
					<div className="mt-14">
						<h2 className="text-3xl">Types of cloud services: IaaS, PaaS, serverless, and SaaS</h2>
						<p className="mt-2">Most cloud computing services fall into four broad categories: infrastructure as a service (IaaS), platform as a service (PaaS), serverless, and software as a service (SaaS). These are sometimes called the cloud computing "stack" because they build on top of one another. Knowing what they are and how they’re different makes it easier to accomplish your business goals.</p>
					</div>
					<div className="grid grid-cols-2 gap-6 mt-4">
						<div>
							<p className="text-xl font-bold">IaaS</p>
							<p>The most basic category of cloud computing services. With infrastructure as a service (IaaS), you rent IT infrastructure—servers and virtual machines (VMs), storage, networks, operating systems—from a cloud provider on a pay-as-you-go basis.</p>
						</div>
						<div>
							<p className="text-xl font-bold">PaaS</p>
							<p>Platform as a service (PaaS) refers to cloud computing services that supply an on-demand environment for developing, testing, delivering, and managing software applications. PaaS is designed to make it easier for developers to quickly create web or mobile apps, without worrying about setting up or managing the underlying infrastructure of servers, storage, network, and databases needed for development.</p>
						</div>
						<div>
							<p className="text-xl font-bold">SaaS</p>
							<p>Software as a service (SaaS) is a method for delivering software applications over the internet, on demand and typically on a subscription basis. With SaaS, cloud providers host and manage the software application and underlying infrastructure, and handle any maintenance, like software upgrades and security patching. Users connect to the application over the internet, usually with a web browser on their phone, tablet, or PC.</p>
						</div>
						<div>
							<p className="text-xl font-bold">Serverless computing</p>
							<p>Overlapping with PaaS, serverless computing focuses on building app functionality without spending time continually managing the servers and infrastructure required to do so. The cloud provider handles the setup, capacity planning, and server management for you. Serverless architectures are highly scalable and event-driven, only using resources when a specific function or trigger occurs.</p>
						</div>
					</div>
				</div>
				<div>
					<p className="text-3xl mt-14">Uses of cloud computing</p>
					<p className="mt-4">You’re probably using cloud computing right now, even if you don’t realize it. If you use an online service to send email, edit documents, watch movies or TV, listen to music, play games, or store pictures and other files, it’s likely that cloud computing is making it all possible behind the scenes. A variety of organizations—from tiny startups to global corporations, government agencies to non-profits—have embraced cloud computing technology for all sorts of reasons.</p>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "7 May 2023",
		title: "Artificial Intelligence in Healthcare",
		description:
			"AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Rahul",
			"Rahul Patel",
			"Rahul Chovatiya",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
