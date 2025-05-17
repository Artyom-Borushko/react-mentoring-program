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

  it('selecting "all" genre remove filter from the url and highlighting of selected genre on UI', () => {
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
    cy.get('.sort-control-wrapper').find('p').should('have.text', 'Select sorting');

    cy.get('.movie-expand-options-icon.movies-sort').click();
    cy.get('.dropdown-option').contains('release date').click();

    cy.get('.sort-control-wrapper').find('p').should('have.text', 'release date');

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

  describe('Movie Details tests', () => {
    it('default route shows search input on UI', () => {
      cy.get('input.search-input').should('have.attr', 'placeholder', 'What do you want to watch?');
    });

    it('clicking on movie, then url is updated with movieId and Movie Details header is present on UI', () => {
      cy.get('.movie-card').first().click();
      cy.url().should('equal', 'http://localhost:3000/337167');
      cy.get('.movie-details-description').should('have.text', 'Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.');
    });

    it('clicking on movie with active filters applied, then url is updated with movieId and filters query string remains untouched', () => {
      cy.get('.genre-button[name="comedy"]').click();
      cy.get('.movie-card').first().click();
      cy.url().should('equal', 'http://localhost:3000/269149?filter=comedy');
      cy.get('.movie-details-description').should('have.text', 'Determined to prove herself, Officer Judy Hopps, the first bunny on Zootopia\'s police force, jumps at the chance to crack her first case - even if it means partnering with scam-artist fox Nick Wilde to solve the mystery.');
    });

    it('clicking on search all movies, then movieId is removed from the url and filters query string remains untouched', () => {
      cy.get('.genre-button[name="comedy"]').click();
      cy.get('.movie-card').first().click();
      cy.get('.movie-details-search-icon').click();
      cy.url().should('equal', 'http://localhost:3000/?filter=comedy');
      cy.get('input.search-input').should('have.attr', 'placeholder', 'What do you want to watch?');
    });
  });
});
