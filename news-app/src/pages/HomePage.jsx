import ArticleList from "../components/ArticleList"
import ArticleTeaser from "../components/ArticleTeaser"

import {useState, useEffect} from 'react'

function HomePage ({articles}){

    return (
        <div>
            {/* <div>
            {
                results
                ? <div >
                    <h2>search results</h2>
                    {results.map((article) => (
                    <ArticleTeaser key={article.id} {...article}/>
                ))}</div>
                : ''
            }
            </div> */}
            
            <hr/>
            <h2>All Articles</h2>
            <ArticleList articles={articles}/>
        </div>
    )
}

export default HomePage