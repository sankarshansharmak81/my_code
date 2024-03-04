#include <iostream>

int main ()
{
double number1 { 5.6 };
double number2 {};
double number3 {};

//infinity
double result {number1 / number2};

std::cout << number1 << "/" << number2 << " yields " << result << std::endl;
std::cout << result << " + " << number1 << " yields " <<  result+number1 << std::endl;

//Nan

result = number2 / number3;

std::cout << number2 << "/" << number3 << " = " << result << std::endl;
 

return 0;

}