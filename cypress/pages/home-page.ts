
import { pageProps } from "@pages/home-page-props";

export class HomePage {

    constructor() {
        
    }
/*Action function */ 
    open() {
        cy.visit('/');
        return this;
    }

    // place an order by selecting size, color and quantty
    PlaceAnOrder(){
        cy.get(pageProps.prodcutRadiant)
        .click()
        cy.get(pageProps.prodcutSizeM).
        click()
        cy.get(pageProps.prodcutColor('Orange')).
        click()
        cy.get(pageProps.AddCartButton)
        .click()
        return this;
    }

    navigateToCart(){
        cy.get(pageProps.NavigateCart)
        .click()
        return this;
    }

    // Search prodcut
    search(text: string) {
        //  Intercept network requests
         cy.intercept('GET', '/search/ajax/suggest/*',{fixture:'stubbedData.json'}).as('apiAtoSuggesRequests');
            
         // Visit the home page and search a prodcut
        cy.get(pageProps.search).type(text)

        // Wait for the network requests to be completed
        cy.get('@apiAtoSuggesRequests')
        cy.wait(1500)
        cy.get(pageProps.search).type(`{backspace}`)
        return this;
    }


    /*--------Assertion function------------------ */ 
    verifyProductName(productName:string) {
        cy.get(pageProps.productNameRadiantTee)
        .should('have.text', productName)
        return this;
    }
    
    verifyProductPrice(productPrice:string){
        cy.get(pageProps.productPriceCart)
        .should('contain', productPrice)
        return this;
    }

    verifyProductQuantity(productQuantity:string){
        cy.get(pageProps.productQuantityCart)
        .should('contain', productQuantity)
        return this
    }

    verifyTitle() {
        cy.title().should('include', 'Home Page')
        return this;

    }

    verifySuccessCartMessage(addCartSuccessMeeage:string){
        cy.get(pageProps.addTocartSuccessMessage)
        .should('contain',addCartSuccessMeeage)
        return this;
    }

    verifyPageLoaded(){
        // Intercept network requests
        cy.intercept('GET', '**/*').as('pageLoadRequst');
        
         // Visit the page
         cy.visit('/');

        // Wait for the network requests to be completed
        cy.wait('@pageLoadRequst').then((interception) => {
            
            // Access the intercepted response
            const response = interception.response;
    
            if(response){
                // assert the status code and the body message stubbed
                expect(response.statusCode).to.equal(200);
                }
               
              });

        // assertions to ensure the page is completely loaded succesfully
        cy.get('.content-heading').should('exist');
        cy.get('.page-footer').should('exist')
        cy.get('.page-header').should('exist')
        cy.get('.products-grid.grid').should('exist')
        return this;
    }
    verifySearchResult(productCount:number,searchedProductName:string){
        
        // assert the stubed data being rendered in the page
        cy.get(pageProps.productSearchResult)
        .find('li')
        .should('have.length', productCount)  
        .each(($li) => {
          // Assert on the text content of each list item
        cy.wrap($li).should('contain.text', searchedProductName);
        });
        return this
    }

    verifyStubbedAutoCompleteSearch(productCount:number,autoSearchText:string){

            // assert the stubed data being rendered in the page
            cy.get(pageProps.searchAutoComplete)
            .find('li')
            .should('have.length', productCount)  
            .each(($li) => {
              // Assert on the text content of each list item
              cy.wrap($li).should('contain.text', autoSearchText);
            });
            cy.get(pageProps.search).type(`{enter}`)

            return this;
    }
}