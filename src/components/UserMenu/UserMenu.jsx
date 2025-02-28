import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import css from './UserMenu.module.css';
import { logOut } from '../../redux/auth/operations';
import ContactBtn from '../Button/ContactBtn';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div>
      <div className={css.container}>
        <ContactBtn type="button" handleClick={() => dispatch(logOut())} className={css.btn}>
          Logout
        </ContactBtn>
      </div>
      <p className={css.text}>Welcome, {user.name}</p>
    </div>
  );
};
