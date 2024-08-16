import React from 'react';

import {ReactComponent as htmlIcon} from './icons/html5-original.svg';
import {ReactComponent as cssIcon} from './icons/css3-original.svg';
import {ReactComponent as awsIcon} from './icons/aws.svg';
import {ReactComponent as bootstrapIcon} from './icons/bootstrap-original.svg';
import {ReactComponent as javaIcon} from './icons/java-original.svg';
import {ReactComponent as jsIcon} from './icons/javascript-original.svg';
import {ReactComponent as reactIcon} from './icons/react-original.svg';
import {ReactComponent as phpIcon} from './icons/php-original.svg';
import {ReactComponent as springIcon} from './icons/spring-original.svg';
import {ReactComponent as mysqlIcon} from './icons/mysql-original.svg';
import {ReactComponent as mongodbIcon} from './icons/mongodb-original.svg';
import {ReactComponent as csharpIcon} from './icons/csharp-original.svg';

const skills = [
    {name:"HTML",icon: htmlIcon},
    {name:"CSS", icon: cssIcon},
    {name:"AWS", icon: awsIcon },
    {name:"Bootstrap", icon: bootstrapIcon},
    {name:"Java", icon:javaIcon},
    {name:"JavaScript", icon:jsIcon},
    {name:"React", icon:reactIcon},
    {name:"PHP", icon:phpIcon},
    {name:"SpringBoot", icon:springIcon},
    {name:"MySQL", icon:mysqlIcon},
    {name:"MongoDB", icon:mongodbIcon},
    {name:"C#", icon:csharpIcon}
]
const Skills: React.FC = () => {
    return (
        <section id="skills" className="container my-5">
            <h1 className="text-center">I have a particular set of skills...</h1>
            <div className="row text-center">
              {skills.map(skill=> (
                <div key={skill.name} className="col-md-4 mb-3">
                    <div className="skill-item p-md-3 p-0">
                        {skill.icon ? <skill.icon className="skill-icon"/> : null}
                    <span className="skill-name">{skill.name}</span>
                    </div>
                </div>
              ))}
            </div>
        </section>
    );
}
export default Skills;