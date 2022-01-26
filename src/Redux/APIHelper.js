import { getRocketsRequest, getRocketsSuccess, getRocketsFailure } from './rockets/rockets';

const missionsURL = 'https://api.spacexdata.com/v3/missions';

const getAllMissions = async () => {
  const response = await fetch(missionsURL);
  const data = await response.json();
  return data;
};

const url = 'https://api.spacexdata.com/v3/rockets';
export const getRockets = () => async (dispatch) => {
  dispatch(getRocketsRequest());
  try {
    const response = await fetch(url);
    const data = await response.json();
    dispatch(getRocketsSuccess(data));
  } catch (err) {
    dispatch(getRocketsFailure(err.message));
  }
};

export default getAllMissions;
