import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Loading } from './game/components/loading/loading';
import { GameTile, Tile } from './game/components/tile/tile';
import { generateRandomBoard } from './game/utils/utils';
import { useKeyPress } from './game/hooks/use-key-press';

const Game = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [table, setTable] = useState<Array<GameTile>>([]);

	const restartGame = async () => {
		const newBoard = await generateRandomBoard();
		setTable(newBoard);

		setTimeout(() => {
			setIsLoading(false);
		}, 1550);
	};

	useEffect(() => {
		restartGame();
	}, []);

	const x = useKeyPress();

	if (x) {
		console.log('x', x);
	} else {
		console.log('nop');
	}

	return (
		<GameContainer>
			<InnerContainer>
				<HeadContainer>
					Sort Puzzle game
					<RestartButton
						onClick={restartGame}
						id="restart"
						disabled={isLoading}
					>
						Restart
					</RestartButton>
				</HeadContainer>

				{isLoading && <Loading />}

				{!isLoading && (
					<BoardContainer>
						{table.map(({ x, y, value }) => (
							<Tile
								x={x}
								y={y}
								value={value}
								key={`${x}-${y}-${value}`}
							/>
						))}
					</BoardContainer>
				)}
			</InnerContainer>
		</GameContainer>
	);
};

const GameContainer = styled.div`
	margin-top: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

const HeadContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const InnerContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

const BoardContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	border: solid 1px #000;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 430px;
	height: 430px;
`;

const RestartButton = styled.button`
	width: 100px;
	padding: 10px;
	color: #ddd;
`;

export default Game;
