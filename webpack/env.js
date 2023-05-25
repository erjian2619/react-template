const isDevelopment = process.env.NODE_ENV !== 'production';
const isProduction = process.env.NODE_ENV === 'production';
console.log(process.env);

module.exports = {isDevelopment, isProduction};