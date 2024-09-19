import * as S from './Navigation.style';

export default function Navigation() {
  return (
    <S.Nav>
      <S.Logo
        src='/public/images/logo.svg'
        alt='35MM Logo'
        onClick={() => (window.location.href = '/')}
      />
      <S.Menu>
        <S.Search>
          <S.SearchInput />
          <S.SearchIcon
            src='/public/images/search-icon.svg'
            alt='search icon'
          />
        </S.Search>
        <S.Profile
          src='/public/images/profile-icon.svg'
          alt='user profile icon'
        />
      </S.Menu>
    </S.Nav>
  );
}
