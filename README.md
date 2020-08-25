# Flexion: Unit Conversion App

Our users are science teachers who are as comfortable using the command line as they are using a browser. In their “Unit Conversion” science unit, they want to assign students unit-conversion problems on paper worksheets. After students turn in their completed worksheets, the teachers want to be able to enter the questions and student responses into a computer to be graded.

## Features

-   Conversion for temperature units
-   Conversion for volume units
-   Responsive for mobile

## Technologies Used

### Programming Language

Typescript(Javascript)

### Backend Stack

Node.js, Express.js, Mocha & Chai

### Frontend

React.js, Cypress IO

### CI/CD

Amazon Codepipeline and Amazon EKS

## Instructions on how to install

Please follow the instructions below to run or install the application:

-   Clone the project using `git clone`.
-   On the root folder of the project run `yarn install` to add dependencies of the project.
-   Then run `yarn start` to start the project.
-   Or run `docker build -t unitconverter .` to build the docker image and `docker run -p 80:8000 unitconverter` to run the image on your local machine.

### Future Improvement

-   Build a mini package/library to handle the conversion.
-   Make the app run as a frontend app only.
-   Add data persistency feature to store students questions and responses.
-   Improve on the UI to make it more elegant and colorful.
-   Add unit tests to the frontend components.

### Live URL

Open [http://a76468beb5e5149fca2e467c597be3b7-1016725763.us-east-1.elb.amazonaws.com](http://a76468beb5e5149fca2e467c597be3b7-1016725763.us-east-1.elb.amazonaws.com) .

### Enjoy!
