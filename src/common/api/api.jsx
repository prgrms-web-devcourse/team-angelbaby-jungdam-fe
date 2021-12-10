import axios from 'axios';

// env 파일 읽어오기 + axios 베이스 URL 설정
// CRA에서 환경 변수 사용하기 위해서는 REACT_APP_이 접두어로 꼭 붙어야함.

// dotenv.config();
// axios.defaults.baseURL = API_POINT;

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
  };

  // 토큰이 없을 시 header 값에 token이 포함되지 않음.
  const token = sessionStorage.getItem('token');

  if (token !== null) {
    headers.Authorization = `Bearer ${token}`;
  }
  console.log(url, token, headers);
  return axios({
    method: type,
    url: `${url}`,
    headers,
    data: params,
  });
};

export default Api;
