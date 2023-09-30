module.exports = {
    name: 'my-nodejs-app',
    env: {
      MONGO_URI: 'mongodb+srv://kaushikkumar:kaushikestee@cluster0.knqjiqk.mongodb.net/carStock?retryWrites=true&w=majority'
     
    },
    build: {
      command: 'npm run build',
    },
    run: {
      command: 'nodemon index',
    },
    routes: [
      {
        path: '/',
        dest: '/',
        method: ['GET', 'POST'],
        headers: {
          'x-custom-header': 'custom-value',
        },
      },
    ],
    dependencies: {
        'mongodb': '^3.6.0', // Use a valid MongoDB version
        'express': '^4.17.1',
      // Add other dependencies here
    },
  };
  