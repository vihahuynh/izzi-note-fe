import axios from 'axios';

const baseUrl: string = 'http://localhost:3001/notes';

const get = async () => {
  return axios.get(baseUrl);
};

const notesService = { get };

export default notesService;
