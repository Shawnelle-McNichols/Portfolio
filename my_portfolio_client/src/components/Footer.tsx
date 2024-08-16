import React from 'react';
import { ReactComponent as GithubIcon } from './icons/github-original.svg';
import { ReactComponent as LinkedIcon } from './icons/linkedin-original.svg';

const Footer: React.FC = () => {
    return (
        <footer id="footer">
            <div>
                <p>© Shawnelle McNichols, 2024</p>
            </div>

            <div className="socials">
                <a href="http://github.com/Shawnelle-McNichols">
                    <GithubIcon className="skill-icon" />
                </a><a href="http://linkedin.com/in/shawnelle-mcnichols">
                    <LinkedIcon className="skill-icon" />
                </a>
            </div>

        </footer>
    );
}
export default Footer;