const initialState = {
  userProfile: {
    username: "",
    accessToken: ""
  }
};

const global = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default global;
