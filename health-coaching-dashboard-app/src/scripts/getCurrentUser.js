/*
    THIS SCRIPT IS TO BE CHANGED ONCE A PROPER BACKEND IS
    ESTABLISHED

    **for initial testing purposes this script allows us to
    get the current user from the db.json json-server**
*/
const fetchCurrentUser = async () => {
  try {
    const userResponse = await fetch("http://localhost:5000/users");
    const userData = await userResponse.json();
    const currUser = userData[userData.length - 1];

    if (currUser) {
      return currUser; //return the current user
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return;
  }
};

export const getCurrentUser = async () => {
  try {
    const currUser = await fetchCurrentUser();
    return currUser;
  } catch (error) {
    console.error("Error in getCurretUser() fetching data:", error);
    return null;
  }
};
