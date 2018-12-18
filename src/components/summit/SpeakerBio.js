import React from 'react';
import styled from 'styled-components';
import speakerArrowImg from '../../images/down-arrow.png';

const UselessContainer = styled.div`
	padding: 0;
	margin: 0;

.speaker {
  padding: 25px;
  border-bottom: 3px solid white;
  transition: height 0.5s;
}
.rich-shepherd {
  border-top: 3px solid white;
}
.speaker-title {
  height: 40px;
  cursor: pointer;
}
.breakout-title {
  margin: 45px auto 20px;
  letter-spacing: 3px;
  font-size: 1.3em;
}
.speaker-pic {
  height: 55px;
  width: auto;
  margin-left: 0;
}
.speaker-title div {
  width: 60%;
}
.speaker-title div h4 {
  font-size: 1.18em;
  text-align: center;
  margin: 5px auto;
  letter-spacing: 3px;
}
.right-arrow {
  height: 18px;
  width: auto;
  padding: auto 0px;
  margin-right: 0px;
  transform: ${props => props.bioIsShowing ? 'rotate(0deg)' : 'rotate(-90deg)' };
  transition: transform 0.5s;
}
.bio {
  font-size: 1.1em;
  text-align: left;
  letter-spacing: 3px;
  padding: 15px 5%;
  max-width: 900px;
  display: ${props => props.bioIsShowing ? 'block' : 'none' };
}
@media (min-width: 480px) {
	.speaker {
    height: 60px;
  }
  .speaker-pic {
    height: 75px;
    width: auto;
  }

  .speaker-title div h4 {
    font-size: 1.5em;
  }

  .speaker-title {
    height: 65px;
  }
}
@media (min-width: 724px) {
	.speaker {
    height: 75px;
  }
  .speaker-title {
    height: 75px;
  }
  .speaker-title div h4 {
    font-size: 1.78em;
  }
  .speaker-pic {
    height: 105px;
    width: auto;
  }
  .right-arrow {
    height: 28px;
    width: auto;
  }
}
`;

// NEXT TASK:
// create styled components for these tags
// and base the styles on the prop {bioIsShowing}

class SpeakerBio extends React.Component {

   render() {
      const classNames1 = `${this.props.speaker.className1} speaker`;
      const classNames2 = `${this.props.speaker.firstName}-title speaker-title`;
      const altText = `Portrait of ${this.props.speaker.firstName} ${this.props.speaker.lastName}`;

      return (
         <UselessContainer bioIsShowing={this.props.bioIsShowing}>
            <div id={this.props.speaker.idName} className={classNames1} style={{height: 'auto'}} onClick={this.props.action} >
               <div className={classNames2}>
                  <img className="speaker-pic" src={require(`../../images/summit-photos/edited/${this.props.speaker.photoFileName}`)} alt={altText} />
                  <div>
                     <h4>{this.props.speaker.firstName} {this.props.speaker.lastName}</h4>
                  </div>
                  <img className="right-arrow" src={speakerArrowImg} alt="Arrow icon" />
               </div>
               <p className="bio">
                  {this.props.speaker.biography}
               </p>
            </div>
         </UselessContainer>
      );
   }
}

export default SpeakerBio;
