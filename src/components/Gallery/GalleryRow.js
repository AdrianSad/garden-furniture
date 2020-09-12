import React, {useState} from 'react';
import Lightbox from "react-image-lightbox";
import styled from "styled-components";

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
            <RowWrapper>
                    {arr.map((item, index) => {
                        return <div className="zoom" key={index}>
                            <img src={item} alt="gallery page" onClick={() => {
                                setOpen(true);
                                setSrc(item);
                            }}
                            />
                        </div>
                    })}
            </RowWrapper>
        </>
    );
};

const RowWrapper = styled.div`

  display: flex;
  flex-flow: row nowrap;
  
@media(max-width: 1200px){
  flex-flow: row wrap;
    
  .zoom {
    flex-basis: 50%;
  }
}
  
@media(max-width: 768px){
  flex-flow: column wrap;
}



.zoom {
  overflow: hidden;
  margin: 0;
  padding: 0;
}

.zoom img{
  width: 100%;
  height: 100%;
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  transition: all 1s ease;
  
  cursor: pointer;
}

.zoom img:hover {
 transform: scale(1.2);
}
`;

export default GalleryRow;