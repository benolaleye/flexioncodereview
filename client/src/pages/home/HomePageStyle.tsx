import styled from 'styled-components';

export const HomePageStyle = styled.div`
    @media (max-width: 600px) {
        .form__wrapper {
            background-color: #fff;
            box-shadow: 0px 8px 20px rgba(224, 224, 224, 0.5);
            padding: 20px;

            h1 {
                text-align: center;
                margin-bottom: 10px;

                small {
                    color: grey;
                    font-weight: bold;
                }
            }

            .horizontal__line {
                width: 100px;
                height: 2px;
                background-color: grey !important;
                margin: auto;
            }
        }

        .content__wrapper {
            margin-top: 30px;
        }

        .result__wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 71px;
            padding: 20px;
            background-color: #e5e7e9;

            code {
                color: #ec7063;
                font-weight: bold;
            }
        }
    }

    @media (min-width: 601px) {
        padding: 10px;
        display: flex;
        flex-direction: row;
        justify-content: center;

        .form__wrapper {
            background-color: #fff;
            box-shadow: 0px 8px 20px rgba(224, 224, 224, 0.5);
            padding: 20px;
            width: 500px;

            h1 {
                text-align: center;
                margin-bottom: 10px;

                small {
                    color: grey;
                    font-weight: bold;
                }
            }

            .horizontal__line {
                width: 100px;
                height: 2px;
                background-color: red;
                margin: auto;
            }
        }

        .content__wrapper {
            margin-top: 40px;
        }

        .result__wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 71px;
            padding: 20px;
            background-color: #e5e7e9;

            code {
                color: #ec7063;
                font-weight: bold;
            }
        }
    }

    .result.valid {
        font-size: 25px;
        font-weight: bold;
        color: #2ecc71;
    }

    .result.invalid {
        font-size: 25px;
        font-weight: bold;
        color: #cd6155;
    }
`;
