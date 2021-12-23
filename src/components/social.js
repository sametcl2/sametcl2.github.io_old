import React from 'react'
import GithubIcon from '../images/github.js'
import LinkedinIcon from '../images/linkedin'
import TwitterSquareIcon from '../images/twitter'
import CV from '../images/CV'

import {HeaderContainer, InnerLeft, SVGIcon} from './social.module.css'

export default function Social() {
    return (
        <div className={HeaderContainer}>
            <div className={InnerLeft}>
                    <a href="https://github.com/sametcl2" target="_blank">
                        <GithubIcon className={SVGIcon} fill="#ffb038" stroke="#ffb038"/>
                    </a>
                <a href="https://linkedin.com" target="_blank">
                    <LinkedinIcon className={SVGIcon} fill="#ffb038" stroke="#ffb038"/>
                </a>
                <a href="https://twitter.com" target="_blank">
                    <TwitterSquareIcon className={SVGIcon} fill="#ffb038" stroke="#ffb038"/>  
                </a>
            </div>
            <div>
                <CV className={SVGIcon} fill="#ffb038" stroke="#ffb038"/>
            </div>
        </div>
    )
}
