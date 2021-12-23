const getDateValidate = (date) => {
  let checkDate = new Date(date);
  let today = new Date();

  let dd1 = checkDate.getDate();
  let mm1 = checkDate.getMonth() + 1;
  let yyyy1 = checkDate.getFullYear();

  let dd2 = today.getDate();
  let mm2 = today.getMonth() + 1;
  let yyyy2 = today.getFullYear();

  if (dd1 < 10) {
    dd1 += '0';
  }

  if (mm1 < 10) {
    mm1 += '0';
  }

  if (dd2 < 10) {
    dd2 += '0';
  }

  if (mm2 < 10) {
    mm2 += '0';
  }

  checkDate = `${yyyy1}-${mm1}-${dd1}`;
  today = `${yyyy2}-${mm2}-${dd2}`;

  // 지정 날짜가 현재 날짜 보다 크면 에러 발생 유도
  const result = checkDate > today;

  return result;
};

export default getDateValidate;
