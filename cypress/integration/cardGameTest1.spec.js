describe('Card Test', () =>{

    it('Card test', () =>{
        cy.request('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        .its('body')
        .as('deck')
        .then((deck)=>{
            cy.request('https://deckofcardsapi.com/api/deck/'+deck.deck_id+'/draw/?count=3')
            .its('body')
            .as('cardsForPileOne')
            .then((cardsForPileOne) => {
                for (let i = 0; i < cardsForPileOne.length; i++){
                    cy.request('https://deckofcardsapi.com/api/deck/'+deck.deck_id+'/pile/Pile1/add/?cards='+cardsForPileOne.cards[i].code)
                }
                cy.wait(6000)
                cy.request('https://deckofcardsapi.com/api/deck/'+deck.deck_id+'/pile/Pile1/list/')
            })
        
        })
        .then((deck)=>{
            cy.request('https://deckofcardsapi.com/api/deck/'+deck.deck_id+'/draw/?count=3')
            .its('body')
            .as('cardsForPileTwo')
            .then((cardsForPileTwo) => {
                for (let i = 0; i < cardsForPileTwo.length; i++){
                    cy.request('https://deckofcardsapi.com/api/deck/'+deck.deck_id+'/pile/Pile2/add/?cards='+cardsForPileTwo.cards[i].code)
                }
                cy.wait(6000)
                cy.request('https://deckofcardsapi.com/api/deck/'+deck.deck_id+'/pile/Pile2/list/')

            })
        
        })
        

    })
})