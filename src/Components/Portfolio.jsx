/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Shark Helpers",
    description:
      "Collaboration to cre collaborated closely with Shark Helpers to create a professional and user-friendly website that effectively communicates their brand identity, services, and competitive advantages.ate a beginner friendly article to help explain Azure Static Web Apps and tooling to get started.",
    url: "https://sharkhelpers.com/",
  },
  {
    title: "Salento Hikers",
    description:
      "I worked with Salento Hikers to create three landing pages that highlighted the tour`s information and price and encouraged visitors to book them.",
    url: "https://salentohikers.com/exploring-the-paramo/",
  },
  {
    title: "Aligned",
    description:
      "Aligned wanted a website that effectively communicates the breadth of its offerings, builds trust with potential customers, and encourages inquiries and conversions.",
    url: "https://alignedautomation.com/",
  },
  {
    title: "Raven Yard",
    description:
      "I collaborated with Ravenyard to develop a sophisticated website that reflects their expertise and professionalism.",
    url: "https://ravenyard.com/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
