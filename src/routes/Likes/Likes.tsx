/* eslint-disable @typescript-eslint/no-explicit-any */
import * as S from './Likes.style';
import axios from '../../api/axios';
import { useCallback, useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { get, ref } from 'firebase/database';
import { db } from '../../firebase';
import { useNavigate } from 'react-router-dom';

interface Movie {
  id?: number;
  title?: string;
  backdrop_path?: string;
}

const Likes = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const auth = getAuth();
  const user = auth.currentUser;
  const navigate = useNavigate();

  const fetchLikedMovies = useCallback(async () => {
    if (!user) return;

    try {
      const likesRef = ref(db, `users/${user.uid}/likes`);
      const snapshot = await get(likesRef);
      if (snapshot.exists()) {
        const data = snapshot.val();
        const movieIds = Object.values(data).map((like: any) => like.movieId);
        const movieRequest = movieIds.map((id) =>
          axios.get(`/movie/${id}`).then((response) => response.data)
        );
        const likedMovies = await Promise.all(movieRequest);
        setMovies(likedMovies);
      }
    } catch (error) {
      console.error('Error fetching liked movies:', error);
    }
  }, [user]);

  useEffect(() => {
    fetchLikedMovies();
  }, [fetchLikedMovies]);

  return (
    <S.Likes>
      <S.Title>ꕤ {user?.displayName}님이 좋아하는 영화 ꕤ</S.Title>
      <S.Content>
        {movies.length === 0 ? (
          <p>좋아하는 영화를 저장해 보세요.</p>
        ) : (
          movies.map((movie) => (
            <S.Movie
              key={movie.id}
              onClick={() => navigate(`/movie/${movie.id}`)}
            >
              <S.MoviePoster
                src={
                  movie.backdrop_path
                    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
                    : '/images/empty-image.svg'
                }
                alt={movie.title}
              />
              <S.MovieTitle>{movie.title}</S.MovieTitle>
            </S.Movie>
          ))
        )}
      </S.Content>
    </S.Likes>
  );
};

export default Likes;
