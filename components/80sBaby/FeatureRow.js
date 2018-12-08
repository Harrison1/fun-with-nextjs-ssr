import React from 'react'

const images = [
  {
    src: 'http://img08.deviantart.net/b927/i/2013/125/2/5/batman_by_simonpenter-d645r27.jpg',
    alt: 'Batman',
    link: 'https://www.dccomics.com/'
  },
  {
    src:'http://img04.deviantart.net/1375/i/2012/194/3/2/black_widow_anime_by_night_hawk_tamps-d574460.jpg',
    alt: 'Black Widow',
    link: 'https://www.marvel.com/'
  },
  {
    src:'http://orig04.deviantart.net/88ef/f/2007/100/4/5/venom_by_francis001.jpg',
    alt: 'Venom',
    link: 'https://www.marvel.com/'
  },
  {
    src: 'http://img03.deviantart.net/dd34/i/2012/024/6/5/the_goddamn_superman_by_mikemaluk-d4nguqu.jpg',
    alt: 'Superman',
    link: 'https://www.dccomics.com/'
  },
]

const FeatureRow = props =>
  <div className='wrapper'>
    {images.map(i =>
      <article>
        <a href={i.link}>
          <div>
            <img src={i.src} alt={i.alt}/>
          </div>
          <div className="post-title">
            <h3>{i.alt}</h3>
          </div>
        </a>
      </article> 
    )}
    <style jsx>{`
      article {
        border: 5px solid transparent;
        border-radius: 15px;
        height: 70vh;
        overflow: hidden;
        position: relative;
        width: 25%;
        transition: width 0.75s ease-in-out;
      }
      article:hover {
        width: 80%
      }
      article:hover img {
        transform: scale(1.04) translateX(-50%);
        transition: transform 0.75s ease-in-out;
      }
      img {
        margin-left: 50%;
        transform: translateX(-50%);
        transition: transform 0.75s ease-out;
      }
      .post-title {
        color: #fff;
        background: rgba(0, 0, 0, 0.5);
        padding: 10px;
        position: absolute;
        bottom: 0;
        width: 100%;
      }
      .wrapper {
        display: flex;
        height: 70vh;
        width: 100%;
      }
    `}</style>
  </div>

export default FeatureRow
