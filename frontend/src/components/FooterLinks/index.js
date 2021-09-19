import React from 'react';

import footercss from './Footer.module.css'

function Footer() {
    return (
        <div className={footercss.footerContainer}>
            <div className={footercss.logoContainer}>
                <a href="https://github.com/Xalyume" target="_blank" class="github-link" style={{ color: "black" }} rel='noreferrer' >
                    <img className={footercss.logos}
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github"/>
                </a>
                <a href="https://www.linkedin.com/in/william-h-jang/" target="_blank" class="github-link" style={{ color: "black" }} rel='noreferrer' >
                    <img className={footercss.logos}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png" alt="linkedin"/>
                </a>
            </div>
        </div>
    )

}

export default Footer;
