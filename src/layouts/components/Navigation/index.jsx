import { Link } from "react-router";
import styles from "./Navigation.module.scss";
function Navigation() {
    return (
        <nav className={styles.nav}>
            <Link to="/"> Home</Link>
            <Link to="/about"> About</Link>
            <Link to="/posts"> Posts</Link>
            <Link to="/contact"> Contact</Link>
            <Link to="/privacy"> Privacy</Link>
            <Link to="/login"> Login</Link>
            <Link to="/register"> Register</Link>
        </nav>
    );
}
export default Navigation;
