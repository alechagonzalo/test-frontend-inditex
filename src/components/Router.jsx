import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Header";

import routes from "@/utils/routes";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {routes.map((r) => {
          const { Component, name, path } = r;
          return <Route key={name} path={path} element={<Component />} />;
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
