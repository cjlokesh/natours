const dotenv = require('dotenv');

// 0. Get App
const app = require('./app');

dotenv.config({ path: './config.env' });

// this env is set by express
// console.log(app.get("env"));

// Process ENV by default by node
// console.log(process.env);

console.log(process.env.NODE_ENV);

// 2. Run application
app.listen(process.env.PORT, () => {
  console.log(`App running on port ${process.env.PORT}`);
});
