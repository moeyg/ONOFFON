import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  padding-left: 0.7rem;
  padding-right: 1.1rem;
  box-sizing: border-box;
  background-color: var(--background-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 3;

  @media (max-width: 450px) {
    padding: -0.3rem 1rem;
    height: 50px;
  }
`;

export const Logo = styled.img`
  width: 6.3rem;
  cursor: pointer;
  display: inline-block;

  @media (max-width: 450px) {
    width: 4rem;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  @media (max-width: 450px) {
    gap: 0.7rem;
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  @media (max-width: 450px) {
    gap: 0.5rem;
  }
`;

export const SearchIcon = styled.img`
  width: 2rem;
  cursor: pointer;

  @media (max-width: 450px) {
    width: 1.5rem;
  }
`;

export const SearchInput = styled.input`
  width: 15rem;
  height: 0.9rem;
  font-size: 1.2rem;
  background-color: inherit;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  border-radius: 25px;
  padding: 5px 12px;
  outline: none;
  cursor: pointer;

  @media (max-width: 750px) {
    width: 10rem;
    height: 0.8rem;
    padding: 3px 12px;
  }

  @media (max-width: 450px) {
    width: 7rem;
    height: 0.7rem;
    padding: 3px 12px;
    font-size: 0.8rem;
  }
`;

export const Menu = styled.img`
  width: 2rem;
  cursor: pointer;

  @media (max-width: 450px) {
    width: 1.5rem;
  }
`;
