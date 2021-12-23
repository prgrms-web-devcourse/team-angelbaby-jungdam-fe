const getDateStr = (date) => {
  let today = new Date(date);

  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear();

  if (dd < 10) {
    dd += '0';
  }

  if (mm < 10) {
    mm += '0';
  }

  today = `${yyyy}-${mm}-${dd}`;

  return today;
};

export default getDateStr;
