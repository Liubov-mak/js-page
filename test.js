import { assert } from 'chai';
import createCalendar from './src/modules/calendar';

describe('функция calc', () => {
	it('должен выводится календарь', () => {
		assert(createCalendar(getDate));
	});
});
