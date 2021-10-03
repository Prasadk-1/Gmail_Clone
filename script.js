function sendEmail() {
    document.getElementById('compose-modal').style.display = "block";
    
}

function main_button(){
    document.getElementById('compose-modal').style.display = "none"
}

function signup(){
    document.getElementById('sign_uppage').style.display = "block";
}

function close_button(){
    document.getElementById('sign_uppage').style.display = "none"
}

      const mailId = document.querySelector(".mail").value;
      const password = document.querySelector(".pwd").value;


 function credentials() {    
      console.log(mailId,password);
 }

 function primaryMails(){
    document.querySelector(".primary_mails").style.display = "block";
    document.querySelector(".inbox_mails").style.display = "none";
    document.querySelector(".sent_mails").style.display = "none";
    document.querySelector(".draft_mails").style.display = "none";
 }
 

 function inboxMails(){
    document.querySelector(".inbox_mails").style.display = "block";
    document.querySelector(".primary_mails").style.display = "none";
    document.querySelector(".sent_mails").style.display = "none";
    document.querySelector(".draft_mails").style.display = "none";
 }

 function sentMails(){
    document.querySelector(".sent_mails").style.display = "block";
    document.querySelector(".inbox_mails").style.display = "none";
    document.querySelector(".primary_mails").style.display = "none";
    document.querySelector(".draft_mails").style.display = "none";
 }

 function draftMails(){
    document.querySelector(".draft_mails").style.display = "block";
    document.querySelector(".inbox_mails").style.display = "none";
    document.querySelector(".primary_mails").style.display = "none";
    document.querySelector(".sent_mails").style.display = "none";
 }