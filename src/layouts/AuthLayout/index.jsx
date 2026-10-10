import { Outlet } from "react-router";
import Header from "../components/Header";
import AuthSidebar from "../AuthLayout/components/AuthSidebar";
import styles from "./AuthLayout.module.scss";
function AuthLayout() {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <AuthSidebar />

                <Outlet />
            </div>
        </>
    );
}
export default AuthLayout;
