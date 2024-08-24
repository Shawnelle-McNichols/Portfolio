import React from 'react';
import Slider from 'react-slick';

const projects = [
    {
        id: 1, img: "/HomeLBBooks.png", title: "Book Inventory System",
        description: "Created with React, Spring Boot and MySQL. This application allows users to search Google Books API and add books to the inventory list.",
        link: "https://github.com/Shawnelle-McNichols/Book-Inventory-System/tree/main",
        demo: "https://drive.google.com/file/d/1BGGpm4gIREiJaqAJRiCC4F1XtMMOUXr5/view?usp=drive_link"
    },
    {
        id: 2, img: "MCSHome.png", title: "Medical Clinic System",
        description: "Created with MERN stack. Complete with secure user authentication system. Allows patients to fully manage their doctor's appointments.",
        link: "https://github.com/Shawnelle-McNichols/Medical-Appointment-System/tree/main",
        demo: "https://drive.google.com/file/d/1lRkDfj7upW3FIZ2af01np0j_CF2MoFe2/view?usp=drive_link"
    },
    {
        id: 3, img: "/HHS.png", title: "Hotel Reservation System",
        description: "Developed with Laravel the PHP framework and MySQL for the database. Allows users to open an account book a hotel reservation, based on hotel's availability.",
        link: "https://github.com/Shawnelle-McNichols/Holiday-Hotel",
        demo: "https://drive.google.com/file/d/1gjp6_ePhZpxglQMV7ESd4EVpSpsbXVWT/view?usp=drive_link"
    },
    {
        id: 4, img: "/Quiz.png", title: "Programming Quiz",
        description: "Created with C# and WPF forms, this project is a simple quiz game with categorized questions loaded from a json file.",
        link: "https://github.com/Shawnelle-McNichols/ProgrammingQuiz",
        demo: "https://drive.google.com/file/d/1zBlr65E8YVj9e71hn2y0sVSLE0zgbvKr/view?usp=drive_link"
    }
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
                                                <a className="project-link" href={project.demo}>Demo</a>
                                                <a className="project-link" href={project.link}>Code</a>
                                            
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


