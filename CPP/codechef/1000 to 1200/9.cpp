#include <bits/stdc++.h>
using namespace std;

int main()
{

    int t;
    cin >> t;

    while (t--)
    {
        int a, b;
        cin >> a >> b;

        int lemek = 1;
        int bob = 2;
         
        int store = 1;
        int store2 = 2;
        while (true)
        {

            if (store > a)
            {
                cout << "Bob" << endl;
                break;
            }
            else
            {
               if (store2 > b)
            {
                cout << "Limak" << endl;
                break;
            }
            
            }

            lemek+=2;
            bob+=2;

            store += lemek;
            store2 += bob;
            
            

            
        }
    }
}