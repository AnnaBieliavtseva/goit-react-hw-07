import { useSelector } from "react-redux"
import { selectIsLoggedIn } from "../../redux/auth/selectors"
import { NavLink } from "react-router-dom"
import HomeIcon from '@mui/icons-material/Home';


export const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn)

    return (
   
        <nav>
          <NavLink to="/">
            <HomeIcon sx={{ fontSize: '36px', color: 'primary.dark' }} />
          </NavLink>
          {isLoggedIn && <NavLink to="/tasks">Contacts</NavLink>}
        </nav>

    );
}