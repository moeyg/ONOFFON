import * as S from './NotFound.style';

const NotFound = () => {
  return (
    <S.NotFound>
      <S.VisualEffect autoPlay loop muted>
        <source src='/videos/noise.mp4' type='video/mp4' />
      </S.VisualEffect>
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
