
import fetch from 'isomorphic-unfetch'
import App from '../components/App'
import endpoints from '../config'

const Index = props => 
  <App posts={ props.posts } features={ props.features } />

Index.getInitialProps = async () => {
  const resPosts = await fetch(`${endpoints.dev}/wp-json/wp/v2/posts/?_embed`)
  const resFeatures = await fetch(`${endpoints.dev}/wp-json/wp/v2/posts/?categories=2&per_page=4&_embed`)
  const posts = await resPosts.json()
  const features = await resFeatures.json()
  return { features, posts }
}

export default Index
