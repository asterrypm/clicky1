import React from 'react';

export const Cards = (props) => {
  return (
    <div className='row'>
      {
        props.trex.map(img => (
          <span className='col-6 col-lg-4 mb-3' key={img.id}>
            <img 
              className='imgs'
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
