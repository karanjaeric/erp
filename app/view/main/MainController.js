/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('erp.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    requires:[
        'erp.view.main.Form'
    ],

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        var config = {
            xtype: 'sampleform',
           // mode: 'edit',
            //title: '',
            //editId: this.id
        };
        var win = Ext.ComponentMgr.create(config);
        win.show();
       // Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
       // var sampleForm=Ext.getCmp('sampleform');
       // sampleForm.show();

    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
