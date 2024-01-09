import { useEffect, useState } from 'react'
import axios from 'axios'
import { Tweets } from './Tweets'
import { PostForm } from './PostForm'

export const TweetPage = () => {
  const [tweets, setTweets] = useState<Array<Tweet>>([])

  useEffect(() => {
    const getTweet = async () => {
      const { data } = await axios.get('/api/tweet')
      setTweets(data)
    }
    getTweet()
  }, [])

  return (
    <>
      <h1>Laravel Sample App</h1>
      <PostForm />
      <Tweets tweets={tweets} />
    </>
  )
}
