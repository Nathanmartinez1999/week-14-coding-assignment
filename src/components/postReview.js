import React, { useState } from "react";
import Review from "./review";
import LikeButton from './like-button'
import comment from "./comment";
import { render } from "@testing-library/react";
import Comment from "./comment";

let e = React.createElement;

export default class postReview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            content: props.content
        };
    }
    render() {
        setTimeout(() => this.setState({ content: 'state updated' }), 2000);

        let comments = [];
        if (this.state.comments) {
            for (let comment of this.state.comments) {
                comments.push(<Comment {...comment} />);
            }
        }

        return (
            <div className="card w-85">
                <div className="card-header">
                    <h1>Tombstone</h1>
                    <img height='500px' src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61rLuUCXXoL._AC_SY679_.jpg" />
                </div>
                <div className="card-body">
                    <h3>Summery</h3>
                    <h4>Release Year-1994  Rating-R</h4>
                    <p>Tombstone is a classic western movie, which follows the once famed and now retired lawman Wyatt Earp, who now along with his two brothers travel to the newly founded mining town of Tombstone AZ, Where they hope to make a fourtune and settle down</p>
                    <div className="review-box">
                        <div className="comment-container">{comment}</div>
                        <div className="box">
                            <h3>Leave A Review!</h3>
                            <textarea className="input-box" />
                            <button className="review-button">SUBMIT</button>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <LikeButton />
                    <Review />
                </div>

                <div className="card-header" >
                    <h1>Signs</h1>
                    <img height='500px' src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51J5J9zAyVL.jpg" />
                </div>
                <div className="card-body">
                    <h3>Summery</h3>
                    <h4>Release year-2002  Rating-R</h4>
                    <p>Everything that farmer Graham Hess assumed about the world is changed when he discovers a message - an intricate pattern of circles and lines - carved into his crops. As he investigates the unfolding mystery, what he finds will forever alter the lives of his brother and children. A unique story that explores the mysterious real-life phenomena of crop signs and the effects they have on one man and his family.</p>
                </div>
                <div className="review-box">
                    <div className="comment-container">{comment}</div>
                    <div className="box">
                        <h3>Leave A Review!</h3>
                        <textarea className="input-box" />
                        <button className="review-button">SUBMIT</button>
                    </div>
                </div>
                <div className="card-footer">
                    <LikeButton />
                    <Review />
                </div>

                <div className="card-header" >
                    <h1>GoodFellas</h1>
                    <img height='500px' src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/ef4b93ef8f7157de3f97ae1ff5d21b56_0526bb98-1f4a-4da5-b928-b0025f5e6371_480x.progressive.jpg?v=1573585487" />
                </div>
                <div className="card-body">
                    <h3>Summery</h3>
                    <h4>Release year-1990  Rating-R</h4>
                    <p>Goodfellas follows the high class and criminal side of a member of new yorks italian mafia a man named "Henry hill" as he makes his way from a young criminal with dreams of being in the mafia to becoming one of the most respected gangsters in New York</p>
                </div>
                <div className="review-box">
                    <div className="comment-container">{comment}</div>
                    <div className="box">
                        <h3>Leave A Review!</h3>
                        <textarea className="input-box" />
                        <button className="review-button">SUBMIT</button>
                    </div>
                </div>
                <div className="card-footer">
                    <LikeButton />
                    <Review />
                </div>



                <div className="card-header" >
                    <h1>Heat</h1>
                    <img height='500px' src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51UVuQox4XL._AC_.jpg" />
                </div>
                <div className="card-body">
                    <h3>Summery</h3>
                    <h4>Release year-1995  Rating-R</h4>
                    <p>Master criminal Neil McCauley is trying to control the rogue actions of one of his men, while also planning one last big heist before retiring. Meanwhile, Lieutenant Hanna attempts to track down McCauley as he deals with the chaos in his own life, including the infidelity of his wife and the mental health of his stepdaughter. McCauley and Hanna discover a mutual respect, even as they try to thwart each other's plans.</p>
                </div>
                <div className="review-box">
                    <div className="comment-container">{comment}</div>
                    <div className="box">
                        <h3>Leave A Review!</h3>
                        <textarea className="input-box" />
                        <button className="review-button">SUBMIT</button>
                    </div>
                </div>
                <div className="card-footer">
                    <LikeButton />
                    <Review />
                </div>

            </div>


        );
    }
}