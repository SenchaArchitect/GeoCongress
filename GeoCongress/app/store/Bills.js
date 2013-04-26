/*
 * File: app/store/Bills.js
 *
 * This file was generated by Sencha Architect version 2.2.1.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.1.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('GeoCon.store.Bills', {
    extend: 'Ext.data.Store',

    requires: [
        'GeoCon.model.Bill'
    ],

    config: {
        groupField: 'state',
        model: 'GeoCon.model.Bill',
        storeId: 'Bills',
        proxy: {
            type: 'jsonp',
            extraParams: {
                apikey: '8a341f85c657435989e75c9a83294762'
            },
            limitParam: '',
            noCache: false,
            pageParam: '',
            startParam: '',
            url: 'http://api.realtimecongress.org/api/v1/bills.json',
            reader: {
                type: 'json',
                rootProperty: 'bills'
            }
        }
    }
});