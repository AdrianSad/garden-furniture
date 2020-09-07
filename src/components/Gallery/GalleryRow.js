import React, {useState} from 'react';
import Lightbox from "react-image-lightbox";

const GalleryRow = ({arr}) => {

    const [open, setOpen] = useState(false);
    const [src, setSrc] = useState("");

    return (
        <>
            {open && <Lightbox
                mainSrc={src}
                enableZoom={false}
                onCloseRequest={() => setOpen(false)}
            />}
            <div>
                <div className="row">
                    {arr.map((item, index) => {
                        return <div className="col-12 col-md-6 col-sm-12 col-lg-3 zoom" key={index}>
                            <img src={item} alt="gallery page" onClick={() => {
                                setOpen(true);
                                setSrc(item);
                            }}
                                 style={{cursor: "pointer"}}
                            />
                        </div>
                    })}
                </div>
            </div>
        </>
    );
};

export default GalleryRow;