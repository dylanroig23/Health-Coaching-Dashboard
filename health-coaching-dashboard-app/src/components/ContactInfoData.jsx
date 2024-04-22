import React, { useState, useEffect } from "react";

const ContactInfoData = () => {
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const userSessionData = await fetch(
        `${process.env.REACT_APP_DB_URI}/users/sessionUser`
      );
      const resData = await userSessionData.json();
      setUserInfo(resData[0]);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={styles.container}>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <>
          <div style={styles.section}>
            <h1 style={styles.h1}>User Contact Information:</h1>
            <UserInfo userInfo={userInfo.contactInformation} />
          </div>
          <div style={styles.section}>
            <h1 style={styles.h1}>Emergency Contact 1:</h1>
            <UserInfo
              userInfo={userInfo.contactInformation?.emergencyContact1}
            />
          </div>
          <div style={styles.section}>
            <h1 style={styles.h1}>Emergency Contact 2:</h1>
            <UserInfo
              userInfo={userInfo.contactInformation?.emergencyContact2}
            />
          </div>
        </>
      )}
    </div>
  );
};

const UserInfo = ({ userInfo }) => (
  <div style={styles.h2}>
    <h3>First Name: {userInfo?.firstName}</h3>
    <h3>Last Name: {userInfo?.lastName}</h3>
    <h3>Cell Phone: {userInfo?.cellPhone}</h3>
    <h3>Home Phone: {userInfo?.homeNumber}</h3>
    <h3>Email Address: {userInfo?.emailAddress}</h3>
  </div>
);

const styles = {
  container: {
    background: "#f0f0f0",
    padding: "20px",
    textAlign: "center",
  },
  section: {
    background: "#fff",
    padding: "20px",
    margin: "20px auto",
    maxWidth: "500px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  },
  h1: {
    color: "#548235",
  },
  h2: {
    color: "#5fa36e",
  },
};

export default ContactInfoData;
