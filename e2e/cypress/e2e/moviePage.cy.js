
describe('Movie page tests', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.wait(500);
    });

    it('selecting genre change the url and highlighting of selected genre on UI', () => {
        cy.get('.genre-button[name="comedy"]').should('not.have.class', 'selected');

        cy.get('.genre-button[name="comedy"]').click();
        cy.get('.genre-button[name="comedy"]').should('have.class', 'selected');
        cy.url().should('equal', 'http://localhost:3000/?filter=comedy');
    });

    it('selecting genre change the url and highlighting of selected genre on UI', () => {
        cy.get('.genre-button[name="comedy"]').should('not.have.class', 'selected');

        cy.get('.genre-button[name="comedy"]').click();
        cy.get('.genre-button[name="comedy"]').should('have.class', 'selected');

        cy.get('.genre-button[name="all"]').click();
        cy.get('.genre-button[name="all"]').should('have.class', 'selected');
        cy.url().should('equal', 'http://localhost:3000/');
    });

    it('sending search form change the url', () => {
        cy.get('input.search-input').type('guard');
        cy.get('button.button.submit').click();

        cy.get('input.search-input').should('have.value', 'guard');
        cy.url().should('equal', 'http://localhost:3000/?search=guard&searchBy=title');
    });

    it('sending empty search form should remove search query parameters from url', () => {
        cy.get('input.search-input').type('guard');
        cy.get('button.button.submit').click();
        cy.get('input.search-input').clear();
        cy.get('button.button.submit').click();

        cy.get('input.search-input').should('not.have.value', 'guard');
        cy.url().should('equal', 'http://localhost:3000/');
    });

    it('selecting sort option change the url and displayed on UI name', () => {
        let sortByDisplayedText = cy.get('.sort-control-wrapper').find('p');
        sortByDisplayedText.should('have.text', 'Select sorting');

        cy.get('.movie-expand-options-icon.movies-sort').click();
        cy.get('.dropdown-option').contains('release date').click();

        sortByDisplayedText = cy.get('.sort-control-wrapper').find('p');
        sortByDisplayedText.should('have.text', 'release date');

        cy.url().should('equal', 'http://localhost:3000/?sortBy=release_date&sortOrder=desc');
    });

    it('selecting genre, sending search form, selecting sort option applied together change the url as expected', () => {
        cy.get('.genre-button[name="horror"]').click();
        cy.get('input.search-input').type('te');
        cy.get('button.button.submit').click();
        cy.get('.movie-expand-options-icon.movies-sort').click();
        cy.get('.dropdown-option').contains('release date').click();

        cy.url().should('equal', 'http://localhost:3000/?filter=horror&search=te&searchBy=title&sortBy=release_date&sortOrder=desc');
    });

    it('reloading the page preserves the url params and UI state', () => {
        cy.get('.genre-button[name="horror"]').click();
        cy.get('input.search-input').type('te');
        cy.get('button.button.submit').click();
        cy.get('.movie-expand-options-icon.movies-sort').click();
        cy.get('.dropdown-option').contains('release date').click();

        cy.reload();
        cy.wait(500);

        cy.url().should('equal', 'http://localhost:3000/?filter=horror&search=te&searchBy=title&sortBy=release_date&sortOrder=desc');
        cy.get('.genre-button[name="horror"]').should('have.class', 'selected');
        cy.get('input.search-input').should('have.value', 'te');
        cy.get('.sort-control-wrapper').find('p').should('have.text', 'release date');
    });
})
