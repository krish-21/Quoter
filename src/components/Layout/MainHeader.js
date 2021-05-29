import { NavLink } from "react-router-dom";

import styles from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Quoter</h1>
      <nav>
        <NavLink to="/home" activeClassName={styles.active}>
          Home
        </NavLink>
        <NavLink to="/quotes" exact activeClassName={styles.active}>
          Quotes
        </NavLink>
        <NavLink to="/quotes/new" activeClassName={styles.active}>
          New Quote
        </NavLink>
      </nav>
    </header>
  );
};

export default MainHeader;
