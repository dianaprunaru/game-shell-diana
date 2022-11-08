const initialState = {
  user: {},
  established: true,
  authenticated: false,
};

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'auth/setUser':
      // extremely explicit
      const newState = {
        user: {
          name: payload.name,
          surname: payload.surname,
        },
        authenticated: true,
        established: state.established,
      };

      return newState;
    default:
      return state;
  }
};
