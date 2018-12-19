import React from 'react';
import styled from 'styled-components';

const UselessContainer = styled.div`
   margin: 0;
   padding: 0;
   height: 100%;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;

   .popup {
      display: ${props => props.popupIsShowing ? 'flex' : 'none'}; /* Hidden by default */
      position: fixed; /* Stay in place */
      z-index: 3; /* Sit on top */
      left: 0;
      top: 0;
      width: 100%; /* Full width */
      height: 100%; /* Full height */
      overflow: auto; /* Enable scroll if needed */
      background-color: rgb(0,0,0); /* Fallback color */
      background-color: rgba(0,0,0,0.75);
      margin: auto;
      margin: auto;
   }
   .popup-content {
      background-color: #555;
      margin: auto auto; /* 15% from the top and centered */
      padding: 20px;
      border: 1px solid #888;
      width: 80%;
      max-width: 500px;
   }

   .popup-close {
      height: 26px;
      width: auto;
      float: right;
      color: white;
   }
   .popup-close:hover {
      cursor: pointer;
   }

   .popup-photo {
      height: 140px;
      width: auto;
   }

   .popup-header h1,
   .popup-header h2,
   .popup-header h3 {
      margin: 5px auto;
      padding: 5px auto;
      text-align: center;
   }
   .popup-body {
      text-align: justify;
   }
`;

class BreakoutPopup extends React.Component {
   render() {

      const data = this.props.speakerData;

      return (
         <UselessContainer popupIsShowing={this.props.popupIsShowing}>
            <div id={this.props.idName} className="popup">
               <div className="popup-content">
                  <img onClick={this.props.action} className="popup-close" alt="close button" src={require('../../images/close-button.svg')} />
                  <div className="popup-header">
                     <img className="popup-photo" alt="speaker" src={require(`../../images/summit-photos/edited/${data.photoFileName}`)} />
                     <h1>{data.firstName} {data.lastName}</h1>
                     <h2>{data.breakoutTitle}</h2>
                     <h3>{data.breakoutSubtitle}</h3>
                  </div>
                  <p className="popup-body">{data.breakoutBody}</p>
               </div>
            </div>
         </UselessContainer>
      );
   }
}

export default BreakoutPopup;