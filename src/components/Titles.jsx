import React from "react";
import { useSelector } from 'react-redux';

function Titles() {
    let title = '';
    let subTitle = '';

    useSelector((state) => {
        title = state.title;
        subTitle = state.subTitle;
    });


    return (
        <div className="heading mx-auto text-center mt-3 mb-3">
            <h2>{title}</h2>
            <small>{subTitle}</small>

        </div>
    );
}

export default Titles;