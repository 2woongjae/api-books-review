const app = require('./app');
const { User } = require('./models');

(async () => {
  // await User.create({
  //   name: 'Mark',
  //   email: '2woongjae@gmail.com',
  //   password: '1234',
  // });
  app.listen(3000, () => {
    console.log('Server listening');
  });
})();
