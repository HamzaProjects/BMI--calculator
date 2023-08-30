weight = float(input("Please, enter your weight in kilogram: "))
hight = float(input("Please, enter your hight in meter: "))

# BMI function calculator

def calculate_bmi(weight, hight):
    BMI_result = weight / (hight*hight)
    return BMI_result


# BMI

BMI = calculate_bmi(weight, hight)


# function takes the BMI && returns the description

def interpret_bmi(bmi):

    if bmi < 18.5:
        descrition = "Under weight!"
    elif bmi >= 18.5 and bmi < 25:
        descrition = "Normal weight!"
    elif bmi >= 25 and bmi < 30:
        descrition = "Over weight"
    else:
        descrition = "Obesity"
    return descrition
# print interpret_bmi function

print(interpret_bmi(BMI))




