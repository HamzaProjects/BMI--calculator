var weight = prompt("Please, enter your weight in kilogram: ")
var hight = prompt("Please, enter your hight in meter: ")

// BMI function calculator

function calculate_bmi(weight, hight)
{
    BMI_result = weight / (hight*hight)
    return BMI_result
}

// BMI

var BMI = calculate_bmi(weight, hight)

// function takes the BMI && returns the description

function interpret_bmi(bmi)
{
    if (bmi < 18.5)
    {
        descrition = "Under weight!"
    }
    else if (bmi >= 18.5 && bmi < 25)
    {
        descrition = "Normal weight!"
    }
    else if (bmi >= 25 && bmi < 30)
    {
        descrition = "Over weight"
    }
    else
    {
        descrition = "Obesity"
    }
    return descrition
}

// print interpret_bmi function

alert(interpret_bmi(BMI))