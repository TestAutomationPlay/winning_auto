
import { HomePage } from '@pages/home-page';

describe('Winning App automation Test', () => {

    // Visit the home page and verify wther the page is loaded successfully
    it('Verify home page loaded completely while navigating to home page url ', () => {

        new HomePage()
            .verifyPageLoaded()
            .verifyTitle()
            
    });

    // Search a  prodcut and see all the searched products are displayed
    it('Search a product and verfify it results all the prodcut matching', () => {

        new HomePage()
            .open()
            .verifyTitle()
            .search('Overnight Duffle')
            .verifyStubbedAutoCompleteSearch(3,'Overnight Duffle bag')
            .verifySearchResult(3,'Duffle');
    });

    // An e2e test that select the prodcut and add to the cart and validate cart item and selected products are the same
    it('End to end test to add prodcut to cart and verify cart has selected item', () => {

        new HomePage()
            .open()
            .PlaceAnOrder()
            .verifySuccessCartMessage('You added Radiant Tee to your shopping cart.')
            .navigateToCart()
            .verifyProductName('Radiant Tee')
            .verifyProductPrice('$22.00')
            .verifyProductQuantity('1')
    });

    
})
