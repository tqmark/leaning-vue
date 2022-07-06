import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  it('playground32', () => {
    cy.mount(HelloWorld, { props: { msg: 'Hello Cypress' } })
  })

  it('renders properly', () => {
    cy.mount(HelloWorld, { props: { msg: 'Hello Cypress' } })
    cy.get('h1').should('contain', 'Hello Cypress')
  })

  it('renders a anchor', () => {
    cy.mount(HelloWorld, { props: { msg: 'Hello Cypress' } })
    cy.get('a').should('contain', 'Vite')
  })
})
