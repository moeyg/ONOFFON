import * as S from './Login.style';

const Login = () => {
  return (
    <S.LoginPage>
      <S.Container>
        <S.Header>
          <S.Logo src='/public/images/logo-black.svg' />
          <S.Description>
            Find your next super movie adventure
            <br />
            Explore the best films
            <br />
            Super selection, super easy
          </S.Description>
        </S.Header>
        <S.QRcode
          src='/images/repo-qrcode.svg'
          alt='github repo로 이동하는 qrcode'
        />
        <S.LoginButton>35MM 로그인하기</S.LoginButton>
        <S.Copyright>ⓒmoeyg</S.Copyright>
      </S.Container>
    </S.LoginPage>
  );
};

export default Login;
