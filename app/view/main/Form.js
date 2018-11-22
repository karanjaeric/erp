Ext.define('erp.view.main.Form',{
    extend: 'Ext.window.Window',
    height: 600,
    width: 1200,
    title:'New Batch Contribution Schedule',
    scrollable:true,
    title:'New Batch Contribution Schedule',
    requires:[
        // 'erp.view.member.form.ContactInfo',
        // 'erp.view.member.form.StatutoryDetails',
        // 'erp.view.member.form.PersonalInformation',
        // 'erp.view.member.form.ContactDetails',
        // 'erp.view.member.form.SchemeDetails'
    ],
    tools: [{
        type: 'help',
        callback: function() {
            // show help here
        }
    }, {
        itemId: 'reply',
        glyph: 'xf112@FontAwesome', // Reply icon
        hidden: true,
        callback: function() {
            // do reply
        }
    }, {
        type: 'search',
        callback: function (panel) {
            // do search
            panel.down('#refresh').show();
        }
    }],
    xtype:'sampleform',
    requires:[
        // 'Ext.form.Panel'
    ],
    id:'sampleform',
   //layout:'absolute',
    items:[
                {
                xtype: 'form',
                reference: 'form',

                items: [
                    {
                        xtype: 'fieldset',
                        title: 'Batch Contribution Details',
                        layout:'hbox',
                        items: [
                            {
                                fieldLabel:'Batch Name',
                                xtype: 'textfield',
                                name : 'batchName',

                            },
                            {
                                xtype: 'datefield',
                                name : 'batchDate',
                                fieldLabel: 'batchDate'
                            },
                            {
                                fieldLabel:'Receipt Number',
                                xtype: 'textfield',
                                name : 'batchName'
                            },
                            {
                                fieldLabel:'Receipt Value',
                                xtype: 'textfield',
                                name : 'batchName',
                            },
                            {
                                fieldLabel:'Contributions Value',
                                xtype: 'textfield',
                                name : 'batchName',
                            }
                        ]
                    }

                ]

            },
        {
           // xtype:'schemeinformationform'
        },

            {  // Let's put an empty grid in just to illustrate fit layout
                xtype: 'grid',
                border: true,
                title:'Uploaded Contributions',
                columns: [{header: 'World'}],                 // One header just for show. There's no data,
                store: Ext.create('Ext.data.ArrayStore', {}) // A dummy empty data store
            }
]

});