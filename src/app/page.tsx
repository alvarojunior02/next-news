"use client"

import CardNews from "@/components/CardNews";
import Header from "@/components/Header";
import { CardNewsInterface } from "@/interfaces/CardNewsInterface";
import { api } from "@/services/api";
import { useEffect, useState } from "react";

export default function Home() {
  const [articles, setArticles] = useState<CardNewsInterface[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    api.get('/top-headlines?country=us')
      .then((response) => {
        setArticles(response.data.articles);
      })
  })

  const handleLoadMore = () => {
    api.get(`/top-headlines?country=us&page=${page+1}`)
      .then((response) => {
        const newArticlesConcat = articles.concat(response.data.articles);
        setArticles(newArticlesConcat);
      })
    setPage(page + 1);
  }

  return (
    <>
      <Header />
      <main className="w-3/4 flex flex-col justify-center items-center px-12 mt-4">
        { 
          articles.map((article, index) => {
            if(article.title !== "[Removed]") {
              return (
                <CardNews 
                  key={index} 
                  urlToImage={article.urlToImage} 
                  title={article.title} 
                  author={article.author} 
                  description={article.description}
                  content={article.content}
                  publishedAt={article.publishedAt}
                  url={article.url}
                />
              )
            }
          })
        }
      </main>
    </>
  )
}
