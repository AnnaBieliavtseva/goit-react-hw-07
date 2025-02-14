import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://67af9d2cdffcd88a678728a3.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
    const response = await axios.get("/contacts")
    console.log(response.data);
    
    return response.data;

})