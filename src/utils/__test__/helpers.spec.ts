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

    describe('Volume conversion test spec', function () {
        it('Should convert from LITRE to TABLESPOONS correctly', function () {
            parseFloat(Number(volumeConversionResults[0].conversion(29)).toFixed(1)).should.equal(1961.2);
        });

        it('Should convert from TABLESPOONS to LITRE correctly', function () {
            parseFloat(Number(volumeConversionResults[1].conversion(29)).toFixed(1)).should.equal(0.4);
        });

        it('Should convert from LITRES to CUBIC_INCHES correctly', function () {
            parseFloat(Number(volumeConversionResults[2].conversion(29)).toFixed(1)).should.equal(1769.7);
        });

        it('Should convert from CUBIC_INCHES to LITRES correctly', function () {
            parseFloat(Number(volumeConversionResults[3].conversion(29)).toFixed(1)).should.equal(0.5);
        });

        it('Should convert from LITRES to CUBIC_FEETS correctly', function () {
            parseFloat(Number(volumeConversionResults[4].conversion(29)).toFixed(1)).should.equal(1);
        });

        it('Should convert from CUBIC_FEETS to LITRES correctly', function () {
            parseFloat(Number(volumeConversionResults[5].conversion(29)).toFixed(1)).should.equal(821.2);
        });

        it('Should convert from LITRES to CUP correctly', function () {
            parseFloat(Number(volumeConversionResults[6].conversion(29)).toFixed(1)).should.equal(120.8);
        });

        it('Should convert from CUP to LITRES correctly', function () {
            parseFloat(Number(volumeConversionResults[7].conversion(29)).toFixed(1)).should.equal(7);
        });

        it('Should convert from LITRES to GALLONS correctly', function () {
            parseFloat(Number(volumeConversionResults[8].conversion(29)).toFixed(1)).should.equal(7.7);
        });

        it('Should convert from GALLONS to LITRES correctly', function () {
            parseFloat(Number(volumeConversionResults[9].conversion(29)).toFixed(1)).should.equal(109.8);
        });

        it('Should convert from CUBIC_INCHES to TABLESPOONS correctly', function () {
            parseFloat(Number(volumeConversionResults[10].conversion(29)).toFixed(1)).should.equal(32.1);
        });

        it('Should convert from TABLESPOONS to CUBIC_INCHES correctly', function () {
            parseFloat(Number(volumeConversionResults[11].conversion(29)).toFixed(1)).should.equal(26.2);
        });

        it('Should convert from CUBIC_INCHES to CUBIC_FEETS correctly', function () {
            parseFloat(Number(volumeConversionResults[12].conversion(29)).toFixed(1)).should.equal(0);
        });

        it('Should convert from CUBIC_FEETS to CUBIC_INCHES correctly', function () {
            parseFloat(Number(volumeConversionResults[13].conversion(34)).toFixed(1)).should.equal(0);
        });

        it('Should convert from CUBIC_INCHES to CUPS correctly', function () {
            parseFloat(Number(volumeConversionResults[14].conversion(34)).toFixed(1)).should.equal(2.3);
        });

        it('Should convert from CUPS to CUBIC_INCHES correctly', function () {
            parseFloat(Number(volumeConversionResults[15].conversion(34)).toFixed(1)).should.equal(498);
        });

        it('Should convert from CUBIC_INCHES to GALLONS correctly', function () {
            parseFloat(Number(volumeConversionResults[16].conversion(34)).toFixed(1)).should.equal(0.1);
        });

        it('Should convert from GALLONS to CUBIC_INCHES correctly', function () {
            parseFloat(Number(volumeConversionResults[17].conversion(34)).toFixed(1)).should.equal(7854);
        });

        it('Should convert from CUBIC_FEETS to TABLESPOONS correctly', function () {
            parseFloat(Number(volumeConversionResults[18].conversion(34)).toFixed(1)).should.equal(65110.4);
        });

        it('Should convert from TABLESPOONS to CUBIC_FEETS correctly', function () {
            parseFloat(Number(volumeConversionResults[19].conversion(34)).toFixed(1)).should.equal(0);
        });

        it('Should convert from CUBIC_FEETS to CUPS correctly', function () {
            parseFloat(Number(volumeConversionResults[20].conversion(34)).toFixed(1)).should.equal(4011.6);
        });

        it('Should convert from CUPS to CUBIC_FEETS correctly', function () {
            parseFloat(Number(volumeConversionResults[21].conversion(34)).toFixed(1)).should.equal(0.3);
        });

        it('Should convert from CUBIC_FEETS to GALLONS correctly', function () {
            parseFloat(Number(volumeConversionResults[22].conversion(34)).toFixed(1)).should.equal(254.4);
        });

        it('Should convert from GALLONS to CUBIC_FEETS correctly', function () {
            parseFloat(Number(volumeConversionResults[23].conversion(34)).toFixed(1)).should.equal(4.5);
        });

        it('Should convert from CUPS to TABLESPOONS correctly', function () {
            parseFloat(Number(volumeConversionResults[24].conversion(34)).toFixed(1)).should.equal(551.9);
        });

        it('Should convert from TABLESPOONS to CUPS correctly', function () {
            parseFloat(Number(volumeConversionResults[25].conversion(34)).toFixed(1)).should.equal(2.1);
        });

        it('Should convert from CUPS to GALLONS correctly', function () {
            parseFloat(Number(volumeConversionResults[26].conversion(34)).toFixed(1)).should.equal(2.2);
        });

        it('Should convert from GALLONS to CUPS correctly', function () {
            parseFloat(Number(volumeConversionResults[27].conversion(34)).toFixed(1)).should.equal(536.3);
        });

        it('Should convert from TABLESPOONS to GALLONS correctly', function () {
            parseFloat(Number(volumeConversionResults[28].conversion(34)).toFixed(1)).should.equal(0.1);
        });

        it('Should convert from GALLONS to TABLESPOONS correctly', function () {
            parseFloat(Number(volumeConversionResults[29].conversion(34)).toFixed(1)).should.equal(8704);
        });
    });
});
