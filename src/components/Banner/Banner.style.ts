import styled from 'styled-components';

interface Path {
  $path: string;
}

export const Banner = styled.section<Path>`
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
  margin-top: 1.2rem;

  @media (max-width: 750px) {
    height: 460px;
  }
`;

export const VisualEffect = styled.div<Path>`
  background-image: ${(props) => `url('${props.$path}')`};
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BannerContents = styled.div``;

export const PlayButton = styled.img`
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transition: 300ms;

  &:hover {
    opacity: 0.7;
    scale: calc(1.05);
  }
  @media (max-width: 1200px) {
    width: 5rem;
    height: 5rem;
  }
  @media (max-width: 800px) {
    width: 4rem;
    height: 4rem;
  }
  @media (max-width: 550px) {
    width: 3.5rem;
    height: 3.5rem;
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
`;

export const Video = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Iframe = styled.iframe`
  width: 100%;
  height: 480px;
  z-index: -1;
  opacity: 0.65;
  border: none;

  @media (max-width: 750px) {
    height: 460px;
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
  z-index: 1000;
  color: var(--primary-color);
  background-color: inherit;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;

  @media (min-width: 1200px) {
    font-size: 1.8rem;
  }
`;
