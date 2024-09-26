import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4rem 0;

  @media (max-width: 850px) {
    margin-bottom: 1rem;
  }

  @media (max-width: 550px) {
    margin-top: 3.2rem;
  }
`;

export const Close = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  z-index: 1;
  color: var(--primary-color);
  font-size: 1rem;
  background-color: var(--background-color);
  width: 2.3rem;
  height: 2.3rem;
  border: 1px solid var(--background-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Movie = styled.section`
  position: relative;
  width: 60%;
  border: 2px solid rgba(108, 98, 98, 0.3);
  border-radius: 10px;
  padding-bottom: 1rem;

  @media (max-width: 850px) {
    width: 100%;
    border: none;
  }
`;

export const MoviePoster = styled.section`
  width: 100%;
  height: 450px;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
  background-color: var(--background-color);

  @media (max-width: 850px) {
    height: 360px;
  }
`;

export const MovieBackdrop = styled.img`
  object-fit: cover;
  width: 100%;
  height: 450px;
  border-radius: 10px 10px 0 0;

  @media (max-width: 850px) {
    height: 360px;
    border-radius: 0;
  }
`;

export const MovieDetails = styled.section`
  padding: 0 1rem;
`;

export const MovieGenres = styled.ul`
  list-style: none;
  display: flex;
  gap: 0.7rem;
  padding: 0;
  margin-bottom: 1rem;
`;

export const Genre = styled.li`
  font-size: 0.8rem;
  padding: 6px 20px;
  border: 2px solid rgba(108, 98, 98, 0.3);
  border-radius: 15px;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);

  @media (max-width: 850px) {
    font-size: 0.6rem;
    padding: 6px 18px;
  }
  @media (max-width: 550px) {
    font-size: 0.6rem;
    padding: 6px 11px;
  }
`;

export const MovieTitle = styled.h1`
  font-family: 'pretendard-bold';
  font-size: 2.2rem;
  margin: 0;

  @media (max-width: 850px) {
    font-size: 2rem;
  }
  @media (max-width: 550px) {
    font-size: 1.7rem;
  }
`;

export const MovieInfo = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  gap: 5px;
  font-size: 0.9rem;

  @media (max-width: 850px) {
    font-size: 0.85rem;
  }
`;

export const MovieReleaseDate = styled.p`
  margin: 0;
`;

export const MovieVoteAverage = styled.p`
  margin: 0;
`;

export const MovieRuntime = styled.p`
  margin: 0;
`;

export const MovieOverview = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;

  @media (max-width: 550px) {
    font-size: 0.85rem;
  }
`;
