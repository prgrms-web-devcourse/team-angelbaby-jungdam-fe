import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { getParicipantsAlbumCheck } from '@api/albumApi';
const useAlbumValidation = ({ albumId }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (albumId) {
      const checkAlbum = async () => {
        const {
          data: { data },
        } = await getParicipantsAlbumCheck({ albumId });
        if (data.existence === false) {
          navigate('/album');
        }
      };
      checkAlbum();
    }
  }, [albumId, navigate]);

  return true;
};

export default useAlbumValidation;
