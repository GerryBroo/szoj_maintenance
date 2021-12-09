const expect = require('chai').expect;
const saveMachineMW = require('../../../../middleware/machine/saveMachineMW');

describe('saveMachineMW middleware ', function () {

    it('should save machine', function (done) {
        const mw = saveMachineMW({
            MachineModel: 'MachineModel'
        });

        mw(
            {
                body: {
                    name: "Gyártósor",
                    factory: "B2"
                },
            },
            {
                locals: {
                    machine: {
                        save:(cb) => {
                            cb(null)
                        }
                    }
                },
                redirect: (where)=> {
                    expect(where).to.be.eql('/machine');
                    done();
                }
            },
            (err) => {

            });
    });


    it('should call next with err if is a db error', function (done) {
        const mw = saveMachineMW({
            MachineModel: 'MachineModel'
        });

        mw(
            {
                body: {
                    name: "Gyártósor",
                    factory: "B2"
                },
            },
            {
                locals: {
                    machine: {
                        save:(cb) => {
                            cb('adatbazishiba')
                        }
                    }
                },
                redirect: (where)=> {
                }
            },
            (err) => {
                expect(err).to.be.eql('adatbazishiba');
                done();
            });
    });

    it('should set  res.locals.machine with a machine object, created by the MW', function (done) {

        class MachineMochModel {
            save(cb) {
                cb(null);
            }
        }
        const mw = saveMachineMW({
            MachineModel: MachineMochModel
        });

        mw(
            {
                body: {
                    name: "Gyártósor",
                    factory: "B2"
                },
            },
            {
                locals: {

                },
                redirect: (where)=> {
                    expect(where).to.be.eql('/machine');
                    done();
                }
            },
            (err) => {

            });
    });

    it('should call next, when no name parmater is given', function (done) {

        let dontCall = false;

        class MachineMochModel {
            save(cb) {
                dontCall = true;
                cb();
            }
        }

        const mw = saveMachineMW({
            MachineModel: MachineMochModel
        });

        mw(
            {
                body: {
                    factory: "B2"
                }
            },
            {},
            (err) => {
                expect(dontCall).to.be.eql(false);
                expect(err).to.eql(undefined);
                done();
            });
    });

    it('should call next, when no factory parmater is given', function (done) {

        let dontCall = false;

        class MachineMochModel {
            save(cb) {
                dontCall = true;
                cb();
            }
        }

        const mw = saveMachineMW({
            MachineModel: MachineMochModel
        });

        mw(
            {
                body: {
                    name: "Gyártósor"
                }
            },
            {},
            (err) => {
                expect(dontCall).to.be.eql(false);
                expect(err).to.eql(undefined);
                done();
            });
    });
});