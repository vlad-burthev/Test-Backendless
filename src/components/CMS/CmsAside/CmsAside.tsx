import type { FC } from "react";
import { NavLink } from "react-router-dom";

import styles from "./CmsAside.module.scss";

interface CmsAsideProps {}

const CmsAside: FC<CmsAsideProps> = () => {
  return (
    <aside>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? styles.active : "")}
          to={"tabs"}
        >
          Tabs
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? styles.active : "")}
          to={"2"}
        >
          Other links
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? styles.active : "")}
          to={"3"}
        >
          Other links
        </NavLink>
      </nav>
    </aside>
  );
};

export default CmsAside;
