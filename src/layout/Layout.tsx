import type { FC } from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router";

const Layout: FC = (): JSX.Element => {
  return (
    <>
      <Header />

      <Outlet />
    </>
  );
};

export default Layout;
