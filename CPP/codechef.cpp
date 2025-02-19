#include <iostream>
#include <string>

int main() {
    int t;
    std::cin >> t;

    while (t--) {
        std::string s;
        std::cin >> s;

        int i = 0;
        while (i < s.length() - 1) {
            if (s[i] == s[i + 1]) {
                s.erase(i,i+1); 
                if (i > 0) i--; 
            } else {
                i++; 
            }
        }
       
        std::cout << s.length() << std::endl;
    }

    return 0;
}
