/// <reference types="cypress"/>

beforeEach(() => {
    cy.visit('/minha-conta/')
    cy.login('aluno_ebac@teste.com', 'teste@teste.com')
    cy.visit('/produtos/page/2')

});


it('Deve adicionar produto no carrinho', () => {
    cy.addProdutos('Autumn Pullie', 'M', 'Purple', 1)
});

it('Deve adicionar produto no carrinho', () => {
    cy.addProdutos('Atlas Fitness Tank', 'L', 'Blue', 3)
});

it('Deve adicionar produto no carrinho', () => {
    cy.addProdutos('Bruno Compete Hoodie', 'XL', 'Black', 6)
});

it('Deve adicionar produto no carrinho', () => {
    cy.addProdutos('Caesar Warm-Up Pant', '33', 'Gray', 4)
});