import * as S from './Modal.style';
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
} from 'react';

interface Movie {
  id?: number;
  title?: string;
  name?: string;
  original_name?: string;
  overview?: string;
  backdrop_path?: string;
  release_date?: string;
  first_air_date?: string;
  vote_average?: string;
}

interface ModalProps {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  movie?: Movie;
  genre: string;
}

const Modal: React.FC<ModalProps> = ({ setModalOpen, movie, genre }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const modalRef = useRef<HTMLScriptElement>(null);

  const handleClickOutside = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setModalOpen(false);
      }
    },
    [setModalOpen]
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <S.Presentation role='presentation'>
      <S.Container>
        <S.Modal ref={modalRef}>
          <S.Close onClick={() => setModalOpen(false)}>✕</S.Close>
          <S.MovieBackdrop
            src={
              movie?.backdrop_path
                ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
                : ''
            }
            alt={movie?.name || movie?.original_name || movie?.title}
          />
          <S.MovieContents>
            <S.MovieGenre>
              <p>| {genre}</p>
            </S.MovieGenre>
            <S.MovieTitle>
              {movie?.name || movie?.title || movie?.original_name}
            </S.MovieTitle>
            <S.MovieReleaseDate>
              개봉일:
              {movie?.release_date
                ? movie?.release_date
                : movie?.first_air_date}
            </S.MovieReleaseDate>
            <S.MovieRate>
              평점: {Math.floor(Number(movie?.vote_average) * 10) / 10}
            </S.MovieRate>
            <S.MovieOverview>{movie?.overview}</S.MovieOverview>
          </S.MovieContents>
        </S.Modal>
      </S.Container>
    </S.Presentation>
  );
};

export default Modal;
