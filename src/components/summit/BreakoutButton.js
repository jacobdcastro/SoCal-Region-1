import React from 'react';

class BreakoutButton extends React.Component {
   render() {
      const data = this.props.speakerData;
      return (
         <button onClick={this.props.action} id={this.props.idName} className="description-card" >
            <h2>{data.firstName} {data.lastName}</h2>
            <h3>{data.breakoutTitle}</h3>
            <p>Click for more info</p>
         </button>
      );
   }
}

export default BreakoutButton;