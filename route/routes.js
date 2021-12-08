const renderMW = require('../middleware/renderMW');

const delIssueMW = require('../middleware/issue/delIssueMW');
const getIssueMW = require('../middleware/issue/getIssueMW');
const getIssuesMW = require('../middleware/issue/getIssuesMW');
const saveIssueMW = require('../middleware/issue/saveIssueMW');
const editIssueMW = require('../middleware/issue/editIssueMW');

const delMachineMW = require('../middleware/machine/delMachineMW');
const getMachineMW = require('../middleware/machine/getMachineMW');
const getMachinesMW = require('../middleware/machine/getMachinesMW');
const saveMachineMW = require('../middleware/machine/saveMachineMW');
const checkMachineConditionMW = require('../middleware/machine/checkMachineConditionMW');

const IssueModel = require('../models/issue');
const MachineModel = require('../models/machine');

module.exports = function(app) {
    const objRepo = {
        IssueModel: IssueModel,
        MachineModel: MachineModel
    };

    app.use(
        '/machine/new',
        saveMachineMW(objRepo),
        renderMW(objRepo, 'create_machine')
    );

    app.use(
        '/machine/machinecon/:machineid',
        getMachineMW(objRepo),
        getIssuesMW(objRepo),
        checkMachineConditionMW(objRepo)
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
        editIssueMW(objRepo),
        renderMW(objRepo, 'create_issue')
    );

    app.use(
        '/issue/new',
        getMachinesMW(objRepo),
        saveIssueMW(objRepo),
        renderMW(objRepo, 'create_issue')
    );

    app.use(
        '/issue/del/:issueid',
        getIssueMW(objRepo),
        getMachineMW(objRepo),
        delIssueMW(objRepo)
    );

    app.use(
        '/issue',
        getIssuesMW(objRepo),
        renderMW(objRepo, 'issues')
    );

};