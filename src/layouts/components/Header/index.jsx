import styles from "./Header.module.scss";
import Navigation from "../Navigation";
function Header() {
    return (
        <header className={styles.header}>
            <h1>Header</h1>
            <Navigation />
        </header>
    );
}
export default Header;
