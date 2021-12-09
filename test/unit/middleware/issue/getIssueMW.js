const expect = require('chai').expect;
const getIssueMW = require('../../../../middleware/issue/getIssueMW');

describe('getIssueMW middleware ', function () {

    it('should set res.locals.issue', function (done) {
        const mw = getIssueMW({
            IssueModel: {
                findOne: (p1, cb) => {
                    expect(p1).to.be.eql({_id: 8})
                    cb(null, 'mockissue');
                }
            }
        });

        const resMock = {
            locals: {}
        };

        mw({
                params: {
                    issueid: 8
                }
            },
            resMock,
            (err) => {
                expect(err).to.be.eql(undefined);
                expect(resMock.locals).to.be.eql({issue: 'mockissue'});
                done();
            });
    });

    it('should call next with error when there is a db problem', function (done) {
        const mw = getIssueMW({
            IssueModel: {
                findOne: (p1, cb) => {
                    expect(p1).to.be.eqls({_id: 8})
                    cb('dberror', null);
                }
            }
        });

        const resMock = {
            locals: {}
        };

        mw({
                params: {
                    issueid: 8
                }
            },
            resMock,
            (err) => {
                expect(err).to.be.eql('dberror');
                done();
            });
    });

    it('should call next wiith error when there isnt any issue in the db ', function (done) {
        const mw = getIssueMW({
            IssueModel: {
                findOne: (p1, cb) => {
                    expect(p1).to.be.eql({_id: 8})
                    cb(undefined, null);
                }
            }
        });

        const resMock = {
            locals: {}
        };

        mw({
                params: {
                    issueid: 8
                }
            },
            resMock,
            (err) => {
                expect(err).to.be.eql(undefined);
                expect(resMock.locals).to.be.eql({});
                done();
            });
    });
});

