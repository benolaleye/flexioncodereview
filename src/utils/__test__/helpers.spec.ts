import 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
import { temperatureConversionResult, volumeConversionResults } from '../../constants/ConversionTypes';

chai.use(chaiHttp);
chai.should();

describe('Utility functions test spec', function () {
    describe('Temperature conversion test spec', function () {
        it('Should convert from kelvin to celsius correctly', function () {
            parseFloat(Number(temperatureConversionResult[0].conversion(32)).toFixed(1)).should.equal(-241.1);
        });

        it('Should convert from celsius to kelvin correctly', function () {
            parseFloat(Number(temperatureConversionResult[1].conversion(32)).toFixed(1)).should.equal(305.2);
        });

        it('Should convert from KELVIN to FAHRENHEIT correctly', function () {
            parseFloat(Number(temperatureConversionResult[2].conversion(56)).toFixed(1)).should.equal(-358.9);
        });

        it('Should convert from FAHRENHEIT to KELVIN correctly', function () {
            parseFloat(Number(temperatureConversionResult[3].conversion(56)).toFixed(1)).should.equal(286.5);
        });

        it('Should convert from RANKINE to KELVIN correctly', function () {
            parseFloat(Number(temperatureConversionResult[5].conversion(42)).toFixed(1)).should.equal(23.3);
        });

        it('Should convert from KELVIN to RANKINE correctly', function () {
            parseFloat(Number(temperatureConversionResult[4].conversion(42)).toFixed(1)).should.equal(75.6);
        });

        it('Should convert from CELSIUS to FAHRENHEIT correctly', function () {
            parseFloat(Number(temperatureConversionResult[6].conversion(23)).toFixed(1)).should.equal(73.4);
        });

        it('Should convert from FAHRENHEIT to CELSIUS correctly', function () {
            parseFloat(Number(temperatureConversionResult[7].conversion(23)).toFixed(1)).should.equal(-5);
        });

        it('Should convert from CELSIUS to RANKINE correctly', function () {
            parseFloat(Number(temperatureConversionResult[8].conversion(82)).toFixed(1)).should.equal(639.3);
        });

        it('Should convert from RANKINE to CELSIUS correctly', function () {
            parseFloat(Number(temperatureConversionResult[9].conversion(82)).toFixed(1)).should.equal(-227.6);
        });

        it('Should convert from FAHRENHEIT to RANKINE correctly', function () {
            parseFloat(Number(temperatureConversionResult[10].conversion(43)).toFixed(1)).should.equal(502.7);
        });

        it('Should convert from RANKINE to FAHRENHEIT correctly', function () {
            parseFloat(Number(temperatureConversionResult[11].conversion(43)).toFixed(1)).should.equal(-416.7);
        });
    });

    describe('Volume conversion test spec', function () {});
});
