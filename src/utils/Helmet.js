import React from 'react';
import Helmet from 'react-helmet';

class Meta extends React.Component {
	render() {
		return (
			<Helmet>
				<title>{this.props.title}</title>
				<link rel="stylesheet" href="https://use.typekit.net/jdf0dzq.css" />
				<link rel="stylesheet" href="normalize.css" />
			</Helmet>
		);
	}
}

export default Meta;
