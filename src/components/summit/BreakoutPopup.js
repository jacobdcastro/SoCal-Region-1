import React from 'react';

class BreakoutPopup extends React.Component {
   render() {

      const data = this.props.speakerData;

      return (
         <div id={this.props.idName} className="popup">
            <div className="popup-content">
               <img className="popup-close" alt="close button" src={require('../../images/close-button.svg')} />
               <div className="popup-header">
                  <img className="popup-photo" alt="speaker" src={require(`images/summit-photos/edited/${data.photoFileName}`)} />
                  <h1>{data.firstName} {data.lastName}</h1>
                  <h2>{data.breakoutTitle}</h2>
                  <h3>{data.breakoutSubtitle}</h3>
               </div>
               <p className="popup-body">{data.breakoutBody}</p>
            </div>
         </div>
      );
   }
}

export default BreakoutPopup;