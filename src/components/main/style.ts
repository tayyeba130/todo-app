import styled from 'styled-components/macro';

const MainStyle = styled.div`
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
			top: 10%;
		}
	}
`;

export default MainStyle;
