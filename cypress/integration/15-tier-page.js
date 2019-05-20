describe('Tier page', () => {
  // Collective created for this test
  let collective = null;
  let tierUrl = null;

  before(() => {
    cy.createHostedCollective().then(c => {
      collective = c;
      cy.visit(`/${collective.slug}/tiers`);
      cy.contains('[data-cy=tiers] a', 'contribute').then($a => {
        const idRegex = /(\d+)-.+$/;
        const tierId = parseInt(idRegex.exec($a.attr('href'))[1]);
        tierUrl = `/${collective.slug}/tiers/${tierId}-any-slug`;
      });
    });
  });

  it('shows tier goal', () => {
    cy.login({ redirect: tierUrl });
  });

  it('Can edit title', () => {
    // TODO
  });

  // it('Can edit description', () => {
  //   // TODO
  // });

  // it('Goes to the contribution flow when clicking on "Contribute"', () => {
  //   // TODO
  // });

  // it('Has links to share the page', () => {
  //   // TODO
  // });
});
