// eslint-disable-next-line import/no-extraneous-dependencies
const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './tests/ui/*.ui_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost',
      show: false,
      browser: 'chromium',
    },
  },
  include: {
    I: './steps_file.js',
    accountPage: './pages/account.js',
    loginPage: './pages/login.js',
    mainPage: './pages/main.js',
    moviePage: './pages/movie.js',
    registrationPage: './pages/registration.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'TheMovieDB',
  plugins: {
    allure: {
      enabled: true,
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true,
    },
    tryTo: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
  },
};
