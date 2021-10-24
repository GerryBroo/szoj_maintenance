const delIssueMW = require('../middleware/issue/delIssueMW');
const getIssueMW = require('../middleware/issue/getIssueMW');
const getIssuesMW = require('../middleware/issue/getIssuesMW');
const saveIssueMW = require('../middleware/issue/saveIssueMW');

const delMachineMW = require('../middleware/machine/delMachineMW');
const getMachineMW = require('../middleware/machine/getMachineMW');
const getMachinesMW = require('../middleware/machine/getMachinesMW');
const saveMachineMW = require('../middleware/machine/saveMachineMW');

const renderMW = require('../middleware/renderMW');

const IssueModel = require('../models/issue');
const MachineModel = require('../models/machine');

module.exports = function(app) {
    const objRepo = {
        issueModel: IssueModel,
        machineModel: MachineModel
    };

    app.use(
        '/machine/new',
        saveMachineMW(objRepo),
        renderMW(objRepo, 'create_machine')
    );

    app.use(
        '/machine/del/:machineid',
        getMachineMW(objRepo),
        delMachineMW(objRepo)
    );

    app.use(
        '/machine',
        getMachinesMW(objRepo),
        renderMW(objRepo, 'index')
    );

    app.use(
        '/issue/edit/:issueid',
        getIssueMW(objRepo),
        getMachineMW(objRepo),
        saveIssueMW(objRepo),
        saveMachineMW(objRepo),
        renderMW(objRepo, 'edit_issue')
    );

    app.use(
        '/issue/new',
        getMachineMW(objRepo),
        saveIssueMW(objRepo),
        saveMachineMW(objRepo),
        renderMW(objRepo, 'create_issue')
    );

    app.use(
        '/issue/del',
        getIssueMW(objRepo),
        getMachineMW(objRepo),
        delIssueMW(objRepo),
        saveMachineMW(objRepo),
    );

    app.use(
        '/issue',
        getIssuesMW(objRepo),
        renderMW(objRepo, 'issues')
    );

};