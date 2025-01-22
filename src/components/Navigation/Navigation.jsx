import { NavLink } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
    return (
        <nav className="nav">
            <ul className="nav-list">
                <li className="nav-item">
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => 
                            isActive ? 'nav-link active' : 'nav-link'
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink 
                        to="/movies" 
                        className={({ isActive }) => 
                            isActive ? 'nav-link active' : 'nav-link'
                        }
                    >
                        Movies
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
