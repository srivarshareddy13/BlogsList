// Write your JS code here

import './index.css'
const BlogItem = props => {
  const {details, deleteItem} = props
  const {id, title, summary, author, publishedDate} = details

  const onDelete = () => deleteItem(id)

  return (
    <div className="card-item">
      <h1 className="title">{title}</h1>
      <p className="author">{author}</p>
      <p className="summary">{summary}</p>
      <p className="date">{publishedDate}</p>
      <button className="delete" onClick={onDelete}>
        Delete
      </button>
    </div>
  )
}
export default BlogItem
