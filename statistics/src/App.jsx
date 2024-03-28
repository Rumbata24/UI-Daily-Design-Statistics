// import PageViewsGraph from "./components/PageViewsGraph/PageViewsGraph";
import AvatarNavbar from "./components/AvatarNavbar/AvatarNavbar";
import MainNavbar from "./components/MainNavbar/MainNavbar";

import ActiveUsersBlock from "./components/ActiveUsersBlock/ActiveUsersBlock";
import SessionInfo from "./components/SessionInfo/SessionInfo";
import Alert from "./components/Alert/Alert";
import Devices from "./components/Devices/Devices";
const App = () => {
  return (
    <>
      <AvatarNavbar />
      <MainNavbar />
      <ActiveUsersBlock />
      <SessionInfo />
      <Alert />
      <Devices />
    </>
  );
};

export default App;
