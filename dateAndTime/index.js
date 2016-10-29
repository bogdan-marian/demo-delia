var dataDeAzi = new Date();
var ziua = dataDeAzi.getDate();
var luna = dataDeAzi.getMonth()+1;
var anul = dataDeAzi.getFullYear();
var ora = dataDeAzi.getHours();
var minutele = dataDeAzi.getMinutes();
var secundele = dataDeAzi.getSeconds();
function AfiseazaDataSiOra (){
console.log ("Data de azi este:"+ziua+"."+luna+"."+anul+"  ora este:"+ora+":"+minutele+":"+secundele);
};
var view = {
  displayTime:function (){
	var lista = document.querrySelector('ul');
	var element = document.createElement('li');
	element = AfiseazaDataSiOra();
  lista.appendChild(element);}
};