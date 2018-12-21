import React from 'react';
import styled from 'styled-components';

const ChurchContainer = styled.div`
   margin: 25px auto;
   h3 {
      margin-bottom: 5px;
      font-size: 1.2em;
   }
   p {
      margin: 7.5px;
      font-size: 1.05em;
      letter-spacing: .5px;
   }
   a {
      color: #222;
   }
   a:hover {
      cursor: pointer;
      color: #528C8F;
   }
`;

class Church extends React.Component {
   render() {
      return (
         <ChurchContainer>
            <h3>{this.props.churchName}</h3>
            <p>Address: {this.props.streetAddress},<br />
               {this.props.city}, {this.props.zipCode}</p>
            
            { this.props.phoneNumber ? <p>Phone: {this.props.phoneNumber}</p> : <div /> }

            { this.props.website ? <p>Website: <a href={this.props.website}>{this.props.website}</a></p> : <div /> }

            { this.props.facebook ? <p><a href={this.props.facebook}>FACEBOOK</a></p> : <div /> }
            
         </ChurchContainer>
      );
   }
}

export default Church;