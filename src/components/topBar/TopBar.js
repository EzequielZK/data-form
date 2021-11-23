import React from "react"
import Tab from "./Tab"
import { tabs } from "./tabs"
import cssStyles from './topBar.module.css'

export default function TopBar(){
    return(
        <div className={cssStyles.container}>
            {tabs.map((item, index) => (
                <Tab key={index} text={item.text} href={item.link} />
            ))}
        </div>
    )
}