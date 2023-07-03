/// <reference types="cypress"/>

import DetalhesPage from "../support/page_objects/detalhes.page"
const dadosEndereco = require('../fixtures/endereco.json')

beforeEach(() => {
    cy.visit('/minha-conta/')
    cy.login('aluno_ebac@teste.com', 'teste@teste.com')
    cy.visit('/checkout/')

});

it('Funcionalidade - Validar os dados do checkout', () => {
    DetalhesPage.editarFaturamento(
        dadosEndereco.nome,
        dadosEndereco.sobrenome,
        dadosEndereco.empresa,
        dadosEndereco.pais,
        dadosEndereco.endereco,
        dadosEndereco.numero,
        dadosEndereco.cidade,
        dadosEndereco.estado,
        dadosEndereco.cep,
        dadosEndereco.telefone,
        dadosEndereco.email
        )
    cy.get('#terms').click()
    cy.get('#place_order').click()
    cy.get('.woocommerce-notice').should('contain', 'Obrigado');
});
