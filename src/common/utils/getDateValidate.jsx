const getDateValidate = (date) => {
  let checkDate = new Date(date);
  let today = new Date();

  let dd1 = checkDate.getDate();
  let mm1 = checkDate.getMonth() + 1;
  let yyyy1 = checkDate.getFullYear();

  let dd2 = today.getDate();
  let mm2 = today.getMonth() + 1;
  let yyyy2 = today.getFullYear();
  console.log(dd1);
  console.log(mm1);
  if (dd1 < 10) {
    dd1 = '0' + dd1;
  }

  if (mm1 < 10) {
    mm1 = '0' + mm1;
  }

  if (dd2 < 10) {
    dd2 = '0' + dd2;
  }

  if (mm2 < 10) {
    mm2 = '0' + mm1;
  }

  checkDate = `${yyyy1}-${mm1}-${dd1}`;
  today = `${yyyy2}-${mm2}-${dd2}`;
  console.log(checkDate);
  console.log(today);
  // 지정 날짜가 현재 날짜 보다 크면 에러 발생 유도
  const result = checkDate > today;
  console.log(result);

  return result;
};

export default getDateValidate;
