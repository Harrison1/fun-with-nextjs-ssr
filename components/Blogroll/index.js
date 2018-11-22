import React from 'react'
import BlogCard from './BlogCard'

const Blogroll = ({ posts }) =>
  <section>
    {posts.map(p => 
      <BlogCard 
        key={p.id} 
        excerpt={p.excerpt.rendered} 
        featuredmedia={p._embedded['wp:featuredmedia'][0]} 
        title={p.title.rendered} 
      />)}
  </section>

export default Blogroll
