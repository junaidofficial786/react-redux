import {createSlice, nanoid} from "@reduxjs/toolkit";

const initialState = {
    formData: {
        title: '',
        description: ''
    },
    blogList: [],
    currentEditedBlogId: null,
}

export const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
        handleInputChange: (state, action) => {
            // console.log("handleInputChange", action)
            let cpyFormData = {...state.formData};
            cpyFormData = {
                ...cpyFormData,
                ...action.payload
            }

            state.formData = cpyFormData;
        },
        handleAddTodo: (state, action) => {
            if ("" === state.formData.title || "" === state.formData.description) {
                alert("title and description both are required");
                return;
            }
            state.blogList.push({
                id: nanoid(),
                ...state.formData
            })

            state.formData = {
                title: "",
                description: "",
            }
            localStorage.setItem('blogList', JSON.stringify(state.blogList))
        },
        setBlogListOnInitialLoad: (state, action) => {
            state.blogList = action.payload.blogList;
        },
        handleDeleteBlog: (state, action) => {
            let cpyBlogList = [...state.blogList];
            cpyBlogList = cpyBlogList.filter(blogItem => blogItem.id !== action.payload.blogId);
            state.blogList = cpyBlogList
            localStorage.setItem('blogList', JSON.stringify(state.blogList))
        },
        setCurrentEditedBlogId: (state, action) => {
            state.currentEditedBlogId = action.payload.blogId;
        },
        handleEditBlog: (state, action) => {
            console.log("edit blog is called");
            state.blogList = state.blogList.map(blogItem =>
                blogItem.id === state.currentEditedBlogId
                    ? {...blogItem, ...state.formData} // update the blog
                    : blogItem
            ); // set the updated array
            localStorage.setItem('blogList', JSON.stringify(state.blogList));
        }
    }
})

export const {
    handleInputChange,
    handleEditBlog,
    handleAddTodo,
    setBlogListOnInitialLoad,
    handleDeleteBlog,
    setCurrentEditedBlogId
} = blogSlice.actions;
export default blogSlice.reducer;