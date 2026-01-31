#include <bits/stdc++.h>
using namespace std;



int main ()

{
    int t;
    cin >> t;

    while (t--)
    {
        string s;
        cin >> s;

        string m  = "codeforces";
        
        int diff = 0;
        for (int i = 0; i < s.size(); i++)
        {
            if(s[i]!=m[i])
            {
                diff++;
            }
        }
        
        cout << diff << endl;
    }
    
    
    
 
}