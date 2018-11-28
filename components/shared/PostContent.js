import React from 'react'

const PostContent = ({ children }) =>
  <section>
    <article>
      { children }
      <style jsx>{`
      :global(h1) {
        margin: auto;
        max-width: 768px;
      }
      :global(p) {
        margin: auto;
        max-width: 768px;
      }
    `}</style>
    </article>
  </section>

export default PostContent
