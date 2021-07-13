--- 
title: Monitoring Requirements Document Form
permalink: em-mrd-help.html
sidebar: generic
tags: [enterprise-monitoring, ICT, ITBS]
product: MRD
---

### Important Information:
<div class="alert alert-warning">
[1] L: Lower Case
    <br> &nbsp;&nbsp;&nbsp;&nbsp; U: Upper Case
    <br> &nbsp;&nbsp;&nbsp;&nbsp; N: No case
    <br> &nbsp;&nbsp;&nbsp;&nbsp; 
     Ex. LUL = Lower Case, Upper Case, Lower Case
<br> *Any values surrounded by @ signs and in all caps are not to be written verbatim: Change the value depending on previous naming conventions. 
<br> Ex:  @SECTIONIDENTIFIER@ + “Input_1” can be written as addRiskInput_1 
<br> *Please see MRD Form files for more detailed commentary
</div>

### MRD Form Overview
The Monitoring Requirements Document Form was created in order to produce and process MRDS more easily. The form ensures clear communications between clients and the data monitoring team. It ensures all expectations are met.

Users can access the form at ...... On submission, the form data is saved in JSON file format and injected into Splunk to be accessed by the monitoring team. Each form has a confirmation number so users can find the status of their monitoring request.

The GitHub repository for the form files is ....

### Required Preliminary Knowledge:
- Basic HTML (Form Structure / elements)
- Basic JavaScript (Create functions to manipulate form elements)
- Basic CSS (Styling)
- Basic familiarity with jQuery (JavaScript library)
- Basic familiarity with Bootstrap (Webpage framework of HTML, JS, and CSS)

### File List

| File Name | File  Description |
|-----------|-------------------|
| SubmitValidation.html | Confirmation page that is accessed once the form is submitted. <br><br> Includes a confirmation number, some additional information, and a button to fill out another form. |
| confirmation.js | A simple JavaScript function that generates a confirmation number when each form is loaded using the built-in Math.floor() and Math.random() functions. |
| confirmationSubmit.js | Function that grabs the confirmation number that was generated in confirmation.js and outputs it to the confirmation page for the user to view. |
| dataHandling.js | Convert the form data to a JSON file when submitted using two functions. <br><br> The function *getFormJSON* creates a JSON object including all fields in the form as key-value pairs. <br><br> The function *handler* handles the form submission event, prevents default form behavior, and checks validity.  Saving the JSON file is done in interactioncode.js |
| duplicate.js | Uses jQuery to duplicate the contents in the first requirement, empty the inputs so that the new requirement does not have data from the first one, and change id values and name attributes. <br> <br>  Every time a new section is added this function needs to be updated for that section so that elements do not have the same id and name attributes after new requirements have been added.|
| index.html | Creates form fields and input boxes on the page with formatting. <br><br> The *head* section includes form metadata, the title, and imports necessary Bootstrap and CSS files as well as javascript files and scripts. <br><br> The *body* section creates all form fields and input boxes with proper formatting, it is the frontend code in HTML. The code appears in the order of the page from top to bottom. <br><br>Instuctions on how to create form fields with certain attributes can be found in the *Adding a New Input Section under Requirements* section below. |
| interactionCode.js | Includes functions that manipulate form elements in index.html and SubmitValidation.html based on user interaction. <br><br> Descriptions for each function in interactionCode.js can be found in the *interactionCode.js Function Descriptions* section below. |
| style.css |  Contains styles for most elements in index.html and SubmitValidation.html. Style classes of form element attributes. These attributes include color, size, position, font, borders, etc. <br><br> To give an HTML element a class of attributes use class="className" within the HTML element <br><br> *Note: Some styling has also been done using internal CSS in the index.html file.* |

### Form Functionality Overview

| Form Section/Question/Input | Functionality/Features |
|-----------------------------|------------------------|
|Prerequisites/Preliminary Information | "Required" Field<br>Calendar Date | 
| Requirements | "Required" Field<br>Collapsible<br>Add<br>Remove |
| Buisness Reason | "Required" Field |
| Risks | Add<br>Remove<br>Tool Tip<br> |
| Servers/URL | "Required" Field<br>Radio Button (Disable Future Inputs)<br>Add<br>Remove |
| File Monioting | Add<br>Remove<br>Tool Tip |
| Alerting | *Ticketing* <br>"Required" Field<br>Radio Button (Disable Future Inputs)<br>Tool Tip<br><br> *Distribution List* <br>"Required" Field<br>Tool Tip<br>Add<br>Remove<br>Form Validation |
| Acceptance Criteria | Add<br>Remove<br>Tool Tip |
| Additional Information | Add<br>Remove<br>Tool Tip |
| Submit | Alerts User<br>Highlight Inavlid Inputs<br>Change to SubmitValidation.js on success<br>Saves data to JSON |
| Confirmation Page | Display Confirmation Number <br>Option to Submit New Form |


