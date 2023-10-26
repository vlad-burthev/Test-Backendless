import type { FC } from "react";
import Container from "../../components/Container/Container";

import styles from "./home.module.scss";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <main className={styles.home}>
      <Container>
        <div className={styles.title}>
          <h1>Build scalable apps at lightning speed</h1>
          <p>
            Everything you need to build and run high-performance apps, all in
            one place. Scalable, extensible, affordable – coding optional.
          </p>
        </div>
      </Container>
    </main>
  );
};

export default Home;
