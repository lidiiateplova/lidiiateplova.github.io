function Person(params) {
	// конструктор Person
	this.name = params.name;
}

//вывод фразы
Person.prototype.saySmth = function(){
	console.log("Hello, ",this.name);
}


function Lidiia(params) {
	//конструктор Lidiia
	//вызов Person с передачей параметров
	Person.apply(this, arguments);
}


// реализуем наследование
Lidiia.prototype = Object.create(Person.prototype);
//возвращаем ссылку на прежний конструктор - Woman
Lidiia.prototype.constructor = Lidiia;

// объявление нового объекта наследованного конструктора Lidiia
var me = new Lidiia({
	name: "Lidiia",
})
me.saySmth();//Hello, Lidiia


//переопределение родительской функции saySmth
Lidiia.prototype.saySmth = function() {
	// :)
	console.log("I hope one day I complete all my homeworks");
}

// объявление нового объкта родительского конструктора Person
var ivan = new Person({
	name: "Ivan",
})
// вызов родительской функции
ivan.saySmth(); //Hello, Ivan

// вызов наследованной измененной функции
me.saySmth(); //I hope one day I complete all my homeworks