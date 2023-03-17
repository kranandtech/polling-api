const development = {
  name: 'development',
  port: 8000,
  
};

const production = {
  name: process.env.ENVIRONMENT,
  port: process.env.PORT,
 
};

module.exports = eval(
  process.env.ENVIRONMENT == undefined
    ? development
    : eval(process.env.ENVIRONMENT)
);