### Input Types

| Input Type | Section Used In |
|------------|-----------------|
| Text | Preliminary Information/Prequisites<br>Business Reason<br>Risks<br>Servers/URL<br>File Monitoring<br>Alerting<br>Acceptance Criteria<br>Additional Information |
| Checkbox | Preliminary Information/Prequisites | 
| Calendar | Preliminary Information/Prequisites |
| Checkbox | Servers/URL<br>Alerting | 
| Drop Down | Alerting |  


### Adding a New Input Section under Requirements
1. Add the section <br> **index.html**
    1. Add a new list element in the unordered list element in the requirements section
    1. Add inputs/labels/tooltips/any other additional information needed for the new section inside of the list element
        1. For input names, name them as: 
            - <mark>@SECTION IDENTIFIER@ + “ 1"</mark> <br> [1] UN

    **duplicate.js**
    1. If checkboxes were used:
        1. Under the section commented with “Keep Requirement 1 Radio Buttons Checked”, create a variable and initialize it with the checked value of the input.
            <code><span style="color:red">var @VARIABLENAME@ = $("input[name='@INPUT_NAME@']:checked").attr('id');</span></code>
        1. Set the value of the radio button in requirement 1 to that variable.
            <code><span style="color:red">$('#req_1').find('#'+@VARIABLENAME@).prop('checked', true);</span></code>
    1. If any inputs/buttons were disabled using interaction.js:
        1. Under the section commented with “Enable Buttons/Inputs after Duplication”, enable the inputs. 
            <code><span style="color:red">$('#req_'+ index).find('#@INPUT ID@').prop('disabled', false)</span></code>
    1. Change input id and name values. For names, change the value under the section commented with “Change Names of all Inputs” and for id values, create a commented section for the specific section and change the id value there. For id, ensure that the value is changed after the section commented with “Clone Requirement and Change IDs Collapse Functionality section”.
        1. Id Change: 
            <code><span style="color:red">$('#req_'+index).find('#@IDVALUE@').attr('id','#@IDVALUESTRING@'+index);</span></code>
        1. Name Change: 
            <code><span style="color:red">$('#req_'+ index).find("[name='@INPUT_NAME@ 1']").attr('name', '@INPUTNAME@'+index)</span></code>
    1. Under the section commented with “Clear Input Values After Cloned”, clear the value of the new input (after creation of new requirement). 
        <code><span style="color:red">$('#req_'+ index).find('#@IDVALUE@').val('');</span></code>
    <br>
