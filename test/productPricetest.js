import  pkg from 'chai';

import {calculate,addSpecialOffer} from '../productPrice.js';
const {expect} = pkg
describe('calculate prices', function() {
	beforeEach(function() {
		addSpecialOffer('A',3,130);
		addSpecialOffer('B',2,45);
		addSpecialOffer('C',3,60)
	});

	describe('A', function() {
		it('should scan item A and add price 50', function() {
			expect(calculate('A', 1)).to.equal(50);
		});

		it('should scan two A and total 100', function() {
			expect(calculate('A', 2)).to.equal(100);
		});

		it('should scan three A and total 130', function() {
			expect(calculate('A', 3)).to.equal(130);
		});

		it('should scan four A and total 180', function() {
			expect(calculate('A', 4)).to.equal(180);
		});
	});

	describe('B', function() {
		it('should scan item B and add price 30', function() {
			expect(calculate('B', 1)).to.equal(30);
		});

		it('should scan two B and total 45', function() {
			expect(calculate('B', 2)).to.equal(45);
		});

		it('should scan three B and total 75', function() {
			expect(calculate('B', 3)).to.equal(75);
		});

		it('should scan four B and total 90', function() {
			expect(calculate('B', 4)).to.equal(90);
		});
	});

	describe('C', function() {
		it('should scan item C and add price 20', function() {
			expect(calculate('C', 1)).to.equal(20);
		});

		it('should scan two C and total 40', function() {
			expect(calculate('C', 2)).to.equal(40);
		});

		it('should scan three C and total 60', function() {
			expect(calculate('C', 3)).to.equal(60);
		});

		it('should scan four C and total 80', function() {
			expect(calculate('C', 4)).to.equal(80);
		});
	});

	describe('D', function() {
		it('should scan item D and add price 15', function() {
			expect(calculate('D', 1)).to.equal(15);
		});

		it('should scan two D and total 30', function() {
			expect(calculate('D', 2)).to.equal(30);
		});

		it('should scan three D and total 45', function() {
			expect(calculate('D', 3)).to.equal(45);
		});

		it('should scan four D and total 60', function() {
			expect(calculate('D', 4)).to.equal(60);
		});
	});
});