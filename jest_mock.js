// cfenvをmockにしたい

const cfenv = require('cfenv');

jest.mock('cfenv');

/*
// これはOK
cfenv.getAppEnv = jest.fn().mockReturnValue('TEST');
const appEnv = cfenv.getAppEnv();
console.log('*** appEnv', appEnv);
// これはダメ
appEnv.getServiceCreds = jest.fn().mockReturnValue('OK');
const services = appEnv.getServiceCreds('test');
*/

/* これOK
cfenv.getAppEnv = jest.fn().mockImplementation(() => {
  return {
    getServiceCreds: jest.fn().mockReturnValue('OK'),
  };
});
*/

const getAppEnv = jest.fn().mockImplementation(() => {
  return {
    getServiceCreds: jest.fn().mockReturnValue('OK'),
  };
});

// これだめ
/*
jest.mock('cfenv', () => {
  return jest.fn().mockImplementation(() => {
    return {
      getAppEnv: getAppEnv,
    };
  });
});
*/

// うまくいかない
cfenv.mockImplementation(() => {
  return {
    getAppEnv: getAppEnv,
  };
});


console.log('*** cfenv', cfenv);

const appEnv = cfenv.getAppEnv();
console.log('*** appEnv', appEnv);
const services = appEnv.getServiceCreds('');

const testFn = require('../cfenv_lib');

//const services = 'DUMMY';

//jest.spyOn(cfenv, 'getAppEnv');
//jest.spyOn(AppEnv, 'getServiceCreds');

describe('test', () => {
  it('test', (done) => {
    if (services) {
      console.log('*** SERVICES', services);
    } else {
      console.log('ERROR');
    }

    testFn();

    //expect(cfenv.getAppEnv).toBeCalled();
    //expect(cfenv.AppEnv.getServiceCreds).toBeCalled();

    done();
  });
});
