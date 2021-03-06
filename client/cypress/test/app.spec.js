describe('Loading the app', function () {
    it('Should load the app successfully', function () {
        cy.visit('/');
    });
});

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
    it('Should be able to connect with API and get data', function () {
        cy.server();
        cy.route({
            url: `/api/types`,
            method: 'GET',
            status: 200,
        });
    });

    it('Should successfully post data to the server', function () {
        cy.server();
        cy.route('POST', '/api/convert', {
            input_value: '84.2',
            student_response: '543.94',
            head: 'FAHRENHEIT',
            tail: 'RANKINE',
        });
    });
});
