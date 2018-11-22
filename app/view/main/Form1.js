Ext.define('erp.view.main.Form1',{
    extend:'Ext.form.Panel',
    xtype:'form1',
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