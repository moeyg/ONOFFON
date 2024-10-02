import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { ref, set, get } from 'firebase/database';
import { db } from '../../firebase';
import { getAuth } from 'firebase/auth';

interface LikeProps {
  movieId?: number;
}

const LikeButton: React.FC<LikeProps> = ({ movieId }) => {
  const [like, setLike] = useState(false);
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    const fetchLikeStatus = async () => {
      if (!user || !movieId) return;
      const likesRef = ref(db, `users/${user.uid}/likes/${movieId}`);
      const snapshot = await get(likesRef);
      if (snapshot.exists()) setLike(true);
    };
    fetchLikeStatus();
  }, [user, movieId]);

  const toggleLike = async () => {
    if (!user || !movieId) return;

    const likesRef = ref(db, `users/${user.uid}/likes/${movieId}`);
    if (like) {
      await set(likesRef, null);
      setLike(false);
    } else {
      await set(likesRef, { movieId });
      setLike(true);
    }
  };

  return (
    <>
      <Like
        src={like ? '/images/heart-fill-icon.svg' : '/images/heart-icon.svg'}
        alt='좋아요 버튼'
        onClick={toggleLike}
      />
    </>
  );
};

export default LikeButton;

export const Like = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
