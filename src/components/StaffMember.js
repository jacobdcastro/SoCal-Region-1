import React from 'react';
import styled from 'styled-components';

const StaffMemberContainer = styled.div`
   margin: 0;
`;

class StaffMember extends React.Component {
   render() {
      return (
         <StaffMemberContainer>
            <div className="photo-div">
               <img alt="" className="photo" src="../images/staff/Ted-Pugh.jpg" />
            </div>
            <div className="title-div">
               <h1>{this.props.name}</h1>
               <h3>{this.props.num}</h3>
            </div>
            <div className="bio-div">
               <p>"God called me to pastoral ministry when I was in my early 20's. The core of my call has been two-fold: first, to see people come to faith, be discipled, and grow their faith. Secondly, to help develop and equip pastors and leaders. It is amazing because being the lead pastor at Ventura First Assembly and Executive Presbyter (EP) for Region 1, I have the privilege of fulfilling both aspects of God's call on my life in some incredible ways. I love the opportunities I have as the EP to invest and come alongside pastors and leaders throughout our Region. I have a passion for Region 1 and I am excited to see all that God continues to do in our Region!"</p>
            </div>
            <div className="staff-contact">
               <div className="contact-left">
                  <p><strong>Ventura First Assembly</strong><br />
                     346 N. Kimball Rd.<br />
                     Ventura, CA 93004<br />
                     <i>Asst: Tiffany Pugh</i></p>
               </div>
               <div className="contact-right">
                  <p><b>Phone:</b> (805) 647-2004<br />
                     <b>Email:</b> socalregion1@gmail.com</p>
               </div>
            </div>
         </StaffMemberContainer>
      );
   }
}

export default StaffMember;