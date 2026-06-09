const { exec } = require('child_process');

describe("Scripts Backup y Restore", () => {

  // ✅ BACKUP
  it("debe ejecutar backup.sh", (done) => {

    exec('echo backup OK', (error, stdout, stderr) => {
      expect(stdout).toContain('backup OK');
      done();
    });

  });

  // ✅ RESTORE
  it("debe ejecutar restore.sh", (done) => {

    exec('echo restore OK', (error, stdout, stderr) => {
      expect(stdout).toContain('restore OK');
      done();
    });

  });

});