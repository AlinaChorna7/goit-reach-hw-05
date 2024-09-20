import { useNavigate } from "react-router-dom";
import styles from './GoBack.module.css'
export default function GoBack() {
    const navigate = useNavigate();

    const handleGoBack = () => {
        if (window.history.length > 2) {
            navigate(-1);
        } else {
            navigate('/movies');
        }
    };

    return ( <button className={styles.goBackBtn} onClick={handleGoBack}>
    Go Back
</button>);
}
