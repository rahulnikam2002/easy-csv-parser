const axios = require("axios");

async function csvToObject(link) {
  try {
    const response = await axios.get(link);
    if (!response.data || response.data.length === 0) {
      return {
        status: 400,
        message: "Your file might be empty"
      };
    }

    const originData = response.data;
    const lines = originData.split("\n");

    const headerKeys = lines[0].split(",").map((key) => key.trim());
    const result = [];

    for (let i = 1; i < lines.length - 1; i++) {
      const values = lines[i].split(",");
      const obj = {};

      for (let j = 0; j < headerKeys.length; j++) {
        obj[headerKeys[j]] = values[j];
      }

      result.push(obj);
    }

    return {
      status: 200,
      data: result
    };
  } catch (error) {
    return {
      status: 500,
      message: `Error fetching or processing CSV: ${error}`
    };
  }
}

async function csvToJSON(link) {
  const csvToObj = await csvToObject(link);
  if (csvToObj.status === 500) {
    return {
      status: 500,
      message: `Error fetching or processing CSV`
    };
  }
  if (csvToObj.status === 200) {
    return {
      status: 200,
      data: JSON.stringify(csvToObj)
    };
  }
  if (csvToObj.status === 400) {
    return {
      status: 400,
      message: "Your file might br empty"
    };
  }
}

module.exports = { csvToObject, csvToJSON };
