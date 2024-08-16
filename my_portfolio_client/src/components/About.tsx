const About: React.FC = () => {
    return (
        <section id="about">
            <div className="container my-5">
                <div className="row align-items-center">
                    <div className="col-md-8">
                    <h1>About Me</h1>
                        <p>
                            I'm Shawnelle, a student currently completing an <b>AEC in Full Stack Development</b> at John Abbott College.
                        </p>
                        <p>
                            My journey in web development started back in college in St.Vincent, when I decided to do an <b>A-Level in Computer Science </b>having no idea what it was
                            at the time. Since then I've developed a fascination for building websites and exploring how everything functions behind the scenes. 
                        </p>
                        <p>
                            I particularly enjoy solving problems in code and irl and producing functional yet creative solutions.
                             I'm particularly interest in pursuing the numerous possibilities of Javascript frameworks and cloud-based technologies.
                        </p>
                        <p>
                            When I'm not coding, you can find me testing new dessert recipes, tackling puzzles, crocheting or emmersing myself into a good book.
                            I'm always looking for new hobbies to spark my creativity and help me de-stress.
                        </p>
                        <p>
                            I'm looking forward to applying my skills and enthusiasm to a team where I can contribute to unique and impactful projects
                            and continue to grow as a developer. <b>Let's connect and create something amazing together!</b>
                        </p>
                        <a href="#contact">
                            <button type="button" className="btn-about"> Contact Me</button>
                        </a>
                    </div>
                    <div className="col-md-4 text-center text-md-left mb-3 mb-md-0">
                        <img src="/IMG_3890.JPG" alt="Shawnelle McNichols" className="img-fluid img-me"></img>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default About;