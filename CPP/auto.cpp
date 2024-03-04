#include <iostream>

int main()
{
    auto var1 {12};
    auto var2 {12.33};
    auto var3 {12.3f};
    auto var4 {12.3l};
    auto var5 {'e'};
    //int modifier suffixes
    auto var6 { 123u};
    auto var7 { 123ul};
    auto var8 { 123ll};

    std::cout << "variable1 occupies: " << sizeof(var1) << "Bytes" << std::endl; 
    std::cout << "variable2 occupies: " << sizeof(var2) << "Bytes" << std::endl; 
    std::cout << "variable3 occupies: " << sizeof(var3) << "Bytes" << std::endl; 
    std::cout << "variable4 occupies: " << sizeof(var4) << "Bytes" << std::endl; 
    std::cout << "variable5 occupies: " << sizeof(var5) << "Bytes" << std::endl; 
    std::cout << "variable6 occupies: " << sizeof(var6) << "Bytes" << std::endl; 
    std::cout << "variable7 occupies: " << sizeof(var7) << "Bytes" << std::endl; 
    std::cout << "variable8 occupies: " << sizeof(var8) << "Bytes" << std::endl; 
}