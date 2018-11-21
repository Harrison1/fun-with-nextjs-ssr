
import fetch from 'isomorphic-unfetch'
import App from '../components/App'
import endpoints from '../config'

const Index = props => 
  <App data={props} />

Index.getInitialProps = async ({ req }) => {
  const res = await fetch(`${endpoints.dev}/wp-json/wp/v2/posts`)
  const json = await res.json()
  return json
}

export default Index
