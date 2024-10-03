import * as S from './Navigation.style';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import useOnClickOutside from '../../hooks/useOnClickOutside';

const Navigation = () => {
  const [inputVisible, setInputVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { search } = useLocation();
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const query = new URLSearchParams(search);
    const text = query.get('q');
    if (text) setSearchValue(text);
    else setSearchValue('');
  }, [search]);

  const handleSearchClick = () => {
    setInputVisible((prev) => !prev);
  };

  useOnClickOutside(inputRef, () => {
    setInputVisible(false);
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`, { replace: true });
    if (!inputVisible && inputRef.current) inputRef.current.focus();
  };

  const handleMenuClick = () => {
    setMenuVisible((prev) => !prev);
  };

  useOnClickOutside(menuRef, () => {
    setMenuVisible(false);
  });

  const handleLogout = () => {
    signOut(auth)
      .then(() => navigate('/'))
      .catch((error) => console.log('Error logging out: ', error));
  };

  return (
    <S.Nav>
      <S.Logo
        src='/images/logo.svg'
        alt='ONOFFON Logo'
        onClick={() => (window.location.href = '/')}
      />
      <S.Content>
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
            src='/images/search-icon.svg'
            alt='search icon'
            onClick={handleSearchClick}
          />
        </S.Search>
        <S.Menu
          onClick={handleMenuClick}
          src='/images/menu-icon.svg'
          alt='user profile icon'
        />
      </S.Content>
      {menuVisible && (
        <S.MenuItems ref={menuRef}>
          <S.Item onClick={() => navigate('/likes')}>
            <S.Icon src='/images/heart-fill-icon.svg' alt='좋아요' />
            <span>좋아요</span>
          </S.Item>
          <S.Item onClick={handleLogout}>
            <S.Icon src='/images/logout-icon.svg' alt='로그아웃' />
            <span>로그아웃</span>
          </S.Item>
        </S.MenuItems>
      )}
    </S.Nav>
  );
};

export default Navigation;
