import axios from 'axios';
import dotenv from 'dotenv';

// env 파일 읽어오기 + axios 베이스 URL 설정
// CRA에서 환경 변수 사용하기 위해서는 REACT_APP_이 접두어로 꼭 붙어야함.
dotenv.config();
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const Api = ({
  url,
  type = 'GET',
  params,
  contentType = 'application/json',
}) => {
  const headers = {
    'Content-Type': contentType,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH',
    'Access-Control-Allow-Headers':
      'Origin,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers,Authorization',
    mode: 'cors',
  };

  // if (accessToken !== null) {
  //   headers.Authorization = `Bearer ${accessToken}`;
  // }

  return axios({
    method: type,
    url: `${url}`,
    headers,
    data: params,
  });
};

export default Api;
