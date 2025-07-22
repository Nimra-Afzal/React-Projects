"use client";
import React, { Component } from "react";

interface NewsItemProps {
  title: string;
  description: string;
  imageurl?: string;
  url: string;
}

export class NewsItem extends Component<NewsItemProps> {
  render() {
    const { title, description, imageurl, url } = this.props;

    return (
      <div className="h-full flex flex-col rounded overflow-hidden shadow-lg bg-white">
        <img
          className="w-full h-32 object-cover"
          src={
            !imageurl
              ? "https://cmg-cmg-tv-10020-prod.cdn.arcpublishing.com/resizer/v2/https%3A%2F%2Fcloudfront-us-east-1.images.arcpublishing.com%2Fcmg%2FNEMOQORYDFFEVKUNJAV6N3FXSI.jpeg?auth=d0de29b372ae04a2bfe93dff7d3460af3c60c330428bfd464952d4862359fc39&width=1200&height=630&smart=true"
              : imageurl
          }
          alt="Card Image"
        />
        <div className="flex flex-col justify-between flex-grow px-4 py-2">
          <div>
            <h5 className="text-xl font-semibold mb-2">{title}</h5>
            <p className="text-gray-700 text-base mb-4 line-clamp-2">
              {description}
            </p>
          </div>
          <a
            href={url}
            target="_blank"
            className="self-start bg-black hover:bg-gray-800 text-white text-sm font-semibold py-1.5 px-3 rounded"
          >
            Read More
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
