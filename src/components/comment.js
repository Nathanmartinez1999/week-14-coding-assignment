import React from "react";
import Review from './review'
import LikeButton from './like-button';
import review from "./like-button";

let e = React.createElement;

export default class Comment extends React.Component {
    render() {
        return (
            <div className="card w-85">
                <div className="card-header bg-success text white">
                    {this.props.fullName} {this.props.date}</div>
                <div className="card-body">
                    {this.props.content}</div>


                <div className="card-footer">
                    <LikeButton />
                    <Review />
                </div>
            </div>
        );
    }
}
