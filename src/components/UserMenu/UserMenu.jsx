import { useDispatch, useSelector } from "react-redux"
import { selectUser } from "../../redux/auth/selectors"
import { Button } from "@mui/material";
import css from './UserMenu.module.css'
import { logOut } from "../../redux/auth/operations";


export const UserMenu = () => {
    const user = useSelector(selectUser) 
    const dispatch = useDispatch();


    return (
      <div className={css.container}>
        <p className={css.text}>Welcome, {user.name}</p>
        <Button
          type="button"
          fullWidth
          variant="outlined"
                sx={{ backgroundColor: 'primary.dark' }}
                onClick={()=> dispatch(logOut())}
        >
          Logout
        </Button>
       
      </div>
    );
}