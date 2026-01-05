import React from "react";

const CurrentUserContext = React.createContext({
  user: {
    name: "",
    about: "",
    avatar: "",
  },
});

export default CurrentUserContext;
