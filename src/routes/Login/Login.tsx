import { auth } from '../../firebase';
import {
  browserLocalPersistence,
  GoogleAuthProvider,
  setPersistence,
  signInWithPopup,
} from 'firebase/auth';
import * as S from './Login.style';

const Login = () => {
  const provider = new GoogleAuthProvider();

  const handleAuth = () => {
    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        return signInWithPopup(auth, provider);
      })
      .catch((error) => {
        console.error('Error google login: ', error);
      });
  };

  return (
    <S.LoginPage>
      <S.VisualEffect autoPlay loop muted>
        <source src='/videos/noise.mp4' type='video/mp4' />
      </S.VisualEffect>
      <S.Container>
        <S.Header>
          <S.Logo src='/images/logo.svg' alt='로고이미지' />
          <S.Description>
            Find your next super movie adventure
            <br />
            Explore the best films
            <br />
            Super selection, super easy
          </S.Description>
        </S.Header>
        <S.LoginButton onClick={handleAuth}>Google Login</S.LoginButton>
      </S.Container>
    </S.LoginPage>
  );
};

export default Login;
