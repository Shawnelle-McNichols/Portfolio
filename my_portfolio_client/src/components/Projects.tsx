import React from 'react';
import Slider from 'react-slick';

const projects = [
    { id: 1, img: "/HomeLBBooks.png", title: "Book Inventory System", description: "Created with React, Spring Boot and MySQL. This application allows users to search Google Books API and add books to the inventory list.", link: "https://github.com/Shawnelle-McNichols/Book-Inventory-System/tree/main" },
    { id: 2, img: "/Project2.png", title: "Medical Clinic System", description: "This here is a brief description of project 2", link: "" },
    { id: 3, img: "/Project2.png", title: "Hotel Reservation System", description: "This here is a brief description of project 2", link: "" },
    { id: 4, img: "/Project2.png", title: "Upcoming", description: "This here is a brief description of project 2", link: "" }
]

const NextArrow = (props: { className: any; style: any; onClick: any; }) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg"
                className="arrow"
                viewBox="0 0 24 24">
                <path d="m14.707 12.707-4 4a1 1 0 0 1-1.414-1.414L12.586 12 9.293 8.707a1 1 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414z" fill="#1c1b1e" /></svg>
        </div>
    )
}
const PrevArrow = (props: { className: any; style: any; onClick: any; }) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg"
                className="arrow"
                viewBox="0 0 24 24">
                <path d="M14 17a1 1 0 0 1-.707-.293l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 1 1 1.414 1.414L11.414 12l3.293 3.293A1 1 0 0 1 14 17z" /></svg>
        </div>
    )
}
const Projects = () => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <NextArrow className={undefined} style={undefined} onClick={undefined} />,
        prevArrow: <PrevArrow className={undefined} style={undefined} onClick={undefined} />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }

        ]
    }

    return (
        <section id="projects">
            <div className="container">
                <h1> My Projects</h1>
                <Slider {...settings}>
                    {projects.map((project) => (
                        <div className="container">
                            <div key={project.id} className="card project-card">
                                <div className="">
                                    <div className="">
                                        <img src={project.img} className="card-img-top" alt="Project goes here"></img>
                                    </div>
                                    <div className="">
                                        <div className="card-body">
                                            <h4 className="card-title">{project.title}</h4>
                                            <p className="card-text">{project.description}</p>
                                            <div>
                                                <a className="project-link" href={project.link}>View Demo</a>
                                                <a className="project-link" href={project.link}>View Code</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section >
    );
}
export default Projects;


