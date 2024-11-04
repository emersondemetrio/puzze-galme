import styled from 'styled-components';

export type GameTile = {
	x: number;
	y: number;
	value: number | string;
};

export const Tile = ({ x, y, value }: GameTile) => {
	return (
		<TileContainer data-x={x} data-y={y} data-value={value}>
			{`${value}`}
		</TileContainer>
	);
};

const TileContainer = styled.div<{}>`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 100px;
	height: 100px;

	margin: 1px;
	border: solid 1px red;
	align-items: center;
	font-size: 20px;

	transition: width 2s;
`;
