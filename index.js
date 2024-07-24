Name= prompt("Enter your name") 
totalcash=+( prompt ("Enter your totalcash"));
 goldvalue= +(prompt ("Enter your gold value")); 
 silvervalue= +(prompt ("Enter your silver value"));
  totalwealth= totalcash+goldvalue+silvervalue;
   zakat =(totalwealth *1.5)/100;
alert( Name + " Your total wealth is" + totalwealth + "You have nned to pay " + zakat);
Hocument.write(Name + " Your total wealth is" + totalwealth + "You have need to pay" + zakat)