import React from 'react';
import styled from 'styled-components';

const GalleryContainer = styled.div`
   margin: 0;
`;

class PhotoGallery extends React.Component {
   render() {
      return (
         <GalleryContainer>
            <div>
               {/* images go here */}
            </div>
            <h3>Photos By &copy; David Scott Bess - 2018<br />
            <a href="https://davidbess.com">davidbess.com</a></h3>
         </GalleryContainer>
      );
   }
}

export default PhotoGallery;