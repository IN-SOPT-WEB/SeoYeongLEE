import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProfile } from "../lib/api";
import { GITHUB_URL } from "../lib/constants";
interface Info {
  avatar_url: string;
  followers: number;
  following: number;
  public_repos: number;
  name: string;
}
const initialInfo = {
  avatar_url: "",
  followers: 0,
  following: 0,
  public_repos: 0,
  name: "",
};
function Profile() {
  const navigate = useNavigate();
  const location = useLocation();
  const { username } = location.state;
  const [info, setInfo] = useState<Info>(initialInfo);

  const fetchProfile = async () => {
    const { data } = await getProfile(username);
    setInfo(data);
  };

  const redirectUrl = () => {
    window.location.href = `${GITHUB_URL}/${username}`;
  };

  const moveBack = () => {
    navigate(-1);
  };

  const { avatar_url, followers, following, public_repos, name } = info;

  useEffect(() => {
    fetchProfile();
  }, [username]);

  return (
    <>
      <Root>
        <ProfileWrapper>
          <Close onClick={moveBack}>x</Close>
          <img src={avatar_url} alt="프로필" placeholder="blur" />
          <h1>{name}</h1>
          <h2>{username}</h2>
          <button onClick={redirectUrl}>View {username}</button>
          <Info>
            <div>
              Followers
              <span>{followers}</span>
            </div>
            <div>
              Following
              <span>{following}</span>
            </div>
            <div>
              Repos
              <span>{public_repos}</span>
            </div>
          </Info>
        </ProfileWrapper>
      </Root>
    </>
  );
}

export default Profile;

const Root = styled.div`
  display: flex;
  justify-content: center;
`;

const ProfileWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100% - 30px);
  padding: 30px;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;

  & > img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 15px;
  }
  & > h1 {
    font-size: 24px;
    font-weight: bold;
    padding: 10px 0;
  }
  & > h2 {
    font-size: 18px;
    padding: 10px 0 20px 0;
  }
  & > button {
    padding: 7px;
    border: none;
    border-radius: 15px;
    margin-bottom: 20px;
    cursor: pointer;
  }
`;

const Close = styled.span`
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 20px;
  cursor: pointer;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #232323;
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
    padding: 20px 0;
    background-color: #fff;
    border-radius: 10px;
    font-weight: bold;
    &:not(:last-child) {
      margin-right: 10px;
    }
    & > span {
      font-size: 16px;
      font-weight: normal;
      padding-top: 10px;
    }
  }
`;
