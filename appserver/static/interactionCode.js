//Disable ticketing if email is secelected and vice versa, if "both" is selected, neither should be disabled
function alertingInput(choice, id)
{
    var idNum = id.match(/\d+/);
    if(choice == 'ticket')
    {
        document.getElementById('emailInput_'+idNum).getElementsByClassName('form-control')[0].disabled = true;
        document.getElementById('email').value = '';
        document.getElementById('addedemailInput_'+idNum).innerHTML = '';
        document.getElementById('addedemailRemButton_'+idNum).innerHTML = '';
        document.getElementById('addEmail_'+idNum).disabled = true;
        document.getElementById('ticket_'+idNum).disabled = false;
        document.getElementById('ticketCircum_'+idNum).disabled = false;
        document.getElementById('ticketBucket_'+idNum).disabled = false;
    }
    else if(choice == 'email')
    {
        document.getElementById('ticket_'+idNum).disabled = true;
        document.getElementById('ticket_'+idNum).value = '';
        document.getElementById('ticketCircum_'+idNum).disabled = true;
        document.getElementById('ticketCircum_'+idNum).value = '';
        document.getElementById('ticketBucket_'+idNum).disabled = true;
        document.getElementById('ticketBucket_'+idNum).value = '';
        document.getElementById('emailInput_'+idNum).getElementsByClassName('form-control')[0].disabled = false;
        document.getElementById('addEmail_'+idNum).disabled = false;
    }
    else if(choice == 'both')
    {
        document.getElementById('ticket_'+idNum).disabled = false;
        document.getElementById('ticketCircum_'+idNum).disabled = false;
        document.getElementById('ticketBucket_'+idNum).disabled = false;
        document.getElementById('emailInput_'+idNum).getElementsByClassName('form-control')[0].disabled = false;
        document.getElementById('addEmail_'+idNum).disabled = false;
    }
}

//Disable URL if server is secelected and vice versa, if "both" is selected, neither should be disabled
function URLServerInput(choice, id)
{
    var idNum = id.match(/\d+/);
    //alert(idNum);
    if(choice == 'server')
    {
        document.getElementById('server_'+idNum).disabled = false;
        document.getElementById('addServer_'+idNum).disabled = false;
        document.getElementById('url_'+idNum).disabled = true;
        document.getElementById('addURL_'+idNum).disabled = true;
        document.getElementById('addedURLInput_'+idNum).innerHTML = '';
        document.getElementById('addedURLRemButton_'+idNum).innerHTML = '';
    }
    else if(choice == 'url')
    {
        document.getElementById('url_'+idNum).disabled = false;
        document.getElementById('addURL_'+idNum).disabled = false;
        document.getElementById('server_'+idNum).disabled = true;
        document.getElementById('addServer_'+idNum).disabled = true;
        document.getElementById('addedserverInput_'+idNum).innerHTML = '';
        document.getElementById('addedserverRemButton_'+idNum).innerHTML = '';
    }
    else if(choice == 'both')
    {
        document.getElementById('url_'+idNum).disabled = false;
        document.getElementById('addURL_'+idNum).disabled = false;
        document.getElementById('server_'+idNum).disabled = false;
        document.getElementById('addServer_'+idNum).disabled = false;
    }
}

//Saves data in a JSON file
function saveJSON(text, filename)
{
    //create anchor element
    var a = document.createElement('a');
    //donwload file locally --> THIS NEEDS TO POST TO SERVER
    a.setAttribute('href', 'data:text/plain;charset=utf-8,'+encodeURIComponent(text));
    //change donwload filename
    a.setAttribute('download', filename);
    a.click();
    //UNCOMMENT THE LINE BELOW AFTER FIX SPLUNK INGEST
    window.location.href = "SubmitValidation.html";
}

