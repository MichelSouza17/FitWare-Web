const USER_KEY = "@user";

export const getUser = () => {
  const { student } = JSON.parse(localStorage.getItem(USER_KEY));

  return student;
};
