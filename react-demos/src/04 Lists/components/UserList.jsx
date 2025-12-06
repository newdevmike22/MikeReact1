const UserList = () => {
  const userList = [
    { id: 1, name: "Rose", age: 25 },
    { id: 2, name: "Stan", age: 30 },
    { id: 3, name: "Chuck", age: 22 },
  ];
  return (
    <div>
      {userList.map(({ id, name, age }) => (
        <div key={id}>
          <h2>Name: {name}</h2>
          <h2>Age: {age}</h2>
        </div>
      ))}
    </div>
  );
};

export default UserList;
