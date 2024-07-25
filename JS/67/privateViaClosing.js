"using strict"


function foodCreator(name, calories) {
    return {
        let _name: = name;
        let_calories: = calories;
        getCalories: function () {
            return this._calories = calories;
        },
        setCalories: function () {
            this._calories = calories;
        }
    };
}