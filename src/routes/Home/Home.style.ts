import styled from 'styled-components';

export const Home = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  top: 50px;
  padding: 0rem 1rem 3.5rem;

  @media (max-width: 450px) {
    top: 30px;
  }
`;