1. Create an "add" button
    **index.html**
    1. Underneath the original input box add a div element with an id: <br> <mark>“added” + @SECTIONIDENTIFIER@ + “Input_1” </mark> <br> [1] LLU
    1. At the bottom of the list element add a button with an id: <br> <mark>“add” + @SECTIONIDENTIFIER@ + “_1” </mark> <br> [1] LUN
    1. Add an onclick event to the add button that calls on the function “addInputBox” and sends the button id and a name as parameters. <br> “addInputBox(this.id, name)” <br> *The name should be the same as the id of the div in part a, except without “added” and “_1”.
        - <mark> @SECTIONIDENTIFIER@ + “Input”</mark>
    [1] LU

    **interactionCode.js**
    1. Find the “addInputBox()” function and add another else-if clause with the <br><mark> condition: name == @SECTIONIDENTIFIER@ (value passed in part c)</marK>
    1. Outside of the function, add a global variable for the section and initialize it to 1.
    1. Inside the else-if clause, set “newBox.innerHTML” to the input element used to create the original input box in part a.
        1. Set the id of this new input to: 
            - <mark>“@ORIGINALINPUTID@” + idNum + “_” + @SECTIONGLOBALVARIABLE@</mark>
        1. Set the name of this new input to: 
            - <mark>“@ORIGINALINPUTNAME@” + idNum</mark>
    1. Increment the global variable created in part e
    
    **duplicate.js**
    1. Change the id of the cloned version of the div created in part a 
        <code><span style="color:red">$('#req_'+ index).find('#@DIVID@).attr('id', '@DIV ID STRING@'+index);</span></code>
    1. Change the id of the cloned version of the of the button created in part b 
        <code><span style="color:red">$('#req_'+ index).find('#@BUTTONID@').attr('id', '@BUTTONIDSTRING@'+index);</span></code>
    <br>
1. Create "remove" button
    **index.html**
    1. Create a button inside of the list element for the section and create a button. Set the id:
        <mark>@SECTIONIDENTIFIER@> + “Rem” </mark><br> [1] LU
    1. Add a div element with an id:
        -  <mark>“added” + @SECTIONIDENTIFIER@> + “RemButton_1"</mark> <br> [1] LLUU

    **interactionCode.js**
    1. Inside of the else-if clause for the section in the “addInputBox” function set “newRemBox.innerHTML” to button element created the original input box in part a. Set the id of this new button to: 
        - <mark>“@ORIGINALBUTTONID@” + idNum + “_” + @SECTIONGLOBALVARIABLE@</mark> 
        

    1. After the global variable increment, add:
        <code><span style="color:red">document.getElementById('@DIVIDSTRING@' + idNum).appendChild(newRemBox);
        newRemBox.onclick = function() 
        {
            newBox.innerHTML = '';
            newRemBox.innerHTML = '';
        };</span></code>

    **duplicate.js**
    1. In the section where the previous ids for this section were changed add: 
        <code><span style="color:red">$('#req_'+ index).find('#@DIVID@’).attr('id', '@DIVIDSTRING@'+index);</span></code>

### Additional Functionality Information
##### Tool Tips
Tool tip images were imported using: 
```
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
```

- To add a question mark: ```<i class="fa fa-question-circle"></i>```
- To add an exclamation mark: ```<i class="fa fa-exclamation-circle" aria-hidden="true"></i>```

##### Email Form Validation
Email form validation is done in *index.html* using the pattern attribute: 
```
    <input type="email" 
    class="form-control" id="email" 
    placeholder="Distribution List" 
    name="Distribution List 1" 
    pattern=".+@bcbssc.com|.+@paisc.com|.+@cgifederal.com|.+@palmettogba.com|.+@palmettogbaservices.com|.+@companiondataservices.com|.+@cdsedc.com|.+@ngc.com|.+@cgsadmin.com|.+@docfinity.com|.+@a70amed.com"  
    oninvalid="this.setCustomValidity('Please enter your email address with one of the following domains from below')" 
    onchange="this.setCustomValidity('')" 
    required>
 ```
    
##### Confirmation Number
The confirmation number is generated in *confirmation.js* when *index.html* loads. That value is saved and displayed on *SubmitValidation.html* when *SubmitValidation.html* loads using *confirmationSubmit.js*.

### interactionCode.js Function Descriptions

| Function | Description |
|----------|-------------|
| alertingInput(choice,id) | This function is called when the radio buttons for a ticket, email, or 'both' are selected in the alerting section of the form (index.html). If ticket is selected, the email input elements will be disabled. If email is selected, the ticket input elements will be disabled. If 'both' is selected, all elements will be enabled |
| URLServerInput(choice,id)  |  Similar to alerting Input, disable URL if the server is selected and vice versa, if "both" is selected, neither should be disabled |
| saveJSON(text, filename) | Downloads files locally |
| serverWarning(id) | A warning pops up if a user inputs a server name that does not start with a03 or a70. The warning does not prevent the user from submitting |
| removeReq(id,name) | Allows the user to remove requirements using an X button. The first requirement cannot be removed |
| minDate() | Restricts the user from inputting Project End Dates that occurred in the past |
| addInputBox(id, name) | Adds a new input box whenever an add button is clicked for a field |
| validatetextboxes() | If a user clicks submit and any input boxes that are required are not filled out, that input box will then have a red border around it to indicate it has not been completed. The border will change to default once the input box has been filled out |
| characterCount() | Once the user begins typing in the text area for additional information, a character counter of 350 characters appears at the bottom of the textarea and reaches 0 once the user has reached the character limit |
