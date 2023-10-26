import type { FC } from "react";
import styles from "./container.module.scss";

interface ContainerProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Container: FC<ContainerProps> = ({ children, style }) => {
  return (
    <div className={styles.container} style={style}>
      {children}
    </div>
  );
};

export default Container;
