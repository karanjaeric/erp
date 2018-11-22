Ext.define('erp.view.member.form.StatutoryDetails',{
    extend:'Ext.form.Panel',
    xtype:'statutorydetailsform',
    defaultType: 'textfield',
    items: [

        {
            xtype: 'fieldset',
            title: 'Statutory Details',
            //layout:'hbox',
            items: [
                {
                    fieldLabel:'ID Number',
                    xtype: 'textfield',
                    name : 'idNumber',

                },
                {
                    xtype: 'textfield',
                    name : 'idType',
                    fieldLabel: 'ID Type'
                },
                {
                    fieldLabel:'Pin Number',
                    xtype: 'textfield',
                    name : 'pin'
                },
                {
                    fieldLabel:'NHIF Number',
                    xtype: 'textfield',
                    name : 'nhif',
                },
                {
                    fieldLabel:'Social Security Number',
                    xtype: 'textfield',
                    name : 'nssf',
                }
            ]
        }
    ]


});