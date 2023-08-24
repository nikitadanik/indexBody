const personDB = {
    gender: null,
    age: null,
    weight: null,
    height: null,
    activityCoefficient: null,
    start() {
        this.gender = prompt('Укажите ваш пол: 1 - мужчина, 2 - женщина');
        if(this.gender !== '1' && this.gender !== '2'){
            alert('Вы ввели некорректные данные')
            this.gender = null;
            this.gender = prompt('Укажите ваш пол: 1 - мужчина, 2 - женщина');
        }

        this.age = +prompt('Укажите ваш возраст: ');
        if(check(this.age)) {
            this.age = null;
            this.age = +prompt('Укажите ваш возраст: ');
        }

        this.weight = +prompt('Укажите ваш вес: ');
        if(check(this.weight)) {
            this.weight = null;
            this.weight = +prompt('Укажите ваш вес: ');
        }

        this.height = +prompt('Укажите ваш рост: ');
        if(check(this.height)) {
            this.height = +prompt('Укажите ваш рост: ');
        }

        this.activityCoefficient = +prompt ('Выберите свой уровень активности: 1,2 - минимальный, 1,375 - низкий, 1,55 - умеренный, 1,725 - высокий, 1,9 - экстремальный');
        if(this.activityCoefficient !== 1.2 && this.activityCoefficient !== 1.375 && this.activityCoefficient !== 1.55 && this.activityCoefficient !== 1.725 &&
            this.activityCoefficient !== 1.9) {
            alert('Вы ввели некорректные данные')
            this.activityCoefficient = null;
            this.activityCoefficient = +prompt ('Выберите свой уровень активности: 1,2 - минимальный, 1,375 - низкий, 1,55 - умеренный, 1,725 - высокий, 1,9 - экстремальный');
        }
    },
    getBMI() {
        if(!this.weight && !this.height) {
            alert('Запустите метод personDB.start')
        }
        const index = +(Math.pow((this.weight / this.height), 2) * 100).toFixed(2);
        if(index < 18.5) {
            console.log('Ниже нормального веса');
        }else if(index >= 18.5 && index < 25){
            console.log('Нормальный вес');
        }else if(index >= 25 && index < 30){
            console.log('Избыточный вес');
        }else if(index >= 30 && index < 35){
            console.log('Ожирение I степени');
        }else if(index >= 35 && index < 40){
            console.log('Ожирение II степени');
        }else if(index >= 40){
            console.log('Ожирение III степени');
        }
    },
    getDailyCalorie() {
        if(!this.weight && !this.height && !this.gender && !this.activityCoefficient) {
            alert('Запустите метод personDB.start')
        }
        if(this.gender === '1') {
            this.dailyCalorie = (10 * this.weight) + (6.25 * this.height) - (5 * this.age) + 5 * this.activityCoefficient;
        }else if(this.gender === '2'){
            this.dailyCalorie = (10 * this.weight) + (6.25 * this.height) - (5 * this.age) - 161 * this.activityCoefficient;
        }
    }
}

personDB.start();
personDB.getBMI()
personDB.getDailyCalorie();
console.log(personDB);

function check(param){
    if (param == '' || param <= 0 || isNaN(param)) {
        alert('Вы ввели некорректные данные')
        return true;
    }
}
