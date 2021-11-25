import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import cssStyles from "./tab.module.css";

export default function Tab({ text, href, selected }) {
  const containerStyle = `${cssStyles.container} ${
    selected ? cssStyles.selected : ""
  }`;

  return (
    <a className={containerStyle} href={href}>
      <span>{text}</span>
      <FontAwesomeIcon icon={faChevronRight} />
    </a>
  );
}
