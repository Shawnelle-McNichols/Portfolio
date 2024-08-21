import React, {useState, useEffect} from 'react';
import {ReactComponent as Arrow} from './icons/arrow-up-outline.svg';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if(window.scrollY > 500){
            setIsVisible(true);
        }else{
            setIsVisible(false);
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.addEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <>
        {isVisible && (
            <Arrow className="btn-scroll" onClick={scrollToTop} width={30}/>
        )}</>
    )
}

export default BackToTop;