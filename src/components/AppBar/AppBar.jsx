import { useSelector } from "react-redux"
import { selectIsLoggedIn } from "../../redux/auth/selectors"
import { AuthNav } from "../AuthNav/AuthNav"
import { Navigation } from "../Navigation/Navigation"
import { UserMenu } from "../UserMenu/UserMenu"
import ColorModeSelect from "../Shared-theme/ColorModeSelect"
import css from './AppBar.module.css'


export const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn)

    return (
        <header className={css.header}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
            {!isLoggedIn && <ColorModeSelect sx={{ display: 'block', }} />}
        </header>
    )
}