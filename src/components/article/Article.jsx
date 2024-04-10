import React from 'react'
import './article.css'

const Article = ( { imgUrl, } ) => {
  return (
    <div className='gpt5__blog-container_article'>
      <div className='gpt5__blog-container_article-image'>
        <img src={imgUrl} alt="blog" />
      </div>
      <div className='gpt5__blog-container_article-content'>
        <div>
          <p>Sep 26, 2023</p>
          <h3>GPT-5 and Open  AI is the future. Let us exlore how it is?</h3>
        </div>
        <p>Read Full Atricle</p>
      </div>
    </div>
  )
}

export default Article