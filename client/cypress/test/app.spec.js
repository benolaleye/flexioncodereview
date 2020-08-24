describe('Testing the form inputs and submission', function () {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Should successfully type in a value', function () {
        const testType = '82.4';
        cy.get('#input_value').type(testType);
    });

    it('Should successfully select conversion from', function () {
        const testType = 'KELVIN,TEMPERATURE';
        cy.get('#option1').select(testType);
    });

    it('Should successfully select conversion to', function () {
        const testType = 'CUPS,VOLUME';
        cy.get('#option2').select(testType);
    });

    it('Should successfully enter student response', function () {
        const testType = '543.94';
        cy.get('#student_response').type(testType);
    });
});

describe('Testing for API request', function () {
    it('Should be able to connect with API and get data');
});
