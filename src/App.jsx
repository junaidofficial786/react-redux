// import CounterButton from "./counter-example/counter-button.jsx";
// import CounterValue from "./counter-example/counter-file.jsx";
import AddNewBlog from "./blog-app/add-new-blog.jsx";
import BlogList from "./blog-app/blog-list.jsx";
function App() {

    return (
        <>
            <div>
                <h1>Blog List CRUD using localStorage</h1>
                <AddNewBlog />
                <BlogList />

                {/*<CounterButton />*/}
                {/*<CounterValue />*/}
            </div>
        </>
    )
}

export default App
