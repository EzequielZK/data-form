import React from "react";
import Images from "../../images/Images";
import Tab from "./Tab";
import { tabs } from "./tabs";
import cssStyles from "./topBar.module.css";

export default function TopBar({ location, children }) {
  return (
    <div className={cssStyles.container}>
      <div className={cssStyles.topBar}>
        <img src={Images.Logo} className={cssStyles.logo} />
        {/* {tabs.map((item, index) => (
                <Tab key={index} text={item.text} href={item.link} />
            ))} */}
      </div>
      <div className={cssStyles.contentContainer}>
        <div className={cssStyles.sideMenu}>
          {tabs.map((item, index) => (
            <Tab
              key={index}
              text={item.text}
              href={item.link}
              selected={item.link === location}
            />
          ))}
        </div>
        <div className={cssStyles.children}>{children}</div>
      </div>
    </div>
  );
}
