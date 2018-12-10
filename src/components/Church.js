import React from 'react';
import styled from 'styled-components';

const ChurchContainer = styled.div`
   margin: 0;
`;

class Church extends React.Component {
   render() {
      return (
         <ChurchContainer>
            <h3>{this.props.churchName}</h3>
            <p>Address: {this.props.streetAddress},<br />
               {this.props.city}, {this.props.zipCode}</p>
            <p>Phone: {this.props.phoneNumber}</p>
            <p>Website: <a href={this.props.website}>{this.props.website}</a></p>
            <p><a href={this.props.facebookPageURL}><strong>FACEBOOK</strong></a></p>
         </ChurchContainer>
      );
   }
}

export default Church;