//Gives a warning if the server names do not start with a03 or a70
function serverWarning(id){
    color = document.getElementById(id).style.borderColor;
    var str = document.getElementById(id).value;
    if(str.startsWith("a03") || (str.startsWith("a70")))
    {
        document.getElementById('serverWarningText').innerHTML = "";
    }
    else
    {
        document.getElementById('serverWarningText').innerHTML = "<i class='fa fa-exclamation-circle' aria-hidden='true'></i><em style='font-size: 12px;'> Server ID does not start with a03 or a70!<em>";
    }  
}

//Remove requirements
function removeReq(id, name)
{
    idNum = id.match(/\d+/);
    if(idNum > 1)
    {
        var requirement = name+idNum;
        $('#'+requirement).empty();
    }
    if(idNum == 1)
    {
        alert('You cannot remove the first requirement');
    }
}

//Ensure the project end date is not a date in the past
function minDate() 
{
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 
    today = yyyy+'-'+mm+'-'+dd;
    document.getElementById("projectEndDate").setAttribute("min", today);
}

//Add new input boxes when the add buttons are clicked and delete specific ones
var riskNum = 1;
var serverNum = 1;
var fileNum = 1;
var emailNum = 1;
var accNum = 1;
var addNum = 1;
var URLNum = 1;
function addInputBox(id, name)
{
    idNum = id.match(/\d+/);
    var newBox = document.createElement('div');
    var newRemBox = document.createElement('div');
    var logBox = document.createElement('div');

    if(name == 'serverInput')
    {
        newBox.innerHTML = "<div class = '' id='serverWarning"+idNum+"' <a data-toggle='tooltip' title='Please enter all ServerIDs'> <input type='text' class='form-control' oninput='serverWarning(this.id)' id='server"+idNum+"' placeholder='Server ID' name='Server ID "+idNum+"' required></input> <span class='help-block' id='serverWarningText"+idNum+"'> </span> </a> </div>"
        newRemBox.innerHTML = "<button type='button' id='serverRem"+idNum+"_"+serverNum+"' class='btn btn-default'>x</button> <span class='help-block'></span>";
        serverNum++;
        document.getElementById('addedserverRemButton_'+idNum).appendChild(newRemBox);
        newRemBox.onclick = function() 
        {
            //alert('hello');
            newBox.innerHTML = '';
            newRemBox.innerHTML = '';
        };
    }
    else if(name == 'riskInput')
    {
        newBox.innerHTML = "<input type='text' class='form-control' id='risks"+idNum+"_"+riskNum+"' placeholder='Ex. Contractual Obligation, Financial Risk, Customer Impact' name='Risk "+idNum+"'> <span class='help-block'>";
        newRemBox.innerHTML = "<button type='button' id='risksRem"+idNum+"_"+riskNum+"' class='btn btn-default'>x</button> <span class='help-block'></span>"
        riskNum++;
        document.getElementById('addedriskRemButton_'+idNum).appendChild(newRemBox);
        newRemBox.onclick = function() 
        {
            //alert('hello');
            newBox.innerHTML = '';
            newRemBox.innerHTML = '';
        };
    }
    else if(name == 'accInput')
    {
        newBox.innerHTML = "<input type='text' class='form-control' id='acceptanceCrit"+idNum+"_"+accNum+"' placeholder='Ex: When _____, I expect _____' name='Acceptance Criteria "+idNum+"' required> <span class='help-block'>";
        newRemBox.innerHTML = "<button type='button' id='accRem"+idNum+"_"+accNum+"' class='btn btn-default'>x</button> <span class='help-block'></span>"
        accNum++;
        document.getElementById('addedaccRemButton_'+idNum).appendChild(newRemBox);
        newRemBox.onclick = function() 
        {
            //alert('hello');
            newBox.innerHTML = '';
            newRemBox.innerHTML = '';
        };
    }
    else if(name == 'emailInput')
    {
        newBox.innerHTML = "<input type='email' class='form-control' id='email"+idNum+"_"+emailNum+"' placeholder='Distribution List' name='Distribution List "+idNum+"' pattern='.+@bcbssc.com|.+@paisc.com|.+@cgifederal.com|.+@palmettogba.com|.+@palmettogbaservices.com|.+@companiondataservices.com|.+@cdsedc.com|.+@ngc.com|.+@cgsadmin.com|.+@docfinity.com|.+@a70amed.com'  oninvalid='this.setCustomValidity('Please enter your email address with one of the following domains from below')' onchange='this.setCustomValidity('')'required> <span class='help-block'>";
        newRemBox.innerHTML = "<button type='button' id='emailRem"+idNum+"_"+emailNum+"' class='btn btn-default'>x</button> <span class='help-block'></span>"
        emailNum++;
        document.getElementById('addedemailRemButton_'+idNum).appendChild(newRemBox);
        newRemBox.onclick = function() 
        {
            //alert('hello');
            newBox.innerHTML = '';
            newRemBox.innerHTML = '';
        };
    }
    else if(name == 'fileInput')
    {
        newBox.innerHTML = "<input type='text' class='form-control' id='files"+idNum+"_"+fileNum+"' placeholder='Ex. D:\\Program Files\\MyApplication\\Logs\\' name='File Path "+idNum+"'> <span class='help-block'>";
        newRemBox.innerHTML = "<button type='button' id='fileRem"+idNum+"_"+fileNum+"' class='btn btn-default'>x</button> <span class='help-block'></span>";
        logBox.innerHTML = "<input type='text' class='form-control' id='logRotation"+idNum+"_"+fileNum+"' placeholder='Ex. By date, by size' name='Log Rotation "+idNum+"'> <span class='help-block'></span>"
        fileNum++;
        document.getElementById('addedfileRemButton_'+idNum).appendChild(newRemBox);
        document.getElementById('addedlogInput_'+idNum).appendChild(logBox);
        newRemBox.onclick = function() 
        {
            newBox.innerHTML = '';
            newRemBox.innerHTML = '';
            logBox.innerHTML = '';

        };

    }
    else if(name == 'addInput')
    {
        newBox.innerHTML = "<input type='text' class='form-control' id='addInfo"+idNum+"_"+addNum+"' placeholder='Additional Information' name='Additional Information "+idNum+"'> <span class='help-block'>";
        newRemBox.innerHTML = "<button type='button' id='addRem"+idNum+"_"+addNum+"' class='btn btn-default'>x</button> <span class='help-block'></span>";
        addNum++;
        document.getElementById('addedaddRemButton_'+idNum).appendChild(newRemBox);
        newRemBox.onclick = function() 
        {
            newBox.innerHTML = '';
            newRemBox.innerHTML = '';
        };
    }
    else if(name=="URLInput")
    {
        newBox.innerHTML = "<input type='text' class='form-control' id='url"+idNum+"_"+URLNum+"' placeholder='URL' name='URL "+idNum+"' required><span class='help-block'>";
        newRemBox.innerHTML = "<button type='button' id='URLRem"+idNum+"_"+URLNum+"' class='btn btn-default'>x</button> <span class='help-block'></span>";
        URLNum++;
        document.getElementById('addedURLRemButton_'+idNum).appendChild(newRemBox);
        newRemBox.onclick = function() 
        {
            newBox.innerHTML = '';
            newRemBox.innerHTML = '';
        };
    }
    idInput = name+'_'+idNum;
    document.getElementById('added'+name+'_'+idNum).appendChild(newBox);
}

//Outline required input boxes in red if not filled
function validatetextboxes()
{
    document.getElementById('validate').innerHTML = '<style> input:invalid{ border-color: rgb(245, 0, 37);}select:invalid {border-color: rgb(245, 0, 37);}</style>';
}

//Displays character count
function characterCount(){
    $(document).ready(function(){
        var len = 0;
        var maxchar = 350;

    $( '#addInfo' ).keyup(function(){
        len = this.value.length
        if(len > maxchar){
            return false;
        }
        else if (len>0){
            $( "#remainingC" ).html( "Remaining characters: " +( maxchar - len ));
        }
        else{
            $( "#remainingC" ).html( "Remaining characters: " + ( maxchar ));
        }
    })
    });
}

