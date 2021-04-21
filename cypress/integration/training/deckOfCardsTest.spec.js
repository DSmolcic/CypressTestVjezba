context('Random deck of cards test', () =>{

    it('First card test', () => {

        //cy.visit('https://www.gamesforthebrain.com/game/checkers/')

        //cy.intercept('GET', 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1', { fixture: 'deck.json' })

        //cy.intercept('GET', 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')

        cy.request('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        .its('body.deck_id') // yields the first element of the returned list
        .then((deckID) =>{
                console.log(deckID)
                cy.request('https://deckofcardsapi.com/api/deck/'+deckID+'/draw/?count=2')
                .its('body')
                .then((body) => {
                    console.log(body)
                    expect(body.remaining).to.equal(50)
                    cy.request('https://deckofcardsapi.com/api/deck/'+deckID+'/shuffle/')
                    .its('body')
                    .as('ReshDeck')
                    .then((ReshDeck) => {
                        expect(ReshDeck.remaining).to.equal(52)
                    })

                })
        })
        

        cy.request('https://deckofcardsapi.com/api/deck/new/')
        .its('body.deck_id')
        .then((deck2_id) => {
            console.log('Deck 2 ID: ' + deck2_id)
            cy.request('https://deckofcardsapi.com/api/deck/'+deck2_id+'/draw/?count=4')
            .its('body')
            .then((body) => {
                for (let i=0; i<body.cards.length; i++){
                    cy.request('https://deckofcardsapi.com/api/deck/'+deck2_id+'/pile/Pile1/add/?cards='+body.cards[i].code)
                    .its('body')
                    .as('Pile1')
                    .then((Pile1) => {
                        console.log(Pile1)
                    })
            }

            })

        })





    })

})