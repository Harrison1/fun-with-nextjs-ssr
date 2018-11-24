import React from 'react'
import BlogCard from './BlogCard'

const Blogroll = ({ posts }) =>
  <section>
    {posts.map(p => 
      <BlogCard 
        key={p.id} 
        excerpt={p.excerpt.rendered} 
        featuredmedia={p._embedded['wp:featuredmedia'][0]}
        slug={p.slug}
        title={p.title.rendered} 
      />)}
    <style jsx>{`
      section {
        margin: auto;
        max-width: 1200px;
        padding: 0 20px;
        width: 100%;
      }
      @media (min-width: 1200px) {
        section {
          padding: 0;
        }
      }
    `}</style>  
  </section>

export default Blogroll
