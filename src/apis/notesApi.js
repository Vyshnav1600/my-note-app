import axios from 'axios';


const api = axios.create({
    baseURL: 'http://localhost:3000/notes',
  });

 export const getNotes = async () => {
    try {
      const response = await api.get('/get');
      // console.log(response);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  export const addNotes = async (params) => {
    try {
      const response = await api.post('/add',{
        title: params.title,
        content: params.content
    });
      // console.log(response);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  export const deleteNotes = async (params) => {
    try {
      const response = await api.delete(`/delete?id=${params.id}`,{
    });
      // console.log(response);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
//"/notes/edit/:noteid"
  export const EditNotes = async (id,updatedNote) => {
    try {
      console.log("id:",id,"Update:",updatedNote);
      const response = await api.put(`/edit/${id}`, updatedNote);
       console.log(response);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
