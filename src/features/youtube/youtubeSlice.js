import { createSlice } from "@reduxjs/toolkit";
import { getHomePageVideos } from "../../store/reducers/getHomePageVideos";

const initialState = {
    video:[],
    currentPlaying:null,
    searchTerm:"",
    searchResult:[],
    nextPageToken:null,
    recommendedVideo:[]
}

const youtubeSlice = createSlice({
    name:"youtubeApp",
    initialState,
    reducers:{

    },
    extraReducers:(builder) => {
        builder.addCase(getHomePageVideos.fulfilled,(state,action)=>{

        })
    }
})

export default youtubeSlice.reducer;