import { useNavigate, useLocation } from "react-router-dom";
import styles from './GoBack.module.css';

export default function GoBack({ backLinkHref }) {
    const navigate = useNavigate();
    const location = useLocation();

    const handleGoBack = () => {
        if (location.state?.from) {
            navigate(location.state.from);
        } else {
            navigate(backLinkHref);
        }
    };

    return (
        <button className={styles.goBackBtn} onClick={handleGoBack}>
            Go Back
        </button>
    );
}
