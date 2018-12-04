import React from 'react';
import Helmet from 'react-helmet';

// import Normalize for use on each page
import './normalize.css';

class Head extends React.Component {
	render() {
		return (
			<Helmet>
				<title>{this.props.title}</title>
				<link rel="stylesheet" href="https://use.typekit.net/jdf0dzq.css" />
			</Helmet>
		);
	}
}

export default Head;
