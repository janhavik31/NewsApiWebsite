import React, { useState } from "react";

function Cards({ article }) {
  return (
    <div className="text-white bg-[#5A5859] rounded-2xl p-4 flex flex-col gap-3 justify-between 
    transition ease-in-out delay-150 hover:-translate-y-0.5 hover:scale-105 duration-700">

      <img className="rounded-2xl " src={article.urlToImage} alt="" />
      <h1 className=" px-2 font-medium underline underline-offset-4 cursor-pointer">
        <a href={article.url}>
          {article.title}
        </a>
      </h1>
      <p className="px-2 text-[#E3E3E3]">{article.description}</p>
      <div className="bg-[#484848] rounded-2xl">
        <div className="p-3">
          <h2 className=" truncate">{article.author}</h2>
          <p>{article.publishedAt}</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
