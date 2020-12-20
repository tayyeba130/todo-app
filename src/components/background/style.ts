import styled from 'styled-components/macro';

const BackgroundStyle = styled.div`
	position: relative;
	img {
		position: absolute;
		width: 100%;
		top: 0;
		right: 0;
		left: 0;
		height: auto;
		@media (min-width: 576px) {
			min-height: 300px;
		}
	}
`;

export default BackgroundStyle;
