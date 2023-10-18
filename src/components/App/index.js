import { useEffect, useState } from 'react'
import { Layout } from 'antd'
import NewsCard from '../NewsCard'
import { useGetNewsQuery } from '../../store/api'

function App() {
  const [skipValue, setSkipValue] = useState(0)
  const { data, isLoading, isFetching } = useGetNewsQuery(skipValue)

  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight

      if (scrolledToBottom && !isFetching) {
        setSkipValue((prevVal) => prevVal + 10)
      }
    }

    document.addEventListener('scroll', onScroll)

    return () => {
      document.removeEventListener('scroll', onScroll)
    }
  }, [isFetching, skipValue])

  return (
    <Layout style={{ padding: '20px' }}>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        data?.posts &&
        data.posts.map((post) => <NewsCard key={post.id} post={post} />)
      )}
    </Layout>
  )
}

export default App
