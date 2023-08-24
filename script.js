const personDB = {
    gender: null,
    age: null,
    weight: null,
    height: null,
    activityCoefficient: null,
    start() {
        this.gender = prompt('Укажите ваш пол: м - мужчина, ж - женщина');

        if(this.gender !== 'м' && this.gender !== 'ж'){
            alert('Вы ввели некорректные данные')
            this.gender = prompt('Укажите ваш пол: м - мужчина, ж - женщина');
        }

        this.age = +prompt('Укажите ваш возраст: ');

        if(check(this.age)) {
            this.age = +prompt('Укажите ваш возраст: ');
        }

        this.weight = +prompt('Укажите ваш вес: ');

        if(check(this.weight)) {
            this.weight = +prompt('Укажите ваш вес: ');
        }

        this.height = +prompt('Укажите ваш рост: ');

        if(check(this.height)) {
            this.height = +prompt('Укажите ваш рост: ');
        }

        this.activityCoefficient = prompt ('Выберите свой уровень активности: 1,2 - минимальный, 1,375 - низкий, 1,55 - умеренный, 1,725 - высокий, 1,9 - экстремальный');

        if(this.activityCoefficient !== 1,2 && this.activityCoefficient !== 1,375 && this.activityCoefficient !== 1,55 && this.activityCoefficient !== 1,725 && this.activityCoefficient !== 1,9) {
            alert('Вы ввели некорректные данные')
            this.activityCoefficient = prompt ('Выберите свой уровень активности: 1,2 - минимальный, 1,375 - низкий, 1,55 - умеренный, 1,725 - высокий, 1,9 - экстремальный');
        }
    }
}

function check(value){
    if (value == '' || value <= 0 || isNaN(value)) {
        alert('Вы ввели некорректные данные')
        return true;
    }
}

personDB.start()
console.log(personDB)