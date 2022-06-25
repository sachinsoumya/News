import React,{useState,useEffect} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"


const News =(props)=> {
  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(true)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)
  document.title=`${props.category.charAt(0).toUpperCase()+props.category.slice(1)}`

  



  
    
  
  const updateNews=async()=>{
    props.setProgress(10);
    console.log("Hello");
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b9f659aa7887493b924051279be6f325&page=1&pageSize=${props.pageSize}`;
    setloading({ loading: true })
    let data = await fetch(url)
    props.setProgress(30);
    let parseData = await data.json()
    props.setProgress(60);

    console.log(parseData);
    //this.setState({ articles: parseData.articles, totalArticles: parseData.totalResults, loading: false })
    setarticles(parseData.articles)
    settotalResults(parseData.totalResults)
    setloading(false)
    props.setProgress(100);


  }



  useEffect(() => {
    //props.setProgress(10);
    //console.log("Hello");
    //let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b9f659aa7887493b924051279be6f325&page=1&pageSize=${props.pageSize}`;
    //setloading({ loading: true })
    //let data = await fetch(url)
    //this.props.setProgress(30);
    //let parseData = await data.json()
    //props.setProgress(60);

    //console.log(parseData);
    //this.setState({ articles: parseData.articles, totalArticles: parseData.totalResults, loading: false })
    //setarticles(parseData.articles)
    //settotalResults(parseData.totalResults)
    //setloading(false)
    //props.setProgress(100);
     updateNews();
  },[]) 
    //props.setProgress(10);
    //console.log("Hello");
    //let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b9f659aa7887493b924051279be6f325&page=1&pageSize=${props.pageSize}`;
    //this.setState({ loading: true })
    //let data = await fetch(url)
    //this.props.setProgress(30);
    //let parseData = await data.json()
    //props.setProgress(60);

    //console.log(parseData);
    //this.setState({ articles: parseData.articles, totalArticles: parseData.totalResults, loading: false })
    //setarticles(parseData.articles)
    //settotalResults(parseData.totalResults)
    //setloading(false)
    //props.setProgress(100);

  
  //handlePreClick = async () => {
    //console.log("previous")
    //let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b9f659aa7887493b924051279be6f325&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    //let data = await fetch(url)
    //let parseData = await data.json()
    //console.log(parseData);
    //this.setState({
      //page: this.state.page - 1,
      //articles: parseData.articles
    //})
  //}
  //handleNextClick = async () => {
    //console.log("next")
    //if (this.state.page + 1 > Math.ceil(this.state.totalArticles / this.props.pageSize)) {


    //}
    //else {
      //let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b9f659aa7887493b924051279be6f325&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      //this.setState({ loading: true })
      //let data = await fetch(url)
      //let parseData = await data.json()

      //console.log(parseData);
      //this.setState({
        //page: this.state.page + 1,
        //articles: parseData.articles,
        //loading: false,
        //totalResults:parseData.totalResults

     // })
    //}
  //}
 const fetchMoreData = async() => {
    setpage(page+1)
    //this.setState({page:this.state.page+1})
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b9f659aa7887493b924051279be6f325&page=${page }&pageSize=${props.pageSize}`;
      //this.setState({ loading: true })
      let data = await fetch(url)
      let parseData = await data.json()

      console.log(parseData);
      setarticles(articles.concat(parseData.articles))
      settotalResults(parseData.totalResults)
      //this.setState({
        //page: this.state.page + 1,
        //articles: this.state.articles.concat(parseData.articles),
        //loading: false,
        //totalResults:parseData.totalResults
      //})

  }


  
    //console.log("render");
    return (
      <>
        <h2 style={{ margin: '35px',color:'brown',textAlign:'center',marginTop:'75px' }}>Newswapp-Top {document.title} Headlines</h2>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        >
      <div className="container my-4 text-center">
        <div className="row">
          {articles.map((elements) => {
            return <div className="col-md-4" key={elements.url}>
              <NewsItem title={elements.title ? elements.title.slice(0, 45) : ""} description={elements.description ? elements.description.slice(0, 88) : ""} imageUrl={elements.urlToImage} newsUrl={elements.url} author={elements.author} date={elements.publishedAt} source={elements.source.name} />
            </div>
        

          })}
      </div>
      </div>
        </InfiniteScroll>
        
        {/*<div className="container d-flex justify-content-between my-4">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark " onClick={this.handlePreClick}> &larr;Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles / this.props.pageSize)} type="button" className="btn btn-dark mx-3" onClick={this.handleNextClick}>Next &rarr;</button>


        </div>*/}
        

     </> 
    
    )
    
  }
News.defaultProps={
  country: 'in',
  pageSize: 8,
  category: 'general'
}
News.propTypes={
  name: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}


export default News
