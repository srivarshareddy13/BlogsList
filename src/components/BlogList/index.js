// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'
const BlogList = props => {
  const {blogsList, deleteItem} = props

  return (
    <div className="card-item">
      {blogsList.map(each => (
        <BlogItem key={each.id} details={each} deleteItem={deleteItem} />
      ))}
    </div>
  )
}
export default BlogList
