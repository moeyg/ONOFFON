import styled from 'styled-components';

export const Home = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  top: 50px;
  padding: 0 1rem;
  padding-bottom: 50px;

  @media (max-width: 450px) {
    top: 30px;
  }
`;
