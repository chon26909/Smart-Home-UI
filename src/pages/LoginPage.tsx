import { FC, useRef } from "react";
import { debounce } from 'lodash';
import styles from "./LoginPage.module.scss";

const LoginPage: FC = () => {
  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const btn_submit = useRef<any>(null);

  const submitForm = (e: any) => {

    console.log(e)

    const _username = username.current?.value;
    const _password = password.current?.value;

    console.log('username', _username);
    console.log('password', _password);

    debounce(() => { 
      console.log('api login')
    },300)
    
  };

  return (
    <div className={styles.LoginPage}>
  
    </div>
  );
};

export default LoginPage;
