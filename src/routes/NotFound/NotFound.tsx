import * as S from './NotFound.style';

const NotFound = () => {
  return (
    <S.NotFound>
      <S.Header>
        <h1>NOT FOUND :(</h1>
      </S.Header>
      <S.BackButton onClick={() => (window.location.href = '/home')}>
        Back to home
      </S.BackButton>
    </S.NotFound>
  );
};

export default NotFound;
