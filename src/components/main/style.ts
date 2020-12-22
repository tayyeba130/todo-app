import styled from 'styled-components/macro';
import { Theme } from '../../contexts/ThemeContext';

const MainStyle = styled.div`
	height: 100vh;
	background: ${(props) =>
		props.theme === Theme.Light ? '#FAFAFA' : '#181823'};
	transition: background 300ms ease-in-out;
	.content {
		position: absolute;
		width: 100%;
		max-width: 375px;
		padding: 0 30px;
		left: 0;
		right: 0;
		margin-left: auto;
		margin-right: auto;
		top: 5%;
		@media (min-width: 576px) {
			top: 17vh;
			max-width: 540px;
			padding: 0;
		}
		@media (min-width: 1350px) {
			top: 20vh;
		}
	}
`;

export default MainStyle;
