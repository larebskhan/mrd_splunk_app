$(document).ready(function(){
    var index = 1;

    $('#addReq').click(function(){
        index++;
        //Clone Requirement and Change IDs Collapse Functionality
        $('#req_1')
            .clone()
            .attr('id', 'req_'+ index)
            .insertAfter("#req_"+(index-1));
        $('#req_'+ index)
            .find('#toggle_1')
            .attr('href', '#collapse_'+index);
        $('#req_'+ index)
            .find('#collapse_1')
            .attr('id', 'collapse_'+index);

        //remReq Id Change
        $('#req_'+ index)
            .find('#remReq_1')
            .attr('id', 'remReq_'+index);

        //Keep Requirement 1 Radio Buttons Checked
        var alertingInputReq1 = $("input[name='Alert 1']:checked").attr('id');
        var serverInputReq1 = $("input[name='Server Type 1']:checked").attr('id');
        var serverURLInputReq1 = $("input[name='Server/URL 1']:checked").attr('id');
        $('#req_1')
            .find('#'+alertingInputReq1)
            .prop('checked', true);
        $('#req_1')
            .find('#'+serverInputReq1)
            .prop('checked', true);
        $('#req_1')
            .find('#'+serverURLInputReq1)
            .prop('checked', true);

        //Server ID Changes
        $('#req_'+ index)
            .find('#addServer_1')
            .attr('id', 'addServer_'+index);
        $('#req_'+ index)
            .find('#serverInput_1')
            .attr('id', 'serverInput_'+index);
        $('#req_'+ index)
            .find('#addedserverInput_1')
            .attr('id', 'addedserverInput_'+index);
        $('#req_'+ index)
            .find('#addedserverRemButton_1')
            .attr('id', 'addedserverRemButton_'+index);

        //URL or Server Radio ID Changes
        $('#req_'+ index)
            .find('#servChoice_1')
            .attr('id', 'servChoice_'+index);
        $('#req_'+ index)
            .find('#urlChoice_1')
            .attr('id', 'urlChoice_'+index);
        $('#req_'+ index)
            .find('#url_1')
            .attr('id', 'url_'+index);
        $('#req_'+ index)
            .find('#server_1')
            .attr('id', 'server_'+index);
        $('#req_'+ index)
            .find('#bothServerURL_1')
            .attr('id', 'bothServerURL_'+index);

        //URL ID Changes
        $('#req_'+ index)
            .find('#addURL_1')
            .attr('id', 'addURL_'+index);
        $('#req_'+ index)
            .find('#URLInput_1')
            .attr('id', 'URLInput_'+index);
        $('#req_'+ index)
            .find('#addedURLInput_1')
            .attr('id', 'addedURLInput_'+index);
        $('#req_'+ index)
            .find('#addedURLRemButton_1')
            .attr('id', 'addedURLRemButton_'+index);

        //Risk ID Changes
        $('#req_'+ index)
            .find('#addRisk_1')
            .attr('id', 'addRisk_'+index);
        $('#req_'+ index)
            .find('#riskInput_1')
            .attr('id', 'riskInput_'+index);
        $('#req_'+ index)
            .find('#addedriskInput_1')
            .attr('id', 'addedriskInput_'+index);
        $('#req_'+ index)
            .find('#addedriskRemButton_1')
            .attr('id', 'addedriskRemButton_'+index)
        
        //Acceptance Criteria ID Changes
        $('#req_'+ index)
            .find('#addAcc_1')
            .attr('id', 'addAcc_'+index);
        $('#req_'+ index)
            .find('#accInput_1')
            .attr('id', 'accInput_'+index);
        $('#req_'+ index)
            .find('#addedaccInput_1')
            .attr('id', 'addedaccInput_'+index);
        $('#req_'+ index)
            .find('#addedaccRemButton_1')
            .attr('id', 'addedaccRemButton_'+index);
        
        //File Monitoring
        //Files ID Change
        $('#req_'+ index)
            .find('#addFile_1')
            .attr('id', 'addFile_'+index);
        $('#req_'+ index)
            .find('#fileInput_1')
            .attr('id', 'fileInput_'+index);
        $('#req_'+ index)
            .find('#addedfileInput_1')
            .attr('id', 'addedfileInput_'+index);
        $('#req_'+ index)
            .find('#addedfileRemButton_1')
            .attr('id', 'addedfileRemButton_'+index);
        //Log ID Change
        $('#req_'+ index)
            .find('#addedlogInput_1')
            .attr('id', 'addedlogInput_'+index);
        
        //Alerting: Radio Button ID Change
        $('#req_'+ index)
            .find('#ticketAlert_1')
            .attr('id', 'ticketAlert_'+index);
        $('#req_'+ index)
            .find('#emailAlert_1')
            .attr('id', 'emailAlert_'+index);
        $('#req_'+ index)
            .find('#bothAlert_1')
            .attr('id', 'bothAlert_'+index);

        //Alerting: Ticketing ID Change
        $('#req_'+ index)
            .find('#ticket_1')
            .attr('id', 'ticket_'+index);
        $('#req_'+ index)
            .find('#ticketCircum_1')
            .attr('id', 'ticketCircum_'+index);
        $('#req_'+ index)
            .find('#ticketBucket_1')
            .attr('id', 'ticketBucket_'+index);
        $('#req_'+ index)
            .find('#ticketTeam_1')
            .attr('id', 'ticketTeam_'+index);

        //Alerting: Email ID Change
        $('#req_'+ index)
            .find('#addEmail_1')
            .attr('id', 'addEmail_'+index);
        $('#req_'+ index)
            .find('#emailInput_1')
            .attr('id', 'emailInput_'+index);
        $('#req_'+ index)
            .find('#addedemailInput_1')
            .attr('id', 'addedemailInput_'+index);
        $('#req_'+ index)
            .find('#addedemailRemButton_1')
            .attr('id', 'addedemailRemButton_'+index);

        //Alerting: Email Domain ID Change
        $('#req_'+ index)
            .find('#domains_1')
            .attr('id', 'domains_'+index);
        $('#req_'+ index)
            .find('#domainButton_1')
            .attr('id', 'domainButton_'+index);
        $('#req_'+ index)
            .find('#emailDomain_1')
            .attr('id', 'emailDomains_'+index);
        $('#req_'+ index)
            .find('#domainButton_'+index)
            .attr('data-target', '#domains_'+index);

        //Clear Input Values After Cloned
        $('#req_'+ index)
            .find('#server')
            .val('');
        $('#req_'+ index)
            .find('#reason')
            .val(''); 
        $('#req_'+ index)
            .find('#requirements')
            .val(''); 
        $('#req_'+ index)
            .find('#risks')
            .val('');
        $('#req_'+ index)
            .find('#acceptanceCrit')
            .val(''); 
        $('#req_'+ index)
            .find('#email')
            .val(''); 
        $('#req_'+ index)
            .find('#files')
            .val(''); 
        $('#req_'+ index)
            .find('#logRotation')
            .val(''); 
        $('#req_'+ index)
            .find('#addInfo')
            .val(''); 
        $('#req_'+ index)
            .find('#searchSched')
            .val(''); 
        $('#req_'+ index)
            .find('#ticketCircum_'+index)
            .val('');
        $('#req_'+ index)
            .find('#ticketBucket_'+index)
            .val('');
        $('#req_'+ index)
            .find('#ticketTeam_'+index)
            .val('');
        
        //Enable Buttons/Inputs after Duplication
        $('#req_'+ index)
            .find('#risks')
            .prop('disabled', false)
        $('#req_'+ index)
            .find('#ticketCircum_'+index)
            .prop('disabled', false)
        $('#req_'+ index)
            .find('#ticket_'+index)
            .prop('disabled', false)
        $('#req_'+ index)
            .find('#ticketBucket_'+index)
            .prop('disabled', false)
        $('#req_'+ index)
            .find('#ticketTeam_'+index)
            .prop('disabled', false)
        $('#req_'+ index)
            .find('#email')
            .prop('disabled', false)
        $('#req_'+ index)
            .find('#addEmail_'+index)
            .prop('disabled', false)
        $('#req_'+ index)
            .find('#server')
            .prop('disabled', false)
        $('#req_'+ index)
            .find('#server')
            .prop('disabled', false)
        $('#req_'+ index)
            .find('#addServer_'+index)
            .prop('disabled', false)
        $('#req_'+ index)
            .find('#url')
            .prop('disabled', false)
        $('#req_'+ index)
            .find('#addURL_'+index)
            .prop('disabled', false)
        $('#req_'+ index)
            .find('#url_'+index)
            .prop('disabled', false)
        $('#req_'+ index)
            .find('#server_'+index)
            .prop('disabled', false)
            
        //Clear div element with old added inputs
        $('#req_'+ index)
            .find('#addedserverInput_'+index)
            .empty(); 
        $('#req_'+ index)
            .find('#addedserverRemButton_'+index)
            .empty(); 
        $('#req_'+ index)
            .find('#addedriskInput_'+index)
            .empty(); 
        $('#req_'+ index)
            .find('#addedriskRemButton_'+index)
            .empty(); 
        $('#req_'+ index)
            .find('#addedaccInput_'+index)
            .empty(); 
        $('#req_'+ index)
            .find('#addedaccRemButton_'+index)
            .empty(); 
        $('#req_'+ index)
            .find('#addedfileInput_'+index)
            .empty(); 
        $('#req_'+ index)
            .find('#addedlogInput_'+index)
            .empty();
        $('#req_'+ index)
            .find('#addedfileRemButton_'+index)
            .empty();
        $('#req_'+ index)
            .find('#addedemailInput_'+index)
            .empty(); 
        $('#req_'+ index)
            .find('#addedemailRemButton_'+index)
            .empty();
        
        //Change Names of all Inputs
        $('#req_'+ index)
            .find("[name='Requirement 1']")
            .attr('name', 'Requirement '+index)

        $('#req_'+ index)
            .find("[name='Business Reason 1']")
            .attr('name', 'Business Reason '+index)

        $('#req_'+ index)
            .find("[name='Risk 1']")
            .attr('name', 'Risk '+index)
            
        $('#req_'+ index)
            .find("[name='Server/URL 1']")
            .attr('name', 'Server/URL '+index)

        $('#req_'+ index)
            .find("[name='Server Type 1']")
            .attr('name', 'Server Type '+index)
        
        $('#req_'+ index)
            .find("[name='Server ID 1']")
            .attr('name', 'Server ID '+index)
        
        $('#req_'+ index)
            .find("[name='URL 1']")
            .attr('name', 'URL '+index)
            
        $('#req_'+ index)
            .find("[name='File Path 1']")
            .attr('name', 'File Path '+index)

        $('#req_'+ index)
            .find("[name='Log Rotation 1']")
            .attr('name', 'Log Rotation '+index)

        $('#req_'+ index)
            .find("[name='Alert 1']")
            .attr('name', 'Alert '+index)

        $('#req_'+ index)
            .find("[name='Search Schedule 1']")
            .attr('name', 'Search Schedule '+index)


        $('#req_'+ index)
            .find("[name='Ticket Severity 1']")
            .attr('name', 'Ticket Severity '+index)
        
        $('#req_'+ index)
            .find("[name='Ticketing Condition 1']")
            .attr('name', 'Ticketing Condition '+index)
        
        $('#req_'+ index)
            .find("[name='Ticket Bucket 1']")
            .attr('name', 'Ticket Bucket '+index)

        $('#req_'+ index)
            .find("[name='Distribution List 1']")
            .attr('name', 'Distribution List '+index)

        $('#req_'+ index)
            .find("[name='Acceptance Criteria 1']")
            .attr('name', 'Acceptance Criteria '+index)

        $('#req_'+ index)
            .find("[name='Additional Information 1']")
            .attr('name', 'Additional Information '+index)

    });
});
