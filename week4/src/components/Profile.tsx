import { useLocation } from "react-router-dom";
function Profile() {
  const location = useLocation();
  const {username} = location.state;

  return <div>Profile</div>;
}

export default Profile;
