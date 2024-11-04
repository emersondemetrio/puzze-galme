import { useEffect, useState } from 'react';

export type PressableKeys =
	| 'ArrowLeft'
	| 'ArrowRight'
	| 'ArrowUp'
	| 'ArrowDown';

const enum KeyHandler {
	ArrowLeft,
	ArrowRight,
	ArrowUp,
	ArrowDown,
}

export const useKeyPress = () => {
	const [keyPressed, setKeyPressed] = useState<any>();

	const handler = (e: KeyboardEvent) => {
		const pressedKey = e.key as PressableKeys;

		if (KeyHandler.hasOwnProperty(pressedKey)) {
			setKeyPressed(pressedKey);
		}
	};

	useEffect(() => {
		document.body.addEventListener('keydown', handler);

		return () => {
			document.body.addEventListener('keydown', handler);
		};
	}, []);

	return keyPressed;
};
