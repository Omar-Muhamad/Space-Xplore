import getAllMissionsAPI from '../APIHelper';

const GET_ALL_MISSIONS = 'spaceXplore/missions/GET_ALL_MISSIONS';
const JOIN_MISSION = 'spaceXplore/missions/JOIN_MISSION';

const initialState = [];

export const getAllMissions = () => async (dispatch) => {
  const missions = await getAllMissionsAPI();

  const missionsForDispatch = missions.map((mission) => ({
    mission_id: mission.mission_id,
    mission_name: mission.mission_name,
    description: mission.description,
    reserved: false,
  }));

  dispatch({
    type: GET_ALL_MISSIONS,
    payload: missionsForDispatch,
  });
};

export const joinMission = (id) => ({
  type: JOIN_MISSION,
  payload: id,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MISSIONS:
      return action.payload;

    case JOIN_MISSION:
      return state.map((state) => {
        if (state.mission_id !== action.payload) return state;
        return { ...state, reserved: true };
      });

    default:
      return state;
  }
};

export default reducer;
