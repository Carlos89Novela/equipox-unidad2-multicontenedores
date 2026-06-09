const authController = require('../src/controllers/authController');
const userModel = require('../src/models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

describe("AuthController - Login", () => {

  // ✅ CASO 1: usuario no existe
  it("debe retornar error si el usuario no existe", () => {

    const req = {
      body: {
        email: "noexiste@test.com",
        password: "123456"
      }
    };

    const res = {
      status: jasmine.createSpy().and.returnValue({
        json: jasmine.createSpy()
      })
    };

    spyOn(userModel, 'findByEmail').and.callFake((email, callback) => {
      callback(null, null);
    });

    authController.login(req, res);

    expect(res.status).toHaveBeenCalledWith(401);
  });

  // ✅ CASO 2: contraseña incorrecta
  it("debe fallar si la contraseña es incorrecta", () => {

    const req = {
      body: {
        email: "test@test.com",
        password: "123456"
      }
    };

    const res = {
      status: jasmine.createSpy().and.returnValue({
        json: jasmine.createSpy()
      })
    };

    spyOn(userModel, 'findByEmail').and.callFake((email, callback) => {
      callback(null, {
        id: 1,
        email: "test@test.com",
        password: "hashed"
      });
    });

    spyOn(bcrypt, 'compareSync').and.returnValue(false);

    authController.login(req, res);

    expect(res.status).toHaveBeenCalledWith(401);
  });

  // ✅ CASO 3: login exitoso
  it("debe generar token si login es correcto", () => {

    const req = {
      body: {
        email: "test@test.com",
        password: "123456"
      }
    };

    const res = {
      json: jasmine.createSpy()
    };

    spyOn(userModel, 'findByEmail').and.callFake((email, callback) => {
      callback(null, {
        id: 1,
        email: "test@test.com",
        password: "hashed"
      });
    });

    spyOn(bcrypt, 'compareSync').and.returnValue(true);

    spyOn(jwt, 'sign').and.returnValue("fake-token");

    authController.login(req, res);

    expect(res.json).toHaveBeenCalledWith({
      message: 'Login exitoso',
      token: "fake-token"
    });
  });

});


describe("AuthController - Recover Password", () => {

  it("debe generar token de recuperación", () => {

    const authController = require('../src/controllers/authController');

    const req = {
      body: {
        email: "test@test.com"
      }
    };

    const res = {
      json: jasmine.createSpy()
    };

    authController.recoverPassword(req, res);

    expect(res.json).toHaveBeenCalled();

  });

});

