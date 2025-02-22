import css from './LoginPage.module.css'
import DocumentTitle from "../../components/DocumentTitle";
import SignInCard from "../../components/SignInSide/SignInCard";

export default function LoginPage()  {
    return (
        <div className={css.container}>
            <DocumentTitle>LoginPage</DocumentTitle>
            <SignInCard  />
      </div>
    );
};
