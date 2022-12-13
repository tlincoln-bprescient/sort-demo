import { random, swap, partition, QuickSort } from './quicksort';

describe('random', () => {
    it('returns a integer between min and max (inclusive)', () => {
        const list = Array.from({length: 1000}, () => random(10,20));
        list.forEach(value => {
            expect(value).toBeGreaterThanOrEqual(10);
            expect(value).toBeLessThanOrEqual(20);
        });
    });
});

describe('swap', () => {
    it('switches list values by index', () => {
        const list = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

        swap(list, 3, 7);
        expect(list[7]).toEqual(3);
        expect(list[3]).toEqual(7);

        swap(list, 0, 9);
        expect(list[0]).toEqual(9);
        expect(list[9]).toEqual(0);

        swap(list, 6, 6);
        expect(list[6]).toEqual(6);
    });
});

describe('partition', () => {
    it('partitions on the pivot point (pivot = 5)', () => {
        const list = [ 3, 9, 7, 5, 8, 1, 2, 0, 6, 4];
        const index = 3;
        const value = list[index]; // = 5
        partition(list, 0, 9, 3);

        // indexes below the pivot should be less than or equal to the index value
        expect(list[0]).toBeLessThanOrEqual(value);
        expect(list[1]).toBeLessThanOrEqual(value);
        expect(list[2]).toBeLessThanOrEqual(value);
        expect(list[3]).toBeLessThanOrEqual(value);
        expect(list[4]).toBeLessThanOrEqual(value);

        // indexes above the pivot should be greater than or equal to the index value
        expect(list[5]).toBeGreaterThanOrEqual(value);
        expect(list[6]).toBeGreaterThanOrEqual(value);
        expect(list[7]).toBeGreaterThanOrEqual(value);
        expect(list[8]).toBeGreaterThanOrEqual(value);
        expect(list[9]).toBeGreaterThanOrEqual(value);
    });

    it('partitions on an pivot point', () => {
        const list = [ 3, 9, 7, 5, 8, 1, 2, 0, 6, 4];

        // test partitioning on each index in the array
        list.forEach((item, index) => {
            const value = list[index]; // = 8
            const pivot = partition(list, 0, 9, index);

            // indexes below the pivot should be less than or equal to the index value
            for (let i = 0; i <= pivot; i ++) {
                expect(pivot).toBeLessThanOrEqual(value);
            }

            // indexes above the pivot should be greater than or equal to the index value
            for (let i = pivot; i < pivot; i ++) {
                expect(pivot).toBeGreaterThanOrEqual(value);
            }
        })
    });

    // Array(10) [3,4,7,5,8,1,2,0,6,9] [0,8]
    it('partitions on an pivot point', () => {
        const list = [3, 4, 7, 5, 8, 1, 2, 0, 6, 9];
        const index = Math.floor((0 + 8) / 2);
        const value = list[index];
        const pivot = partition(list, 0, 8, index);

        // indexes below the pivot should be less than or equal to the index value
        for (let i = 0; i <= pivot; i ++) {
            expect(pivot).toBeLessThanOrEqual(value);
        }

        // indexes above the pivot should be greater than or equal to the index value
        for (let i = pivot; i < pivot; i ++) {
            expect(pivot).toBeGreaterThanOrEqual(value);
        }
    });
});


describe('QuickSort', () => {
    it('sorts an array of numbers', () => {
        const list = [ 3, 9, 7, 5, 8, 1, 2, 0, 6, 4];
        const quicksort = QuickSort(list);
        const result = quicksort.sort();

        // indexes below the pivot should be less than or equal to the index value
        expect(result[0]).toEqual(0);
        expect(result[1]).toEqual(1);
        expect(result[2]).toEqual(2);
        expect(result[3]).toEqual(3);
        expect(result[4]).toEqual(4);
        expect(result[5]).toEqual(5);
        expect(result[6]).toEqual(6);
        expect(result[7]).toEqual(7);
        expect(result[8]).toEqual(8);
        expect(result[9]).toEqual(9);
    });
});
