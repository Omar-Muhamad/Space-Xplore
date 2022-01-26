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

const TOGGLE_RESERVE = 'TOOGLE_RESERVE';

export const toggleReserve = (id) => ({
  type: TOGGLE_RESERVE,
  id,
});

const initialState = {
  loading: false,
  rockets: [],
  error: '',
};

const rocketsReducer = (state = initialState, action) => {
  let rockets;
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
    case TOGGLE_RESERVE:
      rockets = [...state.rockets];
      rockets = rockets.map((rocket) => {
        if (!rocket.reserved && rocket.id.toString() === action.id) {
          return { ...rocket, reserved: true };
        }
        if (rocket.reserved && rocket.id.toString() === action.id) {
          return { ...rocket, reserved: !rocket.reserved };
        }
        return rocket;
      });
      return {
        ...state,
        rockets,
      };
    default:
      return state;
  }
};

export default rocketsReducer;
