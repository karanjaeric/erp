Ext.define('erp.view.member.form.MembershipInformation',{
    extend:'Ext.form.Panel',
    xtype:'membershipinformationform',
    defaultType: 'textfield',
    items: [

        {
            xtype: 'fieldset',
            title: 'Membership info',
            //layout:'hbox',
            items: [
                {
                    fieldLabel:'Membership Number',
                    xtype: 'textfield',
                    name : 'membershipNumber',

                },
                {
                    fieldLabel: 'Date Joined Scheme',
                    xtype: 'textfield',
                    name : 'dateJoinedScheme'

                },
                {
                    fieldLabel:'Cost Center',
                    xtype: 'textfield',
                    name : 'costCenter'
                },
                {
                    fieldLabel:'Member Class',
                    xtype: 'textfield',
                    name : 'memberClass'
                },
                {
                    fieldLabel:'Account Number',
                    xtype: 'textfield',
                    name : 'accountNumber',
                },
                {
                    fieldLabel:'Region',
                    xtype: 'textfield',
                    name : 'region',
                },
                {
                    fieldLabel:'Country',
                    xtype: 'textfield',
                    name : 'country',
                },
                {
                    fieldLabel:'Department',
                    xtype: 'textfield',
                    name : 'department',
                },
                {
                    fieldLabel:'Agent',
                    xtype: 'textfield',
                    name : 'agent',
                },
                {
                    fieldLabel:'Is Transfer in?',
                    xtype: 'textfield',
                    name : 'isTransferIn',
                },
                {
                    fieldLabel:'Dates Confirmed?',
                    xtype: 'textfield',
                    name : 'datesConfirmed',
                },
                {
                    fieldLabel:'Member is Disabled?',
                    xtype: 'textfield',
                    name : 'isMemberDisabled',
                }

            ]
        }
    ]


});