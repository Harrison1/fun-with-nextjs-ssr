import {withRouter} from 'next/router'
import Layout from '../components/Layout'
import endpoints from '../config'

// const Content = withRouter((props) => (
//   <div>
//     <h1>{props.title.rendered}</h1>
//     { <div dangerouslySetInnerHTML={{__html: props.content.rendered}} /> }
//   </div>
// ))

const Post = props =>
    <Layout>
      <h1>{props.post.title.rendered}</h1>
      { <div dangerouslySetInnerHTML={{__html: props.post.content.rendered}} /> }
    </Layout>

Post.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`${endpoints.dev}/wp-json/wp/v2/posts/${id}?_embed`)
  const post = await res.json()

  // console.log(post)

  return { post }
}

export default Post
