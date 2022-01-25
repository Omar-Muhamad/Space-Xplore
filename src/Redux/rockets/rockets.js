const GET_ROCKETS_REQUEST = 'GET_ROCKETS_REQUEST';
const GET_ROCKETS_SUCCESS = 'GET_ROCKETS_SUCCESS';
const GET_ROCKETS_FAILURE = 'GET_ROCKETS_FAILURE';

export const getRocketsRequest = () => ({
  type: GET_ROCKETS_REQUEST,
});

export const getRocketsSuccess = (payload) => ({
  type: GET_ROCKETS_SUCCESS,
  payload,
});

export const getRocketsFailure = (error) => ({
  type: GET_ROCKETS_FAILURE,
  error,
});

const initialState = {
  loading: false,
  rockets: [],
  error: '',
};

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ROCKETS_SUCCESS:
      return {
        ...state,
        loading: false,
        rockets: action.payload,
        error: '',
      };
    case GET_ROCKETS_FAILURE:
      return {
        ...state,
        loading: false,
        rockets: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default rocketsReducer;
