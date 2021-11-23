import React from "react"
import cssStyles from './tab.module.css'

export default function Tab({text, href, selected}){

    const containerStyle = selected ? cssStyles.container.selected : cssStyles.container;

    return(
        <a className={containerStyle} href={href} >
            <span>{text}</span>
        </a>
    )
}