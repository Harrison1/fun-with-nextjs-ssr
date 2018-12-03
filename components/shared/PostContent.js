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
    `}</style>
  </section>

export default PostContent
