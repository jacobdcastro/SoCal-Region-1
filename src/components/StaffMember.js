import React from 'react';
import styled from 'styled-components';

const StaffMemberContainer = styled.div`
   display: flex;
   justify-content: flex-start;
   flex-direction: column;
   width: 100%;
   margin: 40px 15px;
   padding: 18px 35px;
   background-color: #bbb;
   @media (min-width: 724px) {
      justify-content: flex-start;
      flex-direction: row;
      align-items: center;
      flex-flow: row wrap;
   }
`;

const PhotoDiv = styled.div`
  display: flex;
  justify-content: center;
   img {
      height: 175px;
      width: auto;
      margin: 8px auto 5px;
      border-radius: 100px;
   }
`;

const TitleDiv = styled.div`
   h1, h3 {
      font-family: 'neuzeit-grotesk', 'sans-serif';
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 3px;
      margin: 8px auto;
   }
   @media (min-width: 724px) {
      padding-left: 40px;
      text-align: right;
      justify-content: flex-start;
      align-items: flex-start;
      align-content: flex-start;
      h1, h3 {
         text-align: left;
      }
   }
`;

const BioDiv = styled.div`
   margin: 0;
   p {
      font-family: 'neuzeit-grotesk', 'sans-serif';
      margin-top: 25px;
      font-size: 1.15em;
      letter-spacing: .5px;
   }
   @media (max-width: 480px) {
      p {
         font-size: 1.1em;
      }
   }
   @media (min-width: 724px) {
      align-self: flex-end;
   }
`;

const StaffContactDiv = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   width: 100%;
   margin: 5px;
   p {
      font-family: 'neuzeit-grotesk', 'sans-serif';
   }
   @media (min-width: 724px) {
      justify-content: space-around;
      flex-direction: row;
   }
`;

// functional component inserted into <ContactLeft> via a ternary operator
const StaffMemberChurch = ({churchName, address, city}) =>
   <p><strong>{churchName}</strong><br />
      {address}<br />
      {city}<br /></p>;

const MiscInfo = ({text}) => <i>{text}</i>;

class StaffMember extends React.Component {
   render() {
      console.log(this.props.miscInfo);
      return (
         <StaffMemberContainer>
            <PhotoDiv>
               <img alt="" src={this.props.photoURL} />
            </PhotoDiv>
            <TitleDiv>
               <h1>{this.props.name}</h1>
               <h3>{this.props.title}</h3>
            </TitleDiv>
            <BioDiv>
               <p>{this.props.bio}</p>
            </BioDiv>
            <StaffContactDiv>
               <div className="contact-left">
                  {this.props.church ? <StaffMemberChurch churchName={this.props.church.churchName} address={this.props.church.streetAddress} city={this.props.church.city} /> : <div />}
               </div>
               <div className="contact-right">
                  <p><b>Phone:</b> {this.props.phone}<br />
                     <b>Email:</b> {this.props.email}<br />
                     {this.props.miscInfo ? <MiscInfo text={this.props.miscInfo}  /> : <div />}
                  </p>
               </div>
            </StaffContactDiv>
         </StaffMemberContainer>
      );
   }
}

export default StaffMember;