import styled from 'styled-components';

interface Path {
  $path: string;
}

export const Banner = styled.section<Path>`
  position: relative;
  background-image: ${(props) =>
    `url('https://image.tmdb.org/t/p/original/${props.$path}')`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: black;
  height: 480px;
  width: 100%;
  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  border-radius: 20px;
  margin-top: 0.8rem;

  @media (max-width: 750px) {
    height: 460px;
    border-radius: 8px;
    margin-top: 1.33rem;
    filter: grayscale(30%);
  }
`;

export const VisualEffect = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  position: relative;

  @media (max-width: 750px) {
    border-radius: 8px;
  }

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    border-radius: 20px;
    opacity: 0.3;
    @media (max-width: 750px) {
      display: none;
    }
  }
`;

export const PlayButton = styled.img`
  width: 6.2rem;
  height: 6.2rem;
  cursor: pointer;
  transition: 300ms;
  z-index: 1;
  position: relative;

  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 1200px) {
    width: 5.5rem;
    height: 5.5rem;
  }
  @media (max-width: 800px) {
    width: 4.5rem;
    height: 4.5rem;
  }
`;

export const MovieTitle = styled.h2`
  font-size: 2.5rem;
  font-family: 'pretendard-bold';
  text-shadow: 0px 0px 8px black;
  @media (max-width: 750px) {
    font-size: 2.2rem;
  }
`;

export const FadeBottom = styled.div`
  position: fixed;
  bottom: 0;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    #111
  );
`;

// --- Preview frame

export const Preview = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  border-radius: 20px;
  margin-top: 1.2rem;

  @media (max-width: 750px) {
    border-radius: 8px;
  }
`;

export const Video = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 20px;

  @media (max-width: 750px) {
    border-radius: 8px;
  }
`;

export const Iframe = styled.iframe`
  width: 100%;
  height: 480px;
  z-index: -1;
  opacity: 0.65;
  border: none;
  border-radius: 20px;

  @media (max-width: 750px) {
    height: 460px;
    border-radius: 8px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const Close = styled.button`
  position: absolute;
  left: 12px;
  bottom: 13px;
  cursor: pointer;
  z-index: 2;
  color: var(--primary-color);
  background-color: inherit;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;

  @media (min-width: 1200px) {
    font-size: 1.8rem;
    left: 10px;
  }

  @media (min-width: 1200px) {
    font-size: 1.8rem;
    left: 10px;
  }
`;
