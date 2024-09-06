const cds = require('@sap/cds');

async function ConnectBackend (req) {
    const backendConnection = await cds.connect.to('zui_rap_capability_test_anno');
    const tx = backendConnection.tx(req);
    return tx.run(req.query);
}

module.exports = {
    ConnectBackend
}