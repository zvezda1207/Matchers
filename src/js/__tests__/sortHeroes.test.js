/* global describe, test, expect */
import sortHeroes from '../sortHeroes';

describe ('sortHeroes', () => {
    test('should sort heroes by health in descending order', () => {
        const heroes = [
            {name: 'мечник', health: 10},
            {name: 'маг', health: 100},
            {name: 'лучник', health: 80},
          ];
        const sortedHeroes = sortHeroes(heroes);
        expect(sortedHeroes).toEqual([
            {name: 'маг', health: 100},
            {name: 'лучник', health: 80},
            {name: 'мечник', health: 10},
          ]);
    }); 

    test('should return an empty array when input is an empty array', () => {
        expect([]).toEqual([]);
    });

    test('should return the same array if it is already sorted', () => {
        const heroes = [
            {name: 'маг', health: 100},
            {name: 'лучник', health: 80},
            {name: 'мечник', health: 10},
          ];
        expect(sortHeroes(heroes)).toEqual(heroes);
    });
    test('should maintain the order for heroes with equal health', () => {
        const heroes = [
            {name: 'герой1', health: 50},
            {name: 'герой2', health: 50},
        ];
        const sortedHeroes = sortHeroes(heroes);
        expect(sortedHeroes).toEqual(heroes);
    })
});