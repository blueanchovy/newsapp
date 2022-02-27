import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 9,
    category: "science",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - NewsApp `;
  }

  async updateNews(pageNumber) {
    this.props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&apiKey=18753f77ed8d4a6688803545cfb985a8&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.props.setProgress(70);
    console.log(`total articles:${parsedData.totalResults}`);
    await this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    await this.updateNews();
  }

  //   handlePrevClick = async () => {
  //     await this.setState({ page: this.state.page - 1 });
  //     await this.updateNews();
  //   };

  //   handleNextClick = async () => {
  //     await this.setState({ page: this.state.page + 1 });
  //     await this.updateNews();
  //   };

  fetchMoreData = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    const url = `https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&apiKey=18753f77ed8d4a6688803545cfb985a8&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(`total articles:${parsedData.totalResults}`);
    await this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalArticles: parsedData.totalResults,
      loading: false,
    });
  };

  render() {
    return (
      <>
        {/* <div className="container my-3"> */}
        <h1 className="text-center" style={{ margin: "40px 0px" }}>
          NewsApp - Top {this.capitalizeFirstLetter(this.props.category)}{" "}
          Headlines
        </h1>
        {/* {this.state.loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalArticles}
          loader={<Spinner />}
        >
          <div className="container">
            <div className=" row">
              {this.state.articles.map((element) => {
                return (
                  <div
                    className=" d-flex justify-content-center col-md-4"
                    key={element.url}
                  >
                    <NewsItem
                      key={element.url}
                      title={element.title ? element.title : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      imageUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/amp_blog_image_large/public/blog/csm-blog/breaking-news-blog-1138x658-1.jpg?itok=yqaRxbyn"
                      }
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>

        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            onClick={this.handlePrevClick}
            type="button"
            className="btn btn-success"
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalArticles / this.props.pageSize)
            }
            onClick={this.handleNextClick}
            type="button"
            className="btn btn-success"
          >
            Next &rarr;
          </button>
        </div> */}
        {/* </div> */}
      </>
    );
  }
}

export default News;
