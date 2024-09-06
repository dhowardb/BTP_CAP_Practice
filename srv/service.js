const cds = require('@sap/cds')
const { ConnectBackend } = require('./helper/ConnectionHandler')

module.exports = cds.service.impl( function() {
    const { Root, Child } = this.entities;

    this.on('READ', Root, ConnectBackend )

    this.on('READ', Child, ConnectBackend )
} )