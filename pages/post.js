import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout'
import endpoints from '../config'

const Post = props => 
  <Layout>
    <h1>{props.post[0].title.rendered}</h1>
    { <div dangerouslySetInnerHTML={{__html: props.post[0].content.rendered}} /> }
  </Layout>

Post.getInitialProps = async (ctx) => {
  const { slug } = ctx.query
  const res = await fetch(`${endpoints.dev}/wp-json/wp/v2/posts/?slug=${slug}`)
  const post = await res.json()
  return { post }
}

export default Post
