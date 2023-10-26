import { type FC } from "react";
import Container from "../../components/Container/Container";

import styles from "./cms.module.scss";
import { Route, Routes } from "react-router-dom";
import CmsAside from "../../components/CMS/CmsAside/CmsAside";
import Tabs from "../../components/CMS/Tabs/Tabs";

const CMS: FC = () => {
  return (
    <div className={styles.cms}>
      <Container>
        <div className={styles.content}>
          <CmsAside />

          <div className={styles.info}>
            <Routes>
              <Route path="tabs/*" element={<Tabs />} />
              <Route path="2" element={<h1>2</h1>} />
              <Route path="3" element={<h1>3</h1>} />
            </Routes>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CMS;
