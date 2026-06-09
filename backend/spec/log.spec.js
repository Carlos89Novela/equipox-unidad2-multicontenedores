const logController = require('../src/controllers/logController');
const logModel = require('../src/models/logModel');

describe("LogController API", () => {

  // ✅ TEST GET LOGS
  it("debe obtener todos los logs", () => {

    const req = {};

    const res = {
      json: jasmine.createSpy()
    };

    spyOn(logModel, 'getLogs').and.callFake((callback) => {
      callback(null, [
        { id: 1, usuario: "carlos", accion: "login" }
      ]);
    });

    logController.getLogs(req, res);

    expect(res.json).toHaveBeenCalled();
  });


  // ✅ TEST POST LOGS
  it("debe crear un log correctamente", () => {

    const req = {
      body: {
        usuario: "carlos",
        fecha: "2026-06-09",
        ip: "127.0.0.1",
        accion: "login"
      }
    };

    const res = {
      status: jasmine.createSpy().and.returnValue({
        json: jasmine.createSpy()
      })
    };

    spyOn(logModel, 'createLog').and.callFake((log, callback) => {
      callback(null, { insertId: 1 });
    });

    logController.createLog(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
  });

});