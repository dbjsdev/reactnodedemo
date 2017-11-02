import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Authentication from '../containers/Authentication';

class Layout extends Component {
	render() {
	return (
		<div>
			<div>
				<h1>MadOwlNews.com - Breaking news about Mad Owls</h1>
			</div>
			<div>
				<Authentication />
			</div>
			<div>
				<ul>
					<li><Link to={'/'}>News</Link></li>
					<li><Link to={'/about'}>About</Link></li>
					<li><Link to={'/submit'}>Submit Story</Link></li>
				</ul>
			</div>			
			<div>
				{ this.props.children }
			</div>
		</div>
		);
	}
}

export default Layout;