#include <iostream>

int main() 
{
bool red_light {false};
bool green_light {true};

if (red_light == true)
{
  std::cout << "Stop" << std::endl;  /* code */
} 
else {
  std::cout << "Go through" << std::endl;  /* code */
}

if (green_light)
{
  std::cout << "The light is green" << std::endl;  /* code */
}
else {
  std::cout << "The light is not green" << std::endl;  /* code */

}

std::cout << std::endl;
  std::cout << "red_light: " <<  red_light << std::endl; 
  std::cout << "green_light: " <<  green_light << std::endl; 

std::cout << std::boolalpha;
std::cout << "red_light: " <<  red_light << std::endl; 
  std::cout << "green_light: " <<  green_light << std::endl; 



}