Ext.define('erp.view.member.form.EmploymentInformation',{
    extend:'Ext.form.Panel',
    xtype:'employmentinformationform',
    defaultType: 'textfield',
    items: [

        {
            xtype: 'fieldset',
            title: 'Employment Info',
            //layout:'hbox',
            items: [
                {
                    fieldLabel:'Appointment Date',
                    xtype: 'datefield',
                    name : 'dateJoinedScheme',

                },
                {
                    fieldLabel:'Employment?',
                    xtype: 'textfield',
                    name : 'dateJoinedScheme',

                },
                {
                    fieldLabel:'Staff Number',
                    xtype: 'textfield',
                    name : 'dateJoinedScheme',

                }
                ,
                {
                    fieldLabel:'Department',
                    xtype: 'textfield',
                    name : 'department',
                },
                {
                    fieldLabel:'Job Grade',
                    xtype: 'textfield',
                    name : 'jobGrade',
                },
                {
                    fieldLabel:'Designation',
                    xtype: 'textfield',
                    name : 'designation',
                },
                {
                    fieldLabel:'Payroll Number',
                    xtype: 'textfield',
                    name : 'payroll',
                },
                {
                    fieldLabel:'Current Salary',
                    xtype: 'textfield',
                    name : 'payroll',
                }

            ]
        }
    ]


});