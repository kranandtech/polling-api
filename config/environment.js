const development = {
  name: 'development',
  port: 8000,
  server: 'http://localhost:8000/',
};

const production = {
  name: process.env.ENVIRONMENT,
  port: process.env.PORT,
  server: process.env.SERVER,
};

module.exports = eval(
  process.env.ENVIRONMENT == undefined
    ? development
    : eval(process.env.ENVIRONMENT)
);
