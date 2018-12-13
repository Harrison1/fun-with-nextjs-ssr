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
        <hr />
      </a>
    </Link>
    <style jsx>{`
      a {
        width: 100%;
      }
      article {
        align-items: flex-start;
        // border-bottom: 2px solid #f2f2f2;
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
      hr {
        background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
        background-size: 400% 400%;
        border: none;
        height: 1px;
        outline: none;
        animation: gradient 30s ease infinite;
      }
      img {
        border-radius: 5px;
        margin-right: 15px;
      }
      @keyframes gradient {
        0% {
          background-position: 0% 50%
        }
        50% {
          background-position: 100% 50%
        }
        100% {
          background-position: 0% 50%
        }
      }
    `}</style>
  </article>

export default BlogCard
