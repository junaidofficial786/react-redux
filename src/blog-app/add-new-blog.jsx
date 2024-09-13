import {useDispatch, useSelector} from "react-redux";
import {handleInputChange, handleAddTodo, handleEditBlog, setCurrentEditedBlogId} from "../store/slices/blogSlice.jsx";

export default function AddNewBlog() {

    const {blog} = useSelector(state => state);
    // console.log(blog);
    const dispatch = useDispatch();
    const {currentEditedBlogId} = blog

    function onChangeInput(event) {
        dispatch(handleInputChange({
            [event.target.name]: event.target.value
        }))
    }

    function handleTodoSubmit(event) {
        event.preventDefault();
        if (currentEditedBlogId) {
            dispatch(handleEditBlog({}))
        } else {
            dispatch(handleAddTodo())
        }

        dispatch(setCurrentEditedBlogId({
            blogId: null
        }))
        dispatch(handleInputChange({
            title: "",
            description: ""
        }))
    }

    return (
        <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
            <form onSubmit={handleTodoSubmit} className="space-y-4">
                {/* Title Input */}
                <div className="flex flex-col">
                    <label htmlFor="title" className="text-gray-700 font-semibold">Enter Blog Title</label>
                    <input
                        value={blog?.formData?.title}
                        onChange={onChangeInput}
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Enter Blog Title"
                        className="mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                    />
                </div>

                {/* Description Input */}
                <div className="flex flex-col">
                    <label htmlFor="description" className="text-gray-700 font-semibold">Enter Blog Description</label>
                    <input
                        value={blog?.formData?.description}
                        onChange={onChangeInput}
                        type="text"
                        name="description"
                        id="description"
                        placeholder="Enter Blog Description"
                        className="mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-gray-700 text-white py-2 px-3 rounded-md hover:bg-gray-800 transition-all"
                >
                    {blog?.currentEditedBlogId ? "Edit Blog" : "Add New Blog"}
                </button>
            </form>
        </div>
    )
}