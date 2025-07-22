"use client";
import React, { Component } from "react";
import NewsItem from "./NewsItem";
// import example from './example';
// interface NewsProps {
//   pageSize: number;
// }

type Article = {
  title: string;
  description: string;
  urlToImage: string;
  url: string;
};

interface NewsState {
  articles: Article[];
  loading: boolean;
  page: number;
  totalResults: number;
}

export class News extends Component<{}, NewsState> {

 constructor(props:{}) {
  super(props); // ✅ No type annotation here
  this.state = {
    articles: [],
    loading: false,
    page: 1,
    totalResults: 0,
  };
}


  async componentDidMount() {
    let fetchurl =
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=ad84ba723156465a90354f1fa46f922b&page=1&pageSize=20}`;
    let data = await fetch(fetchurl);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  handlepreviousclick = async () => {
    let fetchurl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=ad84ba723156465a90354f1fa46f922b&page=${
      this.state.page - 1
    }&pageSize=20`;
    let data = await fetch(fetchurl);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };

  handlenextclick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
    } else {
      let fetchurl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=ad84ba723156465a90354f1fa46f922b&page=${
        this.state.page + 1
      }&pageSize=20}`;
      let data = await fetch(fetchurl);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };
  render() {
    return (
      <div className="container mx-auto px-4 my-6">
        <h1 className="text-2xl font-bold mb-6 text-center">
          NewsBites - Top Headlines
        </h1>
        <div className="flex flex-wrap justify-center gap-4 items-stretch">
          {this.state.articles.map((element) => (
            <div key={element.title} className="w-full md:w-[32%]">
              <div className="h-full">
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageurl={element.urlToImage}
                  url={element.url}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between py-4 px-2 w-full">
          <button
            disabled={this.state.page <= 1}
            className={`${
              this.state.page <= 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-800"
            } bg-black text-white text-sm font-semibold py-3 px-3 rounded`}
            onClick={this.handlepreviousclick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / 20)
            }
            className={`${
              this.state.page + 1 > Math.ceil(this.state.totalResults / 20)
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-800"
            } bg-black text-white text-sm font-semibold py-3 px-6 rounded`}
            onClick={this.handlenextclick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
