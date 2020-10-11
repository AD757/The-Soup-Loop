import styled from 'styled-components';
import bg from '../../Image/bg.png';

export const HeroContainer = styled.div`
	font-family: 'Bebas Neue', Cursive, Verdana, sans-serif;
	background: url(${bg}) center/cover;
	position: relative;
	height: 500px;
	.hero-content {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		h1 {
			letter-spacing: 2px;
		}
		form {
			.form-group {
				position: relative;
				.form-control {
					border-radius: 30px;
				}
				button {
					font-family: 'Montserrat', sans-serif;
					padding: 0.3rem 1.2rem;
					background-color: #FCB140;
					border-radius: 30px;
					color: #ffffff;
					position: absolute;
					top: 1px;
					right: 15px;
				}
			}
		}
	}
`;
