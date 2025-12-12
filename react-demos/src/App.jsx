import UpdateUser from "./13 Context API/components/UpdateUser";
import { UserProvider } from "./13 Context API/components/UserContext";
import UserProfile from "./13 Context API/components/UserProfile";

const App = () => {
  return (
    <UserProvider>
      <UserProfile />
      <UpdateUser />
    </UserProvider>
  );
};

export default App;
