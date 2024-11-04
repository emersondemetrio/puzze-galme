import Image from 'next/image';
import styled from 'styled-components';

export const Loading = () => (
	<LoadingContainer id="loading">
		Loading tiles...
		<Image width={100} height={100} src="/loading.svg" alt="loading" />
	</LoadingContainer>
);

const LoadingContainer = styled.div`
	width: 430px;
	height: 430px;
	padding: 4px;
	flex-direction: column;
	background-color: #000;
	display: flex;
	justify-content: center;
	align-items: center;
	color: aliceblue;

	& img {
		margin: 20px;
		display: inline-block;
	}
`;
