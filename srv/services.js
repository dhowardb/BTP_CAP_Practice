const cds = require('@sap/cds')
const { ConnectBackend } = require('./helper/ConnectionHandler')

module.exports = cds.service.impl( function() {
    const { Risks, Mitigations } = this.entities;
    this.on('READ', Risks, ConnectBackend )

    this.on('READ', Mitigations, ConnectBackend )
})