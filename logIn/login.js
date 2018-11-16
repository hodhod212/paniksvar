/* functionen addEntry lägger till en Andvändare i localStorage under Nmanet Allcostumers! 
den tar värdet från input fälten och sparar undan det och sparar undan dem i den tomma arrayn existingEntries*/


/* Jag sparar undan costumers som en sträng i local storage inuti Allcostumers som också är en sträng vilket jag
sedan andvänder mig av JSON.parse för att återställa det som ett javascript objekt*/
 function addEntry() {

    var existingEntries = JSON.parse(localStorage.getItem("allCostumer"));
    if(existingEntries == null) existingEntries = [];
 
    var userName = document.getElementById("firstName").value;
    var password = document.getElementById("Password").value;

    var costumer = {
        "userName": userName,
        "password": password,        
    };

    existingEntries.push(costumer);
    localStorage.setItem("allCostumer", JSON.stringify(existingEntries));

};
/* pusUserToRegister är en oncklick som sparar som triggar AddEntry som spara informationen smat 
triggar functionen LoadfirstPage som laddar index sidan.*/
 function pushUserToRegister() {
         
    addEntry();
    LoadfirstPage();
   
};


function LoadfirstPage() {

    window.open("index.html");

}



/* för att kunna logga in behöver vi en check som kollar ifall inputvärdet som anges är lika med de undan sparade kontona i lokalStorage 
detta görs med en for loop för att kunna gemföra kontona.*/
function check() {

   /* variablarna för input value och allCostumer = alla andvändarna i LocalStorage */
    var users = JSON.parse(localStorage.getItem("allCostumer"));
    var userName = document.getElementById('userNameCheck').value; 
    var userPassword = document.getElementById('passwordCheck').value;

        for (var i = 0; i < users.length; i++) {
            /* andvänder oss av en if sats som triggar flera funktioner om inpute värderna stämmer med de sparade kunderna */
            if(users[i].userName == userName && users[i].password == userPassword) {
                IsLogin()
                  LoadfirstPage();
                  $("#loggInButton").prop("value",'Log out')     
                  showUserName(); 
                  changeButtonFunction();
                  IsLogin();
                  grabShoppingList();

                break;           
            }
 
    }

};
/* isLogin functionen tar värderna som i matas in i input lådorna och spara de aktiva värderna 
i localStorage som sedan tas bort med functionen Logout */
function IsLogin() {

    var loggedInUSer = JSON.parse(localStorage.getItem("transaction"))
    if(loggedInUSer == null) loggedInUSer = [];
    var userName = document.getElementById('userNameCheck').value; 
    var userPassword = document.getElementById('passwordCheck').value;
    
        var isloggedIn =  {

            "userName": userName,
            "password": userPassword,
                 
        }

            localStorage.setItem("isloggedIn",JSON.stringify(isloggedIn));
            loggedInUSer.push(isloggedIn);
            localStorage.setItem("curentuser", JSON.stringify(loggedInUSer));

}

/* show username ändara loginknappen till logut smatidigt som den även ändrar onclicken
 till Changebuttonfunctionen som triggar Logout funktionen  */
function showUserName() {

    var userName = document.getElementById('userNameCheck').value;
    const UserNameOutputField = document.getElementById('showUserName');
    var loggedInUser = JSON.parse(localStorage.getItem('isloggedIn')); 

        if ( loggedInUser != null ) {
            UserNameOutputField.innerHTML = "welcome!"+ ":" + '\xa0' + userName ;
            $("#loggInButton").prop("value",'Log out');   
            changeButtonFunction();
    } 
    
}


function changeButtonFunction() {

  document.getElementById('loggInButton').setAttribute( "onClick", "javascript: LogOut(); ;" );

}

/* Denna funktion hämtar värderna från de olika Storages i Localstorage för att sätta ihop dem i en register den tar 
isloggin för att den endast skall sparas till den andvändaren och inte till alla */
function AddOrderToRegister() {

    var transactionregister = JSON.parse(localStorage.getItem("transactionregister")) 
    if (!transactionregister) transactionregister = [];
    
    var userloggedin = JSON.parse(localStorage.getItem('isloggedIn'));
    var shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'))

    prevPurchPlusUser = {

        "userName": userloggedin.userName,
        "shoppingcart": shoppingCart
    }

    transactionregister.push(prevPurchPlusUser);
    localStorage.setItem("transactionregister", JSON.stringify(transactionregister)); 
}

/* skletet till print av shoppincarten där man kan se sina tidigre köp */
function grabShoppingList() {
   
    var userNameData = JSON.parse(localStorage.getItem('isloggedIn'));
    var orderRegister = JSON.parse(localStorage.getItem('transactionregister')) 
   

    var userOrderList = []

        for ( var i = 0; i < orderRegister.length; i++) {
          

            for ( var x = 0; x < orderRegister[i].products.length; x++) {

            }
            
            if ( orderRegister[i].userName = userNameData.userName) {
                 userOrderList.push(orderRegister[i]) 

                
            }
            
        }

}
/* logutfuntktionen radrar isloggedIn vilket gör att man inte kan köpa på andras konton */

function LogOut() {
    if (true) {
         localStorage.removeItem('isloggedIn')
          window.location.reload();              
    }
};







