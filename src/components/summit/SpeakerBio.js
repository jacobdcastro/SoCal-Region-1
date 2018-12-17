import React from 'react';
import styled from 'styled-components';
import speakerArrowImg from '../../images/down-arrow.png';

const Bio = styled.p` 
  font-size: .9em;
  text-align: left;
  letter-spacing: 3px;
  padding: 15px 5%;
  max-width: 900px;
  display: block;
`;

// NEXT TASK:
// create styled components for these tags
// and base the styles on the prop {bioIsShowing}

class SpeakerBio extends React.Component {
   render() {
      const classNames1 = `${this.props.speaker.className1} speaker`;
      const classNames2 = `${this.props.speaker.firstName}-title speaker-title`;
      const altText = `Portrait of ${this.props.speaker.firstName} ${this.props.speaker.lastName}`;

      // const toggleBio = () => 

      return (
         <div id={this.props.speaker.idName} className={classNames1} style={{height: 'auto'}}>
            <div className={classNames2}>
               <img className="speaker-pic" src={require(`../../images/summit-photos/edited/${this.props.speaker.photoFileName}`)} alt={altText} />
               <div>
                  <h4>{this.props.speaker.firstName} {this.props.speaker.lastName}</h4>
               </div>
               <img className="right-arrow" src={speakerArrowImg} alt="Arrow icon" />
            </div>
            <Bio className="bio" bioIsShowing={this.props.bioIsShowing}>
               {this.props.speaker.biography}
            </Bio>
         </div>
      );
   }
}

export default SpeakerBio;