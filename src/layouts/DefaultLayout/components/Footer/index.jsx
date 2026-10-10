import { Link } from "react-router";
import styles from "./Footer.module.scss";

function Footer() {
    return (
        <footer className={styles.footer}>
            <h1>Footer 2</h1>

            <nav>
                <Link to="/contact">Contact</Link>
                <Link to="/privacy">Privacy Policy</Link>
            </nav>
        </footer>
    );
}
export default Footer;
