import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import Layout from '../components/Layout'
import PostContent from '../components/shared/PostContent'
import endpoints from '../config'

const Post = props => 
  <Layout>
    <PostContent>
      <h1>{props.post[0].title.rendered}</h1>
      <div dangerouslySetInnerHTML={{__html: props.post[0].content.rendered}} />
    </PostContent>
  </Layout>

Post.getInitialProps = async (ctx) => {
  const { slug } = ctx.query
  const res = await fetch(`${endpoints.dev}/wp-json/wp/v2/posts/?slug=${slug}`)
  const post = await res.json()
  return { post }
}

export default Post
