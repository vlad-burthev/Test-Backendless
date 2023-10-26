import type { FC } from "react";
import Container from "../Container/Container";

import styles from "./header.module.scss";

import headerLogo from "../../assets/image/header-logo.svg";
import { Link } from "react-router-dom";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <header>
      <Container>
        <div className={styles.content}>
          <Link to="/" className={styles.logo}>
            <img src={headerLogo} alt="header-logo" />
          </Link>

          <nav className={styles.nav}>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Marketplace</a>
          </nav>

          <Link className={styles["cms__btn"]} to="cms/tabs">
            CMS
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
