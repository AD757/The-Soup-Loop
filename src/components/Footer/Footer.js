import React from 'react';
import { Container } from '../styles/StyleFooter';

const Footer = () => {
	return (
		<Container>
			<div className="container">
				<div className="row primary">
					<div className="col-lg-8">
						<p>The Soup Loop &copy; 2020 | AD</p>
					</div>
					<div className="col-lg">
						<ul className="nav">
							<li className="nav-item">Privacy Policy</li>
							<li className="nav-item">Terms of Use</li>
							<li className="nav-item">Pricing</li>
						</ul>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Footer;
