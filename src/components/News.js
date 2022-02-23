import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=6a1d4f2afd3b4379bd04f56e72a8bb6d&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
      loading: false,
    });
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=6a1d4f2afd3b4379bd04f56e72a8bb6d&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };

  handleNextClick = async () => {
    if (
      this.state.page + 1 <=
      Math.ceil(this.state.totalArticles / this.props.pageSize)
    ) {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=6a1d4f2afd3b4379bd04f56e72a8bb6d&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false,
      });
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsApp - Top Headlines</h1>
        {this.state.loading && <Spinner />}

        <div className=" row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className=" d-flex justify-content-center col-md-4">
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
                        : "https://timesofindia.indiatimes.com/thumb/msid-89762021,width-1200,height-900,resizemode-4/89762021.jpg"
                    }
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
        </div>

        <div className="container d-flex justify-content-between">
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
        </div>
      </div>
    );
  }
}

export default News;
