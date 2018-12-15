import React from 'react';
import styled from 'styled-components';

class PhotoGallery extends React.Component {
   render() {
      return (
         <div className="photo-section">
            <h1>Photos of the 2018 Annual Leadership Summit</h1>
            <div>
               {this.props.photos.map((photo) => {
                  return (
                     <img className="summit-photo" key={photo.id} src={photo.fixed.src} alt={photo.description} />
                  );
               })}
            </div>
            <h3>Photos By &copy; David Scott Bess - 2018<br />
            <a href="https://davidbess.com">davidbess.com</a></h3>
         </div>
      );
   }
}

export default PhotoGallery;