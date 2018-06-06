import React from 'react';

export const Cards = (props) => {
  return (
    <div className='row'>
      {
        props.trex.map(img => (
          <span className='col-6 col-lg-4 mb-3' key={img.id}>
            <img id="images" styled="w3-card w3-border w3-border-blue"
              className='img-fluid'
              data-id={img.id}
              src={img.src}
              alt='Baby Dinosaurs'
              onClick={() => props.handleClick(img.id)}
            />
          </span>
        )
        )
      }
    </div>
  );
};
