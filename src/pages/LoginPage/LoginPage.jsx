import css from './LoginPage.module.css'
import DocumentTitle from "../../components/DocumentTitle";
import LoginForm from '../../components/LoginForm/LoginForm';

export default function LoginPage()  {
    return (
        <div className={css.container}>
            <DocumentTitle>LoginPage</DocumentTitle>
            <LoginForm  />
      </div>
    );
};
