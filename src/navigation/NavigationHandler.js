import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Modal } from "../components";
import TopBar from "../components/topBar/TopBar";
import { publicPaths } from "./paths";

export default function NavigationHandler() {
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        {publicPaths.map((item, index) => (
          <Route
            key={index}
            element={item.element}
            path={item.path}
            exact={item.exact}
          />
        ))}
      </Routes>
      <Modal />
    </BrowserRouter>
  );
}
