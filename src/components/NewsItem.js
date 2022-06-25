//import { getByTitle } from '@testing-library/react'
import React from 'react'

const NewsItem = (props) => {

    let {title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className="my-3">
            <div className="card">
                <div style={{ display: 'flex', justifyContent: 'center', position: 'absolute', right: '0' }}>
                    <span className=" badge rounded-pill bg-danger" >{source}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </div>

                <img src={imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                   <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">By {author == null ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target="_self" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )

}

export default NewsItem
