# easy-csv-parser

`easy-csv-parser` is an npm package that allows you to easily parse CSV files
from a provided URL into JavaScript objects. This library simplifies the process
of fetching and processing CSV data, making it useful for a wide range of
applications.

## Installation

You can install `easy-csv-parser` using npm or yarn.

```bash
npm install easy-csv-parser
```

OR

```bash
yarn add easy-csv-parser
```

# Usage

## CSV to Javascript

### Import the library

```javascript
const { csvToObject } = require("easy-csv-parser`");
```

### Exact code

```javascript
async function processCSV() {
  const csvLink = "https://example.com/your-csv-file.csv";
  const result = await csvToObject(csvLink);

  if (result.status === 200) {
    console.log("CSV data successfully parsed:");
    console.log(result.data);
  } else if (result.status === 400) {
    console.error("Bad Request:", result.message);
  } else {
    console.error("Error:", result.message);
  }
}

processCSV();
```

## CSV to JSON

### Import the library

```javascript
const { csvToJSON } = require("easy-csv-parser`");
```

### Exact code

```javascript
async function processCSV() {
  const csvLink = "https://example.com/your-csv-file.csv";
  const result = await csvToJSON(csvLink);

  if (result.status === 200) {
    console.log("CSV data successfully parsed:");
    console.log(result.data);
  } else if (result.status === 400) {
    console.error("Bad Request:", result.message);
  } else {
    console.error("Error:", result.message);
  }
}

processCSV();
```

## Parameters

- link (string): The URL of the CSV file you want to parse.

## Return Value

The csvToObject function returns an object with the following properties:

1. status (number): The HTTP status code indicating the result of the operation.
2. data (array of objects): An array of JavaScript objects representing the
   parsed CSV data. Each object corresponds to a row in the CSV file, with keys
   derived from the CSV header and values from the data rows.

## Key Features

**easy-csv-parser** offers the following key features to simplify your CSV data
processing tasks:

- **Effortless CSV Retrieval**: Fetch and parse CSV data from a specified URL
  with a single function call. Say goodbye to manual data retrieval and parsing.

- **Automatic Header Extraction**: The library automatically handles CSV header
  extraction, ensuring that your data is organized and structured from the
  start.

- **Data Conversion**: Seamlessly convert CSV data into JavaScript objects,
  making it easy to work with and manipulate in your Node.js applications.

- **Error Handling Made Easy**: Receive clear and informative error messages and
  status codes, simplifying the process of identifying and resolving issues.

- **Versatile Application**: Suitable for a wide range of applications,
  including data analysis, automation, data integration, and more. Streamline
  your workflow with ease.

**easy-csv-parser** is designed to be your go-to tool for handling CSV data
efficiently and effectively, reducing complexity and improving your development
experience.

## Example Output

1. If the CSV is successfully parsed, status will be 200, and the parsed data
   will be available in the data property.
2. If the CSV file is empty or there is an issue with the request, status will
   be 400, and an error message will be provided.
3. If there is an error during the fetching or processing of the CSV, status
   will be 500, and an error message will be provided.

## License

This project is licensed under the MIT License. Feel free to use it in your own
projects and contribute to its development on GitHub.

## Issues and Contributions

If you encounter any issues, have questions, or want to contribute to the
project, we welcome your involvement! Here's how you can get involved:

- **Report Issues**: If you come across any bugs, unexpected behavior, or have
  suggestions for improvements, please visit the
  [GitHub Issues](https://github.com/rahulnikam2002/easy-csv-parser) page to
  create a new issue. Be sure to provide detailed information about the problem
  you encountered.

- **Contribute Code**: If you want to contribute to the development of
  `easy-csv-parser`, we appreciate your contributions! You can submit code
  changes or enhancements by opening a pull request on our
  [GitHub repository](https://github.com/rahulnikam2002/easy-csv-parser). Please
  follow our contribution guidelines when submitting your changes.

Your feedback and contributions help make `easy-csv-parser` better for everyone.
Thank you for using and supporting this project!

If you have any questions or need assistance with using the library or
contributing, feel free to reach out to us on GitHub.
