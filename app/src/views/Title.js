import React from 'react';
import '../less/title.less'

const Title = (props) => {
    return (
        <div className="row title">
            <div className="col-lg-12 ms-auto title__title">
                <h1 className='title__text mx-auto' >
                    {props.mainTitle.toUpperCase()}
                </h1>
            </div>
        </div>
    );
};

export default Title;