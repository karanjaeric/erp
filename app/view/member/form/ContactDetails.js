Ext.define('erp.view.member.form.ContactDetails',{
    extend:'Ext.form.Panel',
    xtype:'contactinformationform',
    defaultType: 'textfield',
    items: [

        {
            xtype: 'fieldset',
            title: 'Contact Details',
            //layout:'hbox',
            items: [
                {
                    fieldLabel:'Physical Address',
                    xtype: 'textfield',
                    name : 'address',

                },
                {
                    fieldLabel:'Residential Address',
                    xtype: 'textfield',
                    name : 'residentialAddress',

                },
                {
                    fieldLabel: 'Country',
                    xtype: 'textfield',
                    name : 'country'

                },
                {
                    fieldLabel: 'Town',
                    xtype: 'textfield',
                    name : 'town'

                },
                {
                    fieldLabel: 'Building',
                    xtype: 'textfield',
                    name : 'building'

                },
                {
                    fieldLabel: 'Road',
                    xtype: 'textfield',
                    name : 'road'

                },
                {
                    fieldLabel:'Phone Number',
                    xtype: 'textfield',
                    name : 'phoneNumber'
                },
                {
                    fieldLabel:'Telephone Number',
                    xtype: 'textfield',
                    name : 'telephoneNumber',
                },
                {
                    fieldLabel:'Email Address',
                    xtype: 'textfield',
                    name : 'emailAddress',
                },
                {
                    fieldLabel:'Receive Email Notifications?',
                    xtype: 'textfield',
                    name : 'emailAddress',
                },
                {
                    fieldLabel:'Receive Sms Notifications',
                    xtype: 'textfield',
                    name : 'emailAddress',
                },
                {
                    fieldLabel:'Receive App Notification',
                    xtype: 'textfield',
                    name : 'emailAddress',
                }
            ]
        }
    ]


});