import React from 'react'
import Link from 'next/link'

const BlogCard = ({ excerpt, featuredmedia, id, slug, title }) =>
  <article>
    <Link as={`/p/${slug}`} href={`/post?slug=${slug}`}>
      <a>
        <img src={featuredmedia.media_details.sizes.thumbnail.source_url} alt={title} />
        <div>
          <h3>{ title }</h3>
          <p>{ excerpt } </p>
        </div>
      </a>
    </Link>
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
