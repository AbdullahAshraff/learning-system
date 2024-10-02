import { createContext, useState } from "react";
import { profilePic } from '../assets';

function getUserInfo(){
  const user = {
    name: 'Abdullah Ashraf',
    username: 'abdullahashraf',
    email: 'xg8Iz@example.com',
    phone: '0123456789',
    bio: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          assumenda rerum reiciendis quia vero reprehenderit, nostrum, velit
          ea exercitationem quibusdam esse? Itaque, fugit sapiente esse
          voluptate enim labore laboriosam ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti assumenda rerum reiciendis quia vero reprehenderit, nostrum, velit
          ea exercitationem quibusdam esse? Itaque, fugit sapiente esse
          voluptate enim labore laboriosam ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti assumenda rerum reiciendis quia vero reprehenderit, nostrum, velit
          ea exercitationem quibusdam esse? Itaque, fugit sapiente esse
          voluptate enim labore laboriosam ipsa.`,
    links: {
      github: {
        username: 'abdullahashraf',
        url: 'https://github.com/abdullahashraf',
      },
      linkedin: {
        username: 'abdullahashraf',
        url: 'https://www.linkedin.com/in/abdullahashraf/',
      },
      website: {
        username: 'mywebsite.com',
        url: 'https://abdullahashraf.web.app',
      },
    },
  };
  return user;
}

function getProfilePic(){
  return profilePic;
}

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(getUserInfo());
  const [profilePic, setProfilePic] = useState(getProfilePic());

  return (
    <UserContext.Provider value={{ user, setUser, profilePic,setProfilePic }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
