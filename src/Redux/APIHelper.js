const missionsURL = 'https://api.spacexdata.com/v3/missions';

const getAllMissions = async () => {
  const response = await fetch(missionsURL);
  const data = await response.json();
  return data;
};

export default getAllMissions;
