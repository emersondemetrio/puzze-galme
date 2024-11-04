import '../styles/globals.css';
import type { AppProps } from 'next/app';

const PuzzleGame = ({ Component, pageProps }: AppProps) => {
	return <Component {...pageProps} />;
};

export default PuzzleGame;
