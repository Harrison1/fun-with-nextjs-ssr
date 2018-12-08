import React from 'react'
import Link from 'next/link'

const BlogCard = ({ excerpt, featuredmedia, slug, title }) =>
  <article>
    <Link prefetch as={`/${slug}`} href={`/post?slug=${slug}`}>
      <a>
        <div className="blog-card">
          <img src={featuredmedia.media_details.sizes.thumbnail.source_url} alt={title} />
          <div>
            <h3>{ title }</h3>
            <div dangerouslySetInnerHTML={{__html: excerpt}} />
          </div>
        </div>
      </a>
    </Link>
    <style jsx>{`
      a {
        width: 100%;
      }
      article {
        align-items: flex-start;
        border-bottom: 2px solid #f2f2f2;
        display: flex;
        margin: auto;  
        margin-bottom: 30px;
        max-width: 768px;
        padding-bottom: 15px;
        width: 100%;
      }
      .blog-card {
        border-radius: 5px;
        display: flex;
      }
      img {
        border-radius: 5px;
        margin-right: 15px;
      }
    `}</style>
  </article>

export default BlogCard
