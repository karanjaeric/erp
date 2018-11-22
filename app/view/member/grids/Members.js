/**
 * This view is an example list of people.
 */
Ext.define('erp.view.member.Members', {
    extend: 'Ext.grid.Panel',
    xtype: 'membersgrid',

    requires: [
        'erp.store.member.Members'
    ],

    title: 'Scheme Members',

    store: {
        type: 'member'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],

    listeners: {
        //select: 'onItemSelected'
    },
    tbar: [
        {
            text:'Members',
            menu: [{
                text: 'New Member',
                listeners:{
                    click:{
                        fn: function(){
                            var config = {
                                xtype: 'memberregistrationform',
                            };
                            var win = Ext.ComponentMgr.create(config);
                            win.show();
                        }
                    }
                }
            }, {
                text: 'New Beneficiary',
                iconCls: 'compose'
            }, {
                text: 'New Single Contribution',
                iconCls: 'star'
            }]
        }
    ]
});
