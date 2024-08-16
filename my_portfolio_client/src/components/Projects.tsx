import React from 'react';
import Slider from 'react-slick';

const projects = [
    { id: 1, img: "/Homepage.png", title: "Project 1", description: "This here is a brief description of project 1", link: "" },
    { id: 2, img: "/Project2.png", title: "Project 2", description: "This here is a brief description of project 2", link: "" },
    { id: 3, img: "/Project2.png", title: "Project 3", description: "This here is a brief description of project 2", link: "" },
    { id: 4, img: "/Project2.png", title: "Project 4", description: "This here is a brief description of project 2", link: "" }
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
        prevArrow: <PrevArrow className={undefined} style={undefined} onClick={undefined} />

    }
    return (
        <section id="projects">
            <div className="container">
                <h1> My Projects</h1>
                    <Slider {...settings}>
                        {projects.map((project) => (
                            <div className="container">
                                <div key={project.id} className="card project-card">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img src={project.img} className="card-img" alt="Project goes here"></img>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">{project.title}</h5>
                                                <p className="card-text">{project.description}</p>
                                                <a href={project.link}>View Project</a>
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


