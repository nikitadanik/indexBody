const personDB = {
    gender: null,
    age: null,
    height: null,
    activityCoefficient: null,
    start() {
        this.gender = prompt('Укажите ваш пол: м - мужчина, ж - женщина');

        if(this.gender !== 'м' && this.gender !== 'ж'){
            alert('Вы ввели некорректные данные')
            this.gender = prompt('Укажите ваш пол: м - мужчина, ж - женщина');
        }
    }
}

personDB.start()
console.log(personDB)