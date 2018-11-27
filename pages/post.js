import Layout from '../components/Layout'
import endpoints from '../config'

const Post = props =>
    <Layout>
      <h1>{props.post.title.rendered}</h1>
      { <div dangerouslySetInnerHTML={{__html: props.post.content.rendered}} /> }
    </Layout>

Post.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`${endpoints.dev}/wp-json/wp/v2/posts/${id}?_embed`)
  const post = await res.json()
  return { post }
}

export default Post
