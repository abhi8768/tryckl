
export const GetCardType = (number) => {
    // visa
    var re = new RegExp("^4");
    if (number.match(re) != null)
        return "Visa";

    // Mastercard 
    // Updated for Mastercard 2017 BINs expansion
     if (/^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/.test(number)) 
        return "Mastercard";

    // AMEX
    re = new RegExp("^3[47]");
    if (number.match(re) != null)
        return "AMEX";

    // Discover
    re = new RegExp("^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)");
    if (number.match(re) != null)
        return "Discover";

    // Diners
    re = new RegExp("^36");
    if (number.match(re) != null)
        return "Diners";

    // Diners - Carte Blanche
    re = new RegExp("^30[0-5]");
    if (number.match(re) != null)
        return "Diners - Carte Blanche";

    // JCB
    re = new RegExp("^35(2[89]|[3-8][0-9])");
    if (number.match(re) != null)
        return "JCB";

    // Visa Electron
    re = new RegExp("^(4026|417500|4508|4844|491(3|7))");
    if (number.match(re) != null)
        return "Visa Electron";

    return "";
}



export const checkCreditCard = (cardnumber, cardname) => {   
    
    
    var ccErrorNo = 0;
    var ccErrors = new Array ()

    ccErrors [0] = "Unknown card type";
    ccErrors [1] = "No card number provided";
    ccErrors [2] = "Credit card number is in invalid format";
    ccErrors [3] = "Credit card number is invalid";
    ccErrors [4] = "Credit card number has an inappropriate number of digits";
    ccErrors [5] = "Warning! This credit card number is associated with a scam attempt";
    // Array to hold the permitted card characteristics
    var cards = new Array();
  
    // Define the cards we support. You may add addtional card types as follows.
    
    //  Name:         As in the selection box of the form - must be same as user's
    //  Length:       List of possible valid lengths of the card number for the card
    //  prefixes:     List of possible prefixes for the card
    //  checkdigit:   Boolean to say whether there is a check digit
    
    cards [0] = {name: "Visa", 
                 length: "13,16", 
                 prefixes: "4",
                 checkdigit: true};
    cards [1] = {name: "MasterCard", 
                 length: "16", 
                 prefixes: "51,52,53,54,55",
                 checkdigit: true};
    cards [2] = {name: "DinersClub", 
                 length: "14,16", 
                 prefixes: "36,38,54,55",
                 checkdigit: true};
    cards [3] = {name: "CarteBlanche", 
                 length: "14", 
                 prefixes: "300,301,302,303,304,305",
                 checkdigit: true};
    cards [4] = {name: "AmEx", 
                 length: "15", 
                 prefixes: "34,37",
                 checkdigit: true};
    cards [5] = {name: "Discover", 
                 length: "16", 
                 prefixes: "6011,622,64,65",
                 checkdigit: true};
    cards [6] = {name: "JCB", 
                 length: "16", 
                 prefixes: "35",
                 checkdigit: true};
    cards [7] = {name: "enRoute", 
                 length: "15", 
                 prefixes: "2014,2149",
                 checkdigit: true};
    cards [8] = {name: "Solo", 
                 length: "16,18,19", 
                 prefixes: "6334,6767",
                 checkdigit: true};
    cards [9] = {name: "Switch", 
                 length: "16,18,19", 
                 prefixes: "4903,4905,4911,4936,564182,633110,6333,6759",
                 checkdigit: true};
    cards [10] = {name: "Maestro", 
                 length: "12,13,14,15,16,18,19", 
                 prefixes: "5018,5020,5038,6304,6759,6761,6762,6763",
                 checkdigit: true};
    cards [11] = {name: "VisaElectron", 
                 length: "16", 
                 prefixes: "4026,417500,4508,4844,4913,4917",
                 checkdigit: true};
    cards [12] = {name: "LaserCard", 
                 length: "16,17,18,19", 
                 prefixes: "6304,6706,6771,6709",
                 checkdigit: true};
                 
    // Establish card type
    var cardType = -1;
    for (var i=0; i<cards.length; i++) {
  
      // See if it is this card (ignoring the case of the string)
      if (cardname.toLowerCase () == cards[i].name.toLowerCase()) {
        cardType = i;
        break;
      }
    }
    
    // If card type not found, report an error
    if (cardType == -1) {
       ccErrorNo = 0;
       return false; 
    }
     
    // Ensure that the user has provided a credit card number
    if (cardnumber.length == 0)  {
       ccErrorNo = 1;
       return false; 
    }
      
    // Now remove any spaces from the credit card number
    cardnumber = cardnumber.replace (/\s/g, "");
    
    // Check that the number is numeric
    var cardNo = cardnumber
    var cardexp = /^[0-9]{13,19}$/;
    if (!cardexp.exec(cardNo))  {
       ccErrorNo = 2;
       return false; 
    }
         
    // Now check the modulus 10 check digit - if required
    if (cards[cardType].checkdigit) {
      var checksum = 0;                                  // running checksum total
      var mychar = "";                                   // next char to process
      var j = 1;                                         // takes value of 1 or 2
    
      // Process each digit one by one starting at the right
      var calc;
      for (i = cardNo.length - 1; i >= 0; i--) {
      
        // Extract the next digit and multiply by 1 or 2 on alternative digits.
        calc = Number(cardNo.charAt(i)) * j;
      
        // If the result is in two digits add 1 to the checksum total
        if (calc > 9) {
          checksum = checksum + 1;
          calc = calc - 10;
        }
      
        // Add the units element to the checksum total
        checksum = checksum + calc;
      
        // Switch the value of j
        if (j ==1) {j = 2} else {j = 1};
      } 
    
      // All done - if checksum is divisible by 10, it is a valid modulus 10.
      // If not, report an error.
      if (checksum % 10 != 0)  {
       ccErrorNo = 3;
       return false; 
      }
    }  
    
    // Check it's not a spam number
    if (cardNo == '5490997771092064') { 
      ccErrorNo = 5;
      return false; 
    }
  
    // The following are the card-specific checks we undertake.
    var LengthValid = false;
    var PrefixValid = false; 
    var undefined; 
  
    // We use these for holding the valid lengths and prefixes of a card type
    var prefix = new Array ();
    var lengths = new Array ();
      
    // Load an array with the valid prefixes for this card
    prefix = cards[cardType].prefixes.split(",");
        
    // Now see if any of them match what we have in the card number
    for (i=0; i<prefix.length; i++) {
      var exp = new RegExp ("^" + prefix[i]);
      if (exp.test (cardNo)) PrefixValid = true;
    }
        
    // If it isn't a valid prefix there's no point at looking at the length
    if (!PrefixValid) {
       ccErrorNo = 3;
       return false; 
    }
      
    // See if the length is valid for this card
    lengths = cards[cardType].length.split(",");
    for (j=0; j<lengths.length; j++) {
      if (cardNo.length == lengths[j]) LengthValid = true;
    }
    
    // See if all is OK by seeing if the length was valid. We only check the length if all else was 
    // hunky dory.
    if (!LengthValid) {
       ccErrorNo = 4;
       return false; 
    };   
    
    // The credit card is in the required format.
    return true;
  }