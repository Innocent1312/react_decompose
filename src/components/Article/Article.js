import React from 'react';
import './Article.css';
import Paragraphs from '../Paragraphs';

const Article = () => (
  <article className="article">
    <h1 className="article__title">Headline</h1>
    <Paragraphs />
  </article>
);

export default Article;
