import React from 'react'

const PostContent = ({ children }) =>
  <section>
    <article>
      { children }
    </article>
    <style jsx>{`
      :global(h1, h2) {
        margin: auto;
        max-width: 768px;
      }
      :global(p) {
        margin: auto;
        max-width: 768px;
      }
      :global(.wp-block-gallery) {
        align-items: center;
        display: flex;
        justify-content: center;
        list-style: none;
        margin: auto;
        max-width: 992px;
        padding: 0;
      }
      :global(.wp-block-gallery>li) {
        margin-right: 20px;
        width: 33%;
      }
      :global(.wp-block-gallery>li:last-child) {
        margin-right: 0;
      }
      :global(.wp-block-gallery>li>figure>img) {
        max-width: 100%;
      }
    `}</style>
  </section>

export default PostContent
