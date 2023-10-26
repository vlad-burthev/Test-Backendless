import { useState, type FC, Suspense, lazy } from "react";
import styles from "./tabs.module.scss";
import tabsData from "../../../assets/data/tabsData.json";
import { Route, Routes, NavLink } from "react-router-dom";

const DummyTable = lazy(() => import("./DummyTable/DummyTable"));
const DummyChart = lazy(() => import("./DummyChart/DummyChart"));
const DummyList = lazy(() => import("./DummyList/DummyList"));

interface TabsProps {}

const Tabs: FC<TabsProps> = () => {
  const [tabs] = useState(tabsData);

  return (
    <div className={styles.tabs}>
      <div className={styles.header}>
        {tabs.map((tab) => (
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            key={tab.id}
            to={tab.id}
          >
            {tab.title}
          </NavLink>
        ))}
      </div>
      <div className={styles.content}>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/dummyTable" element={<DummyTable tabs={tabs} />} />
            <Route path="/dummyChart" element={<DummyChart tabs={tabs} />} />
            <Route path="/dummyList" element={<DummyList tabs={tabs} />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default Tabs;
