import axios, { AxiosError } from 'axios'

type Props = {
  tweets: Array<Tweet>
}

export const Tweets = ({ tweets }: Props) => {
  const handleDelete = (tweetId: number) => {
    const deleteTweet = async () => {
      try {
        await axios.delete(`/api/delete/${tweetId}`)
      } catch (err) {
        console.error(err)
      }
    }
    deleteTweet()
  }

  return tweets.map((tweet) => (
    <details key={tweet.id}>
      <summary>{`${tweet.content} by ${tweet.user_id}`}</summary>
      <div>
        <a href={`/tweet/update/${tweet.id}`}>編集</a>
        <form
          onSubmit={(eve: React.FormEvent<HTMLFormElement>) => {
            eve.preventDefault()
            handleDelete(tweet.id)
          }}
        >
          <button type="submit">削除</button>
        </form>
      </div>
    </details>
  ))
}
