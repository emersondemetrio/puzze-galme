import { AvailableAttributeKey, Position } from './types';
import { MAX_XY, MIN_XY } from './utils/constants';

export const exists = ({ x, y }: Position) =>
	x <= MAX_XY && y <= MAX_XY && x >= MIN_XY && y >= MIN_XY;

export const getNextLeft = ({ x, y }: Position) => ({
	x: x - 1,
	y,
});

export const getNextRight = ({ x, y }: Position) => ({
	x: x + 1,
	y,
});

export const getNextUp = ({ x, y }: Position) => ({
	x,
	y: y - 1,
});

export const getNextDown = ({ x, y }: Position) => ({
	x,
	y: y + 1,
});

export const getXYOf = (e: Element, key: string) =>
	getAttribute(e, `data-${key}` as AvailableAttributeKey);

export const updateAttribute = (
	e: Element,
	key: AvailableAttributeKey,
	value: string
) => e.setAttribute(`data-${key}`, value)!;

export const getAttribute = (e: Element, key: AvailableAttributeKey) =>
	e.getAttribute(`data-${key}`)!;
