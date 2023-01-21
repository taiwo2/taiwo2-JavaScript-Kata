import  pkg from 'chai';
import { addSpecialOffer,getTotalItems } from '../productPrice.js';
const { expect } = pkg;

describe('the special offer calculator', function() {
	it('should allow you to add an offer', function() {
		expect(addSpecialOffer).to.exist;
	});

	it('should allow you to get an offer totalItem', function() {
		expect(getTotalItems).to.exist;
	});

	describe('when there are no offer', function() {
		it('should calculate offer price as 0 and remaining untotal items as quantity passed in', function() {
			let result = getTotalItems('A', 4);
			expect(result).to.eql({
				totalItemOffer:0,
				unMatchedItems:4
			});
		});
	});

	describe('when there is a matching offer for 3 A ', function() {
		it('should calculate offer price and remaining untotal items', function() {
			addSpecialOffer('A',3,130);
			let result = getTotalItems('A', 4);
			expect(result).to.eql({
				totalItemOffer:130,
				unMatchedItems:1
			});
		});
	});

	describe('when there is a matching offer for 2 B = 45', function() {
		it('should calculate offer price and remaining untotal items', function() {
			addSpecialOffer('B',2,45);
			let result = getTotalItems('B', 2);
			expect(result).to.eql({
				totalItemOffer:45,
				unMatchedItems:0
			});
		});
	});

	describe('when there is a matching offer for 2 B', function() {
		it('should calculate offer price and remaining untotalItemled items', function() {
			addSpecialOffer('B',2,45);
			let result = getTotalItems('B', 3);
			expect(result).to.eql({
				totalItemOffer:45,
				unMatchedItems:1
			});
		});
	});
});