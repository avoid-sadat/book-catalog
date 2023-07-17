import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface Ifilter {
  title:string,
  author:string,
  genre:string,
  published_date:string
}
const initialState : Ifilter ={
  genre:'',
  published_date:'',
  title:'',
  author:''
}

const filterSlice = createSlice({
  name:'filter',
  initialState,
  reducers:{
    setGenreFilter: (state, action:PayloadAction<string>) => {
      state.genre = action.payload;
    },
    setYearFilter: (state, action:PayloadAction<string>) => {
      state.published_date = action.payload;
    },
    searchByTitle: (state, action:PayloadAction<string>) => {
      state.title = action.payload;
    },
  }
})

export const {setGenreFilter,setYearFilter,searchByTitle} = filterSlice.actions

export default filterSlice.reducer