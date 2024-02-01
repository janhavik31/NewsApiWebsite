import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import axios from "axios";
import Search from "./Search";

function TopNews() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState("bitcoin");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=${searchValue}&pageSize=6&apiKey=8517bcf5b3d64fb3a3fc39e665680645`
        );
        setArticles(response.data.articles);
      } catch (error) {
        console.error("Failed to make request:", error.message);
        setError("Internal Server Error");
      }
    };

    fetchData();
  }, [searchValue]); // Include searchValue in the dependency array

  return (
    <div className="w-full lg:h-auto bg-fixed pic flex flex-col justify-center items-center p-8">
      <div className="w-full">
        <Search setSearchValue={setSearchValue} />
      </div>
      <div className="h-[100%] max-w-[1240px] bg-[#333333] bg-opacity-80 rounded-3xl sm:mx-6">
        <div className="p-5">
          <h1 className="text-white text-3xl font-[poppins] pt-3 pl-4 italic">
            Top Headlines
          </h1>
        </div>
        <div className="px-6 py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-6 gap-y-8">
          {error ? (
            <h2 className="text-white">{error}</h2>
          ) : (
            articles.map((article, index) => (
              <Cards key={index} article={article} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default TopNews;
