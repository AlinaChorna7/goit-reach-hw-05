import { useNavigate } from "react-router-dom";
import styles from './GoBack.module.css';

export default function GoBack({ backLinkHref }) {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(backLinkHref);
    };

    return (
        <button className={styles.goBackBtn} onClick={handleGoBack}>
            Go Back
        </button>
    );
}
