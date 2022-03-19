function Valid()
{
	if (document.fdbck.name.value == "")
	{
		alert("Please Enter Your First Name");
		return false;
	}
	if (document.fdbck.name2.value == "")
	{
		alert("Please Enter Your Second Name");
		return false;
	}
	if (document.fdbck.tel.value == "")
	{
		alert("Please Enter Your Phone Number");
		return false;
	}
	var e = document.fdbck.email.value;
         pos1 = e.indexOf("@");
         pos2 = e.lastIndexOf(".");
         
    if (pos1 < 1 || ( pos2 - pos1 < 2 )) 
    {
            alert("Please enter correct email ID")
            document.fdbck.email.value;
            focus();
            return false;
    }
    return (true);
    if (document.fdbck.Comments.value == "")
	{
		alert("Please Drop Comment");
		return false;
	}     
	alert("SUCCESSFULLY SUBMITTED");
}
function myFunction(x) 
{
  document.getElementById(x).style.background = "aqua";
}