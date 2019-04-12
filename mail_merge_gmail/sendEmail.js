function sendEmails() {
  // Open the spreadsheet and get the first sheet.  
  var fileID = "1dbD0wV_ZSIQlYvhjaytaiJ2iyzSavw0rD9qVbuAOci0";
  var file   = DriveApp.getFileById(fileID);
  var spreadsheet = SpreadsheetApp.open(file);
  var sheet = spreadsheet.getSheets()[0];
   
  // Get the data from the spredsheet.
  // Data starts from 2nd row as 1st row is headers
  var startRow = 2;  // First row of data to process
  var numRows  = 4;  // Number of rows (number of recipients)
  // Fetch the range of cells A2:B[startRow+numRows-1]
  var dataRange = sheet.getRange(startRow, 1, numRows, 2)
  // Fetch values for each row in the Range.
  var data = dataRange.getValues();
   
  // Iterate over each row (email recipient)
  for (i in data) {
    var row = data[i];
    var emailAddress = row[0];  // First column
    var name = row[1]; // Second column
    var subject = "Using Gmail Mail Merge";
     
    // Message (email body) in HTML
    var message = '<body>' + 
      '<p>Dear '  + name + ',<br /><br />' +
'How are you? I haven\'t heard back from you.\
 Please email me back as soon as possible. Thank\
 you.<br /><br />\
Best Regards,<br />\
Sulav Malla</p>' +
    '</body>';
     
    // Send the email
    MailApp.sendEmail(emailAddress, subject, message, {htmlBody: message});
  }  
}