import React from "react";
import postReview from "./postReview";
let e = React.createElement;

export default class reviewForm extends React.Component {
    render() {

        return (
            e('div',
                { class: 'container' },
                e(postReview, {}, null),

            )
        );
    }
}