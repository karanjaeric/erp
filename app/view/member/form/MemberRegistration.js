Ext.define('erp.view.main.Form',{
    extend: 'Ext.window.Window',
    // height: 600,
    // width: 1300,
    fullscreen:true,
    title:'Member Details',
    scrollable:true,
    requires:[
        'erp.view.member.form.ContactInfo',
        'erp.view.member.form.StatutoryDetails',
        'erp.view.member.form.PersonalInformation',
        'erp.view.member.form.ContactDetails',
        'erp.view.member.form.MembershipInformation',
        'erp.view.member.form.EmploymentInformation'
    ],
    tools: [{
        type: 'help',
        callback: function() {
            // show help here
        }
    }, {
        itemId: 'reply',
        glyph: 'xf112@FontAwesome', // Reply icon
        hidden: true,
        callback: function() {
            // do reply
        }
    }, {
        type: 'search',
        callback: function (panel) {
            // do search
            panel.down('#refresh').show();
        }
    }],
    xtype:'memberregistrationform',
    requires:[
        // 'Ext.form.Panel'
    ],
    id:'sampleform',
    //layout:'absolute',
    items:[
        {
            xtype: 'form',
            reference: 'form',
            url:'http://localhost:8080/APAS/member/members',
           jsonSubmit:true,
            layout:'hbox',
            buttons:[
                {
                    text: 'Submit',
                    formBind: true, //only enabled once the form is valid
                    disabled: true,
                    handler: function() {
                        var form = this.up('form').getForm();
                       // alert(form.getValues(true));
                        if (form.isValid()) {
                            form.submit({
                                success: function(form, action) {
                                    Ext.Msg.alert('Success', action.result.msg);
                                },
                                failure: function(form, action) {
                                    Ext.Msg.alert('Failed', action.result.msg);
                                }
                            });
                        }
                    }
                },
                {
                    text:'Reset',
                    handler: function() {
                        this.up('form').getForm().reset();
                    }

                }

            ],

            items: [
                {
                    xtype:'personalinformationform'
                },
                {
                    xtype:'membershipinformationform'
                },
                {
                    xtype:'employmentinformationform'
                },
                {
                    xtype:'contactinformationform'
                }



            ]

        },

    ]

});