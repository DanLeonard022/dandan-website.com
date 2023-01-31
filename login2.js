function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    
    if(username=="danleonard02"&& password=="06202004dl")
    {
        alert("Login succesfully");
        return false;
    }
    
    else
    {
        alert("Log in failed");
    }
    
}