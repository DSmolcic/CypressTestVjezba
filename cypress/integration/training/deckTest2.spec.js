describe('Deck test 2', () => {
    it('Test APIs', () => {

        cy.request('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=5')
        .its('body')
        .as('deck1')
        .then((deck1) =>{
            console.log('Decks:')
            console.log(deck1)
            cy.request('https://deckofcardsapi.com/api/deck/'+deck1.deck_id+'/draw/?count=66')
            .its('body')
            .as('drawnCards')
            .then((drawnCards) => {
                console.log(drawnCards)
            })
        })
    })
})