import { useState } from "react";

const Names = () => {
  const [friends, setFriends] = useState(["Jay", "Tony"]);
  const addFriend = () => setFriends([...friends, "Joe"]);
  const deleteFriend = () => setFriends(friends.filter((f) => f != "Tony"));
  const updateOneFriend = () => {
    setFriends(friends.map((f) => (f === "Jay" ? "Jay Smith" : f)));
  };
  return (
    <section>
      {friends.map((f) => (
        <li key={f}>{f}</li>
      ))}

      <button onClick={addFriend}>Add New Friend</button>
      <button onClick={deleteFriend}>Delete A Friend</button>
      <button onClick={updateOneFriend}>Update One Friend</button>
    </section>
  );
};

export default Names;
