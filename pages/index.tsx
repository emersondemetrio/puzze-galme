import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { generateRandomTable } from './game/utils';

const Loading = () => {
	return (
		<div className="loading" id="loading">
			Loading tiles...
			<img src="loading.svg" />
		</div>
	);
};

const Tile = ({ x, y, value }: any) => {
	return (
		<div className="tile center" data-x={x} data-y={y} data-value={value}>
			1
		</div>
	);
};

const table = generateRandomTable();

const Home: NextPage = () => {
	return (
		<div className="center">
			<div className={styles.container}>
				<div className="title-container">
					Sort Puzzle game
					<button className="restart" id="restart">
						Restart
					</button>
				</div>
				<Loading />
				<div className="container center hide" id="container">
					{table.map((index) => {
						return <Tile x="" y="" value="" key={index} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default Home;
