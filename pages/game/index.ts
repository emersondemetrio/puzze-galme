import {
	AvailableKeyHandlers,
	FullElement,
	Position,
	PressableKeys,
} from './types';
import {
	exists,
	getNextDown,
	getNextLeft,
	getNextRight,
	getNextUp,
	getXYOf,
	updateAttribute,
} from './utils';
import { Keys } from './utils/constants';

alert(1);

const body = document.querySelector('body');

const getEmptyTile = (): Element =>
	document.querySelectorAll('[data-value="empty"]')[0] as Element;

const swapEmptyWith = (nextKey: Keys) => {
	const nextKeyCoordinates = getElementsAroundEmptyTile()[nextKey]!;

	if (exists(nextKeyCoordinates)) {
		const emptyTile = getEmptyTile();

		const movingTile = getFullElementFromCoordinates({
			x: nextKeyCoordinates.x,
			y: nextKeyCoordinates.y,
		});

		updateAttribute(emptyTile, 'data-value', movingTile.tileValue);
		updateAttribute(movingTile.element, 'data-value', 'empty');

		emptyTile.innerHTML = `${movingTile.tileValue}`;
		movingTile.element.innerHTML = '';

		return;
	}

	console.log('Invalid move', nextKeyCoordinates);
};

const getElementsAroundEmptyTile = (): { [key: string]: Position } => {
	const emptyTile = getEmptyTile();

	const x = parseInt(getXYOf(emptyTile, 'x'));
	const y = parseInt(getXYOf(emptyTile, 'y'));

	const position = { x, y };

	const nextLeftPosition = getNextLeft(position);
	const nextRightPosition = getNextRight(position);
	const nextUpPosition = getNextUp(position);
	const nextDownPosition = getNextDown(position);

	return {
		nextLeftPosition,
		nextRightPosition,
		nextUpPosition,
		nextDownPosition,
	};
};

const getFullElementFromCoordinates = ({ x, y }: Position): FullElement => {
	const elementSelector = `[data-x="${x}"][data-y="${y}"]`;
	const element = document.querySelector(elementSelector) as Element;

	return {
		element,
		tileValue: element.getAttribute('data-value')!,
	};
};

const KeyHandler: AvailableKeyHandlers = {
	ArrowLeft: () => swapEmptyWith(Keys.RIGHT),
	ArrowRight: () => swapEmptyWith(Keys.LEFT),
	ArrowUp: () => swapEmptyWith(Keys.DOWN),
	ArrowDown: () => swapEmptyWith(Keys.UP),
};

body!.addEventListener('keydown', (e) => {
	const pressedKey = e.key as PressableKeys;

	if (KeyHandler.hasOwnProperty(pressedKey)) {
		KeyHandler[pressedKey]();
	}
});
