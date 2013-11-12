/*
 * File: app/view/legislator/Info.js
 *
 * This file was generated by Sencha Architect version 3.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('GeoCon.view.legislator.Info', {
    extend: 'Ext.Container',
    alias: 'widget.legislatorinfo',

    requires: [
        'GeoCon.view.legislator.Bio',
        'GeoCon.view.committee.List'
    ],

    config: {
        id: 'legislatorInfo',
        layout: {
            type: 'vbox'
        },
        scrollable: 'vertical',
        items: [
            {
                xtype: 'legislatorbio',
                height: 195
            },
            {
                xtype: 'committeelist',
                flex: 1
            }
        ]
    }

});