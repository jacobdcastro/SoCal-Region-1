import React from 'react';
import styled from 'styled-components';

const EventContainer = styled.div`
   padding: 30px 40px 10px;
   background-color: #bbb;
   margin-top: 50px;
   margin-bottom: 50px;

   h1 {
      font-family: 'neuzeit-grotesk', 'sans-serif';
      text-transform: uppercase;
   }

   .photo {
      text-align: center;
   }

   .event-photos {
      height: auto;
      width: 100%;
      max-width: 500px;
      margin: auto;
   }

   p {
      font-family: 'neuzeit-grotesk', 'sans-serif';
      margin: 25px auto;
      font-size: 1.15em;
      letter-spacing: .5px;
   }
`;

class Event extends React.Component {
   render() {
      return (
         <EventContainer>
            <div className="photo"><img className="event-photos" src={this.props.eventPhoto} alt={`Promotion for ${this.props.eventTitle}`} /></div>
            <h1>{this.props.eventTitle}</h1>
            <p>{this.props.desc}</p>
            <div className="info">
               {this.props.dates ? <p><b>When:</b><br />{this.props.dates}</p> : <div />}
            </div>
         </EventContainer>
      );
   }
}

export default Event;