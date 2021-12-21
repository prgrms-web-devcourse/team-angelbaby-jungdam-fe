const replaceTildeWithDate = (str) => {
  let flag = true;

  while (flag) {
    const position = str.indexOf('-');

    switch (position) {
      case 4:
        str = str.replace(str[position], '년 ');

        break;
      case 8:
        str = str.replace(str[position], '월 ');
        flag = false;

        break;
      default:
        break;
    }
  }

  str += '일';

  return str;
};

export default replaceTildeWithDate;
