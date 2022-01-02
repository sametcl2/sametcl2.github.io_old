import React from 'react'
import GithubIcon from '../images/github.js'
import LinkedinIcon from '../images/linkedin'
import TwitterSquareIcon from '../images/twitter'
import CV from '../images/CV'
import CVpdf from '../images/CV.pdf' 

import {HeaderContainer, InnerLeft, SVGIcon, HeaderLink} from './social.module.css'

export default function Social() {
    return (
        <div className={HeaderContainer}>
            <div className={InnerLeft}>
                    <a className={HeaderLink} href="https://github.com/sametcl2" target="_blank">
                        <GithubIcon className={SVGIcon} fill="#ffb038" stroke="#ffb038"/>
                    </a>
                <a className={HeaderLink} href="https://linkedin.com/in/sametsahin0" target="_blank">
                    <LinkedinIcon className={SVGIcon} fill="#ffb038" stroke="#ffb038"/>
                </a>
                <a className={HeaderLink} href="https://twitter.com/sametsah_in" target="_blank">
                    <TwitterSquareIcon className={SVGIcon} fill="#ffb038" stroke="#ffb038"/>  
                </a>
            </div>
            <div>
                <a className={HeaderLink} href={CVpdf} download="SametSahin_Ozgecmis.pdf">
                    <CV fill="#ffb038" stroke="#ffb038"/>
                </a>
            </div>
        </div>
    )
}
