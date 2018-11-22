import React from 'react'
import Excerpt from './Excerpt'
import Title from './Title'

const BlogCard = ({ excerpt, featuredmedia, title }) =>
  <article>
    <img src={featuredmedia.media_details.sizes.thumbnail.source_url} alt={title} />
    <div>
      <h3>{ title }</h3>
      <p>{ excerpt } </p>
    </div>
    <style jsx>{`
      article {
        align-items: flex-start;
        display: flex;
        margin-bottom: 1rem;
      }
    `}</style>
  </article>

export default BlogCard
