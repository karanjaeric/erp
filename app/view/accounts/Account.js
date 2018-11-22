Ext.define('erp.view.accounts.Account', {
    extend: 'Ext.tab.Panel',
    xtype: 'account',
    activeTab: 1,
    width: 200,
    height: 200,
    tabPosition: 'top',
    title:'Accounts Module-Three Modern LTD',
    items: [{
        title: 'P1'
    }, {
        title: 'P2'
    }, {
        title: 'P3',
       // closeable:true
    }]
});