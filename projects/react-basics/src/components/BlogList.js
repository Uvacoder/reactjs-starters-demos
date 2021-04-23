
const BlogList = ({blogs, title , handleDelete}) => {
 
  return ( 
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map(blog =>(
        <div className="blog-preview"key={blog.id}>
          <h1>{blog.title}</h1>
          <h3>{blog.author}</h3>
          <p>{blog.body}</p>
          <button onClick={() => handleDelete(blog.id)}>Delete blog</button>
        </div>
      ))
      }
    </div>
   );
}
 
export default BlogList;