// Short bullet points on testing strategy
// ---------------------------------------
// 1. get all <input> elements
// 2. iterate over them and type 9
// 3. match the result with the exptected string


describe('Test Suite Name', function(){
    it('Test 1: Verify Your Account', function(){
        // Launch the webpage
        cy.visit("https://qaplayground.dev/apps/verify-account/")
 
        // iterate over web elements
        cy.get('input.code').each(($x) => {
            // wrap this element so we can
            // use cypress commands on it
            cy.wrap($x).type("9")
        })
 
        // assertion
        // check if we got a "success" message
        cy.xpath('//small[@class="info success"]').then( (x) => {
            let expectedText = "Success"
            let displayedText = x.text()
 
            assert.equal(expectedText, displayedText)
        })
    })
})
