import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
    books: [],
    isLoading: false,
    isError: null,
}
export const getBooks = createAsyncThunk('book/getBooks',
    async(_, thunkApi) => {
        const { rejectWithValue } = thunkApi; 
        try{
            const res = await fetch('http://localhost:3005/books');
            const data = await res.json();
            return data;
        }
        catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

export const insertBook = createAsyncThunk('book/insertBook', 
    async (bookData,thunkApi) => {
        const {rejectWithValue, getState} = thunkApi;
        try{
            bookData.userName = getState().auth.name;
            const res = await fetch('http://localhost:3005/books', {
                method: "POST",
                body: JSON.stringify(bookData),
                headers: {
                    'Content-type': 'application/json; charset=UTf-8',
                },
            });
            const data = await res.json();
            return data;
        }
        catch (error) {
            return rejectWithValue(error.message);
        }
    }
)
export const deleteBook = createAsyncThunk('book/deleteBook', 
    async (id,thunkApi) => {
        const {rejectWithValue} = thunkApi;
        try{
            await fetch(`http://localhost:3005/books/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-type': 'application/json; charset=UTf-8',
                },
            });
            return id;
        }
        catch (error) {
            return rejectWithValue(error.message);
        }
    }
)


export const bookSlice = createSlice({
    name:'book',
    initialState,
    reducers:{},
    extraReducers: {
        // getBooks
        [getBooks.pending]: (state, action) => {
            state.isLoading = true;
            state.isError = null;
        },
        [getBooks.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.books = action.payload;
        },
        [getBooks.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = action.payload;
        },

        // insertBook
        [insertBook.pending]: (state, action)=>{
            state.isLoading = true;
            state.isError = null;
        },
        [insertBook.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.books.push(action.payload);
        },
        [insertBook.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = action.payload;
        },

        // deleteBook
        [deleteBook.pending]: (state, action)=>{
            state.isLoading = true;
            state.isError = null;
        },
        [deleteBook.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.books= state.books.filter(el => el.id !== action.payload);
        },
        [deleteBook.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = action.payload;
        },
    }
})

export default bookSlice.reducer