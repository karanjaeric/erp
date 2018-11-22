Ext.define('erp.view.member.form.PersonalInformation',{
    extend:'Ext.form.Panel',
    xtype:'personalinformationform',
    defaultType: 'textfield',
    items: [

        {
            xtype: 'fieldset',
            title: 'Personal Details',
            //layout:'hbox',
            items: [
                {
                    fieldLabel:'Title',
                    xtype: 'textfield',
                    name : 'title'

                },
                {
                    fieldLabel:'Surname',
                    xtype: 'textfield',
                    name : 'surname',
                    allowBlank: false

                },
                {
                    fieldLabel: 'First Name',
                    xtype: 'textfield',
                    name : 'firstName'

                },
                {
                    fieldLabel:'Other Names',
                    xtype: 'textfield',
                    name : 'otherNames'
                },
                {
                    fieldLabel:'Gender',
                    xtype: 'textfield',
                    name : 'gender',
                },
                {
                    fieldLabel:'Marital Status',
                    xtype: 'textfield',
                    name : 'maritalStatus',
                },
                {
                    fieldLabel:'Date of Birth',
                    xtype: 'datefield',
                    name : 'dateOfBirth',
                },
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