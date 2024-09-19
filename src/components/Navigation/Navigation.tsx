import * as S from './Navigation.style';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [inputVisible, setInputVisible] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const { search } = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(search);
    const text = query.get('q');
    if (text) setSearchValue(text);
  }, [search]);

  const handleSearchClick = () => {
    setInputVisible((prev) => !prev);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`, { replace: true });
    if (!inputVisible && inputRef.current) inputRef.current.focus();
  };

  return (
    <S.Nav>
      <S.Logo
        src='/public/images/logo.svg'
        alt='35MM Logo'
        onClick={() => (window.location.href = '/')}
      />
      <S.Menu>
        <S.Search>
          {inputVisible && (
            <S.SearchInput
              ref={inputRef}
              value={searchValue}
              type='text'
              onChange={handleSearch}
            />
          )}
          <S.SearchIcon
            src='/public/images/search-icon.svg'
            alt='search icon'
            onClick={handleSearchClick}
          />
        </S.Search>
        <S.Profile
          src='/public/images/profile-icon.svg'
          alt='user profile icon'
        />
      </S.Menu>
    </S.Nav>
  );
};

export default Navigation;
