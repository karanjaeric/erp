Ext.define('erp.view.member.form.ContactInfo',{
    extend:'Ext.form.Panel',
    xtype:'contactinformationform',
    defaultType: 'textfield',
    items: [{
        fieldLabel: 'First Name',
        name: 'first',
        allowBlank: false
    },{
        fieldLabel: 'Last Name',
        name: 'last',
        allowBlank: false
    }]


});