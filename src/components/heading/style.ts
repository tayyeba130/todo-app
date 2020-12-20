import styled from 'styled-components/macro';

const HeadingStyle = styled.header`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	h1 {
		color: #fff;
		letter-spacing: 10px;
	}
	button {
		all: unset;
		cursor: pointer;
	}
`;

export default HeadingStyle;
