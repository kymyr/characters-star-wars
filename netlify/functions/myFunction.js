exports.handler = async function (event, context) {
    const response = await fetch('https://backend-no0f.onrender.com/api/characters');
    const data = await response.json();
  
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  };
  