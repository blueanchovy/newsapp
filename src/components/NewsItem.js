import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div className="d-flex justify-content-end position-absolute w-100 top-0">
            <span className="badge rounded-pill bg-danger">
              {source.slice(0, 20)}
            </span>
          </div>

          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                {author ? `By ${author}` : `From ${source} `} on{" "}
                {new Date(date).toLocaleString("en-US", "Asia/Delhi")}
              </small>
            </p>
            <a href={newsUrl} target="blank" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
