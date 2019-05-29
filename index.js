const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(":memory:");

db.serialize(function()
{
 db.run("CREATE TABLE Instructor(ID NUMBER, Name TEXT, Dept_name Text, Salary NUMBER)");

 db.run("INSERT INTO Instructor Values(10101, 'Sirivisan', 'Comp. Sci.', 65000)");
 db.run("INSERT INTO Instructor Values(12121, 'Wu', 'Finance', 90000)");
 db.run("INSERT INTO Instructor Values(15151, 'Mozart', 'Music', 90000)");
 db.run("INSERT INTO Instructor Values(22222, 'Einstein', 'Physics', 95000)");
 db.run("INSERT INTO Instructor Values(32343, 'El Said', 'History', 62000)");
 db.run("INSERT INTO Instructor Values(3456, 'Gold', 'Physics', 87000)");
 db.run("INSERT INTO Instructor Values(45565, 'Katz', 'Comp. Sci.', 75000)");
 db.run("INSERT INTO Instructor Values(58583, 'Califieri', 'History', 62000)");
 db.run("INSERT INTO Instructor Values(76543, 'Signh', 'Finance.', 80000)");
 db.run("INSERT INTO Instructor Values(76766, 'Crick', 'Biology', 72000)");
 db.run("INSERT INTO Instructor Values(83821, 'Brandt', 'Comp. Sci.', 92000)");
 db.run("INSERT INTO Instructor Values(98345, 'Kim', 'Klec. Eng.', 80000)");

 });

});