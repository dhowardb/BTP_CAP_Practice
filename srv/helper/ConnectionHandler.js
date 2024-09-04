const cds = require('@sap/cds');

async function ConnectBackend(req) {
    const backendConnection = await cds.connect.to('ZUI_RISKS_MITI_CLOUD_O4');
    const tx = backendConnection.tx(req);
    return tx.run(req.query);
}

module.exports = {
    ConnectBackend
}