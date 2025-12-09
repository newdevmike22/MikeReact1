const UserStatus = ({ loggedIn, isAdmin }) => {
  if (loggedIn && isAdmin) {
    return <h2>Welcome Admin!</h2>;
  }
  return <h2>Welcome User</h2>;
};

export default UserStatus;
