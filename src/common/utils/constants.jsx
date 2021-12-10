export const isProduction = process.env.REACT_APP_MODE === 'production';
export const API_POINT = !isProduction ? process.env.REACT_APP_API_URL : 'none';
export const HOME_PAGE = '/';
