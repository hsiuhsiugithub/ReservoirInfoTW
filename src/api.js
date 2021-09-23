import axios from 'axios';

// reservoir 相關的 api
const reservoirRequest = axios.create({
  baseURL: `https://www.taiwanstat.com/waters/latest`
});

export const apiReservoirRequest = () => reservoirRequest.get();