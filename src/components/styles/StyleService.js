import styled from 'styled-components';

export const ServiceContainer = styled.div`
	padding-bottom: 3rem;
	font-family: 'Montserrat', sans-serif; 
	
	img {
		height: 140px;
		margin-left: 100px;
	}

	p {
			margin: 10px;
			line-height: 1.6;
		}
		
	.section-title {
		width: 500px;
		p {
			margin: 1.4rem 0;
			line-height: 1.6;
		}
		
	}
	
	.service-box {
		.content {
			padding: 0.4rem 1rem;
			.title {
				margin-top: 1.4rem;
				img {
					height: 25px;
					margin-left: 40px;
				}
				h5 {
					margin-left: 15px;
				}
			}
			p {
				margin: 10px;
			}
			
			button {
				margin: 10px;
				font-size: 1.0rem;
				padding: 0;
				color: #FCB140;
				.arrow {
					color: #7ac948;
					margin-left: 0.8rem;
					font-size: 1rem;
				}
			}
		}
	}
`;
