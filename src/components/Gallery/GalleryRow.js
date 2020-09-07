import React from 'react';

const GalleryRow = ({arr}) => {
    return (
        <div>
            <div className="row">
                {arr.map((item, index) => {
                    return <div className="col-12 col-md-6 col-sm-12 col-lg-3 zoom" key={index}>
                        <img src={item} alt="gallery page picture"/>
                    </div>
                })}
            </div>
        </div>
    );
};

export default GalleryRow;