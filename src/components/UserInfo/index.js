// Write your JS code here
import {useState} from 'react'

import {v4} from 'uuid'

import './index.css'

import BlogList from '../BlogList'

const blogsList = [
  {
    id: 1,
    title: 'My first post',
    author: 'Wade Warren',
    summary: 'A high quality solution beautifully designed for startups',
    publishedDate: 'Aug 2nd',
  },
  {
    id: 2,
    title: 'My second post',
    author: 'Wade Warren',
    summary:
      'A high quality solution beautifully designed for startups and Bussiness schools',
    publishedDate: 'Mar 1st',
  },
  {
    id: 3,
    title: 'My third post',
    author: 'Wade Warren',
    summary: 'A high quality solution beautifully designed for startups',
    publishedDate: 'Jan 2nd',
  },
  {
    id: 4,
    title: 'My fourth post',
    author: 'Wade Warren',
    summary:
      'A high quality solution beautifully designed for startups and Bussiness schools. ',
    publishedDate: 'Dec 24th',
  },
  {
    id: 5,
    title: 'My fifth post',
    author: 'Wade Warren',
    summary: 'A high quality solution beautifully designed for startups',
    publishedDate: 'Nov 10th',
  },
]

const UserInfo = () => {
  const [details, setDetails] = useState({
    title: '',
    author: '',
    summary: '',
    date: '',
    data: blogsList,
  })

  const handleChange = e => {
    const {name, value} = e.target
    setDetails(prev => {
      return {...prev, [name]: value}
    })
  }

  const deleteItem = id => {
    setDetails(prev => {
      return {...prev, data: [...prev.data.filter(each => each.id !== id)]}
    })
  }

  const submitForm = event => {
    event.preventDefault()
    const newDetails = {
      id: v4(),
      title: details.title,
      author: details.author,
      summary: details.summary,
      date: details.date,
    }

    setDetails(prev => {
      return {...prev, data: [...prev.data, newDetails]}
    })
  }

  return (
    <div className="container">
      <form className="form-container" onSubmit={submitForm}>
        <label htmlFor="title" className="label">
          Title
        </label>
        <input
          id="title"
          className="input"
          type="text"
          name="title"
          onChange={handleChange}
        />
        <label htmlFor="author" className="label">
          Author
        </label>
        <input
          id="author"
          type="text"
          name="author"
          className="input"
          onChange={handleChange}
        />
        <label htmlFor="summary" className="label">
          Summary
        </label>
        <textarea
          id="summary"
          rows="20"
          className="input"
          onChange={handleChange}
          name="summary"
        ></textarea>
        <label htmlFor="date" className="label">
          Published Date
        </label>
        <input
          id="date"
          type="date"
          className="input"
          name="date"
          onChange={handleChange}
        />
        <button type="button" className="button">
          Submit
        </button>
      </form>
      <BlogList blogsList={details.data} deleteItem={deleteItem} />
    </div>
  )
}
export default UserInfo
