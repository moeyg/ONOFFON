import * as S from './Login.style';

const Login = () => {
  return (
    <S.LoginPage>
      <S.VisualEffect autoPlay loop muted>
        <source src='/videos/noise.mp4' type='video/mp4' />
      </S.VisualEffect>
      <S.Container>
        <S.Header>
          <S.Logo src='/public/images/logo.svg' />
          <S.Description>
            Find your next super movie adventure
            <br />
            Explore the best films
            <br />
            Super selection, super easy
          </S.Description>
        </S.Header>
        <S.LoginButton>Google Login</S.LoginButton>
      </S.Container>
    </S.LoginPage>
  );
};

export default Login;
