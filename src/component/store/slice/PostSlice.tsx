import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
interface state {
  post: {
    data: any;
    status: string;
    loading: boolean;
  };
 
}
const initialState: state = {
  post: {
    data: [],
    status: "",
    loading: false,
  }
};

export const GetPosts = createAsyncThunk(
  "Getpost",
  async (userId, thunkAPI) => {
    console.log(userId);
    try {
      const data = await axios.get(
        `https://api.themoviedb.org/3/movie/550?api_key=${process.env.REACT_APP_API_KEY}`
      )
      return thunkAPI.fulfillWithValue(data.data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const PostSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetPosts.pending, (state, action) => {
      state.post.loading = true;
    });
    builder.addCase(GetPosts.fulfilled, (state, action) => {
      state.post.loading = false;
      state.post.data = action.payload;
      state.post.status = "success";
    });
    builder.addCase(GetPosts.rejected, (state, action) => {
      state.post.loading = false;
      state.post.status = "failure";
    });
  },
});

// Action creators are generated for each case reducer function
// eslint-disable-next-line no-empty-pattern
export const {} = PostSlice.actions;

export default PostSlice.reducer;