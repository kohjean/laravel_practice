import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const PostForm = () => {
  const [tweet, setTweet] = useState<Tweet['content']>()

  const handleOnChange = (eve: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTweet(eve.target.value)
  }

  const handleSubmit = (eve: React.FormEvent<HTMLFormElement>) => {
    eve.preventDefault()
    // TODO: post data
  }

  return (
    <div>
      <p>Form</p>
      <form onSubmit={handleSubmit}>
        <label>Tweet</label>
        <span>140字まで</span>
        <div>
          <textarea
            id="tweet-content"
            name="tweet"
            value={tweet}
            onChange={handleOnChange}
          />
        </div>
        <button type="submit">投稿</button>
      </form>
    </div>
  )
}
