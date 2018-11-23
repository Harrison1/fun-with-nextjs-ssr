import React from 'react'

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
      img {
        border-radius: 5px;
      }
    `}</style>
  </article>

export default BlogCard
