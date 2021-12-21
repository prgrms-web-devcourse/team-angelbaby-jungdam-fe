import api from './api';

// ------------------------------------
// Image 업로드 관련
// - Request : File List || File
// - Response : String, [String]
// ------------------------------------
export const postImageUploads = async (files) => {
  const formData = new FormData();
  if (!files.length) {
    // file 값이 단일로 들어오는 경우
    formData.set('image', files);
    try {
      const {
        data: { data },
      } = await api({
        url: '/api/v1/images',
        type: 'POST',
        params: formData,
      });
      return data.uploadImageUrl;
    } catch (error) {
      console.log(error);
    }
  } else {
    //  이터레이터 형식이 아니라서 for문으로 돌려야 함..
    const imageUrls = [];
    for (let i = 0; i < files.length; i++) {
      formData.set('image', files[i]);
      try {
        const {
          data: { data },
        } = await api({
          url: '/api/v1/images',
          type: 'POST',
          params: formData,
        });
        imageUrls.push(data.uploadImageUrl);
      } catch (error) {
        console.log(error);
      }
    }
    return imageUrls;
  }
};
