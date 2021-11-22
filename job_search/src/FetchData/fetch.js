export const fetchJob = `https://strive-jobs-api.herokuapp.com/jobs?company=${""}&limit=40&skip=10`;
export const getJobs = async () => {
  try {
    const Resp = await fetch(fetchJob, {
      method: "GET",
    });
    if (Resp.ok) {
      let jobs = await Resp.json();
      console.log(jobs);
      return jobs;
    }
  } catch (err) {
    throw err;
  }
};
