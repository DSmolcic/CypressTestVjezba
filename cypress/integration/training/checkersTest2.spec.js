

describe('Checkers test 2', () =>{


    it('First test', () => {
        cy.visit('https://www.gamesforthebrain.com/game/checkers/')

        cy.get('[id="board"]')
        .find('.line')
        .then((rows) => {
            cy.wrap(rows).find('[name=space62]').click()
        })
    })
     
})