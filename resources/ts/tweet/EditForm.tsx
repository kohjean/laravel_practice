import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const EditForm = () => {
  const { id: tweetId } = useParams()
  const [tweet, setTweet] = useState<Tweet>(null)

  const handleSubmit = (eve: React.FormEvent<HTMLFormElement>) => {
    eve.preventDefault()
    // TODO: post data
  }

  useEffect(() => {
    const getTweet = async () => {
      const { data } = await axios.get(`/api/update/${tweetId}`)
      setTweet(data)
    }
    getTweet()
  }, [])

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
            defaultValue={tweet?.content ?? ''}
          />
        </div>
        <button type="submit">投稿</button>
      </form>
    </div>
  )
}
