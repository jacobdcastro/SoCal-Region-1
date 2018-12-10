import React from 'react';
import styled from 'styled-components';

const EventContainer = styled.div`
   margin: 0;
`;

class Event extends React.Component {
   render() {
      return (
         <EventContainer>
            <div className="photo"><img className="event-photos" src="../images/events-photos/coffee-w-pastor-rich-updated-3.19.18.png" /></div>
               <h1>COFFEE w/ PASTOR RICH</h1>
               <p>A unique opportunity for you to spend time with our Superintendent, ask questions, pray together, and be discipled and encouraged. </p>
               <div className="info">
                  <p><b>When:</b><br />
                  - Thursday, July 19th, 2018<br />
               - Thursday, September 13th, 2018</p>
          </div>
         </EventContainer>
      );
   }
}

export default Event;