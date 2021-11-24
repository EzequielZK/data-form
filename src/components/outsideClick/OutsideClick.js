import React, { useEffect } from "react";

function OutsideClick({ classStyle, onOutsideClick, children }) {
  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (!document.getElementById("container")?.contains(e.target)) {
        onOutsideClick();
      }
    });
  }, []);

  return (
    <div className={classStyle ? classStyle : null} id="container">
      {children}
    </div>
  );
}

export default OutsideClick;
