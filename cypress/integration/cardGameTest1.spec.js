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
                for (let i = 0; i < cardsForPileOne.cards.length; i++){
                    cy.request('https://deckofcardsapi.com/api/deck/'+deck.deck_id+'/pile/Pile1/add/?cards='+cardsForPileOne.cards[i].code)
                    console.log(i)
                }
                cy.request('https://deckofcardsapi.com/api/deck/'+deck.deck_id+'/pile/Pile1/list/')
                .its('body')
                .as('pile1')
                .then((pile1) => {
                    for (let i = 0; i < cardsForPileOne.cards.length; i++){
                        expect(pile1.piles.Pile1.cards[i].code).to.contain(cardsForPileOne.cards[i].code)
                    }
                })
            })
        
        })

        cy.request('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        .its('body')
        .as('deck')
        .then((deck)=>{
            cy.request('https://deckofcardsapi.com/api/deck/'+deck.deck_id+'/draw/?count=3')
            .its('body')
            .as('cardsForPileTwo')
            .then((cardsForPileTwo) => {
                for (let i = 0; i < cardsForPileTwo.cards.length; i++){
                    cy.request('https://deckofcardsapi.com/api/deck/'+deck.deck_id+'/pile/Pile2/add/?cards='+cardsForPileTwo.cards[i].code)
                }
                cy.request('https://deckofcardsapi.com/api/deck/'+deck.deck_id+'/pile/Pile2/list/')
                .its('body')
                .as('pile2')
                .then((pile2) => {
                    for (let i = 0; i < cardsForPileTwo.cards.length; i++){
                        expect(pile2.piles.Pile2.cards[i].code).to.contain(cardsForPileTwo.cards[i].code)
                    }
                })


            })
        
        })
        

    })
})