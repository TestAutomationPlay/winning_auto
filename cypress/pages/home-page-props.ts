export class pageProps{
    static prodcutRadiant:any = 'img[alt="Radiant Tee"]'
    static prodcutSizeM:any = 'div[option-id="168"]'
    static prodcutColorOrage:any = 'div[option-id="56"]'
    static AddCartButton:any = '#product-addtocart-button'
    static NavigateCart:string = 'a.action.showcart'
    static search:string = '#search'
    static productNameRadiantTee:string = '.product-item-name a[href*="radiant-tee"]'
    static productPriceCart:string = '.product-item-pricing .minicart-price'
    static productQuantityCart:string = '.items-total .count'
    static addTocartSuccessMessage:string = '[data-ui-id="message-success"]'
    static productSearchResult:string = 'ol.products.list.items.product-items'
    static searchAutoComplete:string = '#search_autocomplete'

   //  Based on the color selector is defined here, the same way it be enhanced with size as well
    static prodcutColor(selectedColor:string):string {
        let prodcutColorValue:number = 0
       switch(selectedColor){
        case 'Orange':
          prodcutColorValue = 56;
           break
        case 'Blue':
           prodcutColorValue = 50
           break
        case 'Yellow':
          prodcutColorValue = 60
          break
       }
        return `div[option-id=${prodcutColorValue}]`
      }

 
}