const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

	describe('#add', () => {
		it('should add two numbers', () => {
        const result = utils.add(33, 11);

        expect(result).toBe(44).toBeA('number');
    });

    it('should async add two numbers', (done) => {
        utils.asyncAdd(4, 3, (sum) => {
            expect(sum).toBe(7).toBeA('number');
            done();
        });
    });
});

    it('should square a number', () => {
        const result = utils.square(4);

        expect(result).toBe(16).toBeA('number');
    });

    it('should async square a number', (done) => {
        utils.asyncSquare(4, (total) => {
            expect(total).toBe(16).toBeA('number');
            done();
        });
    });
});



it('should expect some values', () => {
    // expect({name: 'Brandon'}).toEqual({name: 'Brandon'});
    // expect([2, 3, 4]).toInclude(2);
    // expect([2, 3, 4]).toExclude(1);
    expect({
        name: 'Brandon',
        age: 18,
        location: 'Philadelphia'
    }).toInclude({
        age: 18
    })
});

it('should verify first and last names are set', () => {
    const user = {
        age: 18,
        hobby: 'programming'
    };
    const result = utils.setName(user, 'Brandon Kirk');
    expect(result).toInclude({
        firstName: 'Brandon',
        lastName: 'Kirk'
    });
});