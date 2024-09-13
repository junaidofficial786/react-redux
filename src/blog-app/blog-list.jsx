import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {
    handleDeleteBlog,
    handleInputChange,
    setBlogListOnInitialLoad,
    setCurrentEditedBlogId
} from "../store/slices/blogSlice.jsx";

export default function BlogList() {
    const {blog} = useSelector((state) => state);
    let blogList = blog.blogList
    // console.log(blog);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setBlogListOnInitialLoad({
            blogList: JSON.parse(localStorage.getItem("blogList")) || []
        }))
    }, [])

    function onDeleteBlog(blogId) {
        console.log(blogId)
        dispatch(handleDeleteBlog({
            blogId: blogId,
        }))
    }

    function onEditBlog(blog) {

        dispatch(setCurrentEditedBlogId({
            blogId: blog.id,
        }))

        dispatch(handleInputChange({
            title: blog.title,
            description: blog.description,
        }))
    }

    return (
        <div>
            <ul className="space-y-4">
                <li>
                    {blogList.length > 0 ? (
                        blogList.map((singleBlogItem) => (
                            <div key={singleBlogItem.id} className="border border-gray-300 rounded-md p-4 shadow-md">
                                <div
                                    className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-2 sm:space-y-0">
                                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                                        <span className="font-bold">Title:</span> {singleBlogItem.title} —
                                        <span className="font-bold"> Desc:</span> {singleBlogItem.description}
                                    </h3>
                                    <div className="flex space-x-2">
                                        <button
                                            onClick={() => onEditBlog(singleBlogItem)}
                                            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => onDeleteBlog(singleBlogItem.id)}
                                            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <h1 className="text-2xl font-bold text-gray-500 text-center mt-6">No blog added</h1>
                    )}
                </li>
            </ul>

        </div>
    )
}