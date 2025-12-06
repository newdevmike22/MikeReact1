const UserInfo = () => {
  const userInfo = [
    {
      username: "MightMike",
      email: "themightyM@gmail.com",
      location: "USA",
    },
    {
      username: "SexyLola1",
      email: "sexylolaM@gmail.com",
      location: "Dominican Republic",
    },
    {
      username: "ElToro",
      email: "Toro@gmail.com",
      location: "Mexico",
    },
  ];

  const playerInfo = [
    {
      playername: "PlayBoyRick",
      email: "slickrick00@gmail.com",
      location: "USA",
      game: "Fortnite",
    },
    {
      playername: "BigBetty",
      email: "bigbabebetty66@gmail.com",
      location: "England",
      game: "Grand Theft Auto",
    },
    {
      playername: "HockeyPuck",
      email: "hockeyguy120@gmail.com",
      location: "Canada",
      game: "Marvel Rivals",
    },
  ];

  return (
    <>
      <section>
        {userInfo.map((user) => (
          <ul key={user.username}>
            <li>{user.username}</li>
            <li>{user.location}</li>
            <li>{user.email}</li>
          </ul>
        ))}
      </section>
      <section>
        {playerInfo.map(({ playername, email, location, game }) => (
          <ul key={playername}>
            <li>{playername}</li>
            <li>{location}</li>
            <li>{email}</li>
            <li>{game}</li>
          </ul>
        ))}
      </section>
    </>
  );
};

export default UserInfo;
