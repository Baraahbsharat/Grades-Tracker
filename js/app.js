var newStudent = document.getElementById('form');
var submitionButton = document.getElementById('submitButton');

var StudentGrade =0;


createTable(),
function addNewStudent (event){
    event.preventDefault();
    createTable();
}

submitionButton.addEventListener('click',addNewStudent );

    


 function createTable (){
    var table = document.getElementById('mytable');
    var parentDiv = document.getElementById('table');
    parentDiv.appendChild('table')
    var tableRow = document.createElement('tr');
    table.appendChild('tableRow');
   var firstcolumn = documrnt.createElement('td');
   firstcolumn =  firstcolumn.textContent.allStudent.length.StudentName.value;
   tableRow.appendChild('firstcolumn')
   var secondColumn = documrnt.createElement('td');
   secondColumn = secondColumn.textContent.allStudent.length.StudentGrade.value;
   tableRow.appendChild('secondColumn');
   var thirdColumn = documrnt.createElement('td');
   thirdColumn = thirdColumn.textContent.allStudent.length.Course.value;
 }
 
 function NewStudents(StudentName, StudentGrade, Course){
   this.StudentName = Name;
   this.StudentGrade = Grade;
   this.Course = Course;
   generateRandomNumber : function (){
    return Math.floor(Math.random() * 101); 
    NewStudents.generateRandomNumber.push(this)
   }
 }
 generateRandomNumber();
 NewStudents.prototype.allStudent[];
 var hanaRow = new NewStudents("hana","13","Arabic");
 var farahRow = new NewStudents("farah","88","science");
 var doaaRow = new NewStudents ("Doaa","20","Math");

localStorage.setItem("formData", "form");
var formData = localStorage.getItem("formData")
