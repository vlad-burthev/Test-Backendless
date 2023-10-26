import type { FC } from "react";
import { Route, Routes } from "react-router";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import CMS from "../pages/CMS/CMS";

interface AppRouterProps {}

const AppRouter: FC<AppRouterProps> = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/cms/*" element={<CMS />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
