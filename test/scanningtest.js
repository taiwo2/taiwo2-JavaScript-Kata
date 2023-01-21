import  pkg  from 'chai';
import Checkout from '../checkout.js';
import { addSpecialOffer,getTotalItems } from '../productPrice.js';

const {expect }= pkg
describe('scanning', function() {
	let cart;

	beforeEach(function() {
		addSpecialOffer('A',3,130);
		addSpecialOffer('B',2,45);
		cart =  new Checkout();
	});

	it('should have a total function', function() {
		expect(cart.totalItem).to.exist;
	});

	it('should have a total of zero if the basket is empty', function() {
		expect(cart.totalItem()).to.equal(0);
	});

	it('should be able to scan an item', function() {
		expect(cart.scanItems).to.exist;
	});

	it('can scan in any order', function() {
		cart.scanItems('B');
		cart.scanItems('A');
		cart.scanItems('B');
		expect(cart.totalItem()).to.equal(95);
	});

	describe('A', function() {
		it('should scan A and add price 50', function() {
			cart.scanItems('A');
			expect(cart.totalItem()).to.equal(50);
		});

		it('should scan two A and total 100', function() {
			cart.scanItems('A');
			cart.scanItems('A');
			expect(cart.totalItem()).to.equal(100);
		});

		it('should scan three A and total 130', function() {
			cart.scanItems('A');
			cart.scanItems('A');
			cart.scanItems('A');
			expect(cart.totalItem()).to.equal(130);
		});

		it('should scan four A and total 180', function() {
			cart.scanItems('A');
			cart.scanItems('A');
			cart.scanItems('A');
			cart.scanItems('A');
			expect(cart.totalItem()).to.equal(180);
		});
	});

	describe('B', function() {
		it('should scan item B and add price 30', function() {
			cart.scanItems('B');
			expect(cart.totalItem()).to.equal(30);
		});

		it('should scan two B and total 45', function() {
			cart.scanItems('B');
			cart.scanItems('B');
			expect(cart.totalItem()).to.equal(45);
		});

		it('should scan three B and total 75', function() {
			cart.scanItems('B');
			cart.scanItems('B');
			cart.scanItems('B');
			expect(cart.totalItem()).to.equal(75);
		});

		it('should scan four B and total 90', function() {
			cart.scanItems('B');
			cart.scanItems('B');
			cart.scanItems('B');
			cart.scanItems('B');
			expect(cart.totalItem()).to.equal(90);
		});
	});

	describe('C', function() {
		it('should scan item C and add price 20', function() {
			cart.scanItems('C');
			expect(cart.totalItem()).to.equal(20);
		});

		it('should scan two C and total 40', function() {
			cart.scanItems('C');
			cart.scanItems('C');
			expect(cart.totalItem()).to.equal(40);
		});

		it('should scan three C and total 60', function() {
			cart.scanItems('C');
			cart.scanItems('C');
			cart.scanItems('C');
			expect(cart.totalItem()).to.equal(60);
		});

		it('should scan four C and total 80', function() {
			cart.scanItems('C');
			cart.scanItems('C');
			cart.scanItems('C');
			cart.scanItems('C');
			expect(cart.totalItem()).to.equal(80);
		});
	});

	describe('D', function() {
		it('should scan item D and add price 15', function() {
			cart.scanItems('D');
			expect(cart.totalItem()).to.equal(15);
		});

		it('should scan two D and total 30', function() {
			cart.scanItems('D');
			cart.scanItems('D');
			expect(cart.totalItem()).to.equal(30);
		});

		it('should scan three D and total 45', function() {
			cart.scanItems('D');
			cart.scanItems('D');
			cart.scanItems('D');
			expect(cart.totalItem()).to.equal(45);
		});

		it('should scan four D and total 60', function() {
			cart.scanItems('D');
			cart.scanItems('D');
			cart.scanItems('D');
			cart.scanItems('D');
			expect(cart.totalItem()).to.equal(60);
		});
	});
});