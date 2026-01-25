#include <bits/stdc++.h>
using namespace std;

int main() {
    int t;
    cin >> t;
    
    while(t--)
    {
        int n;
        cin >> n;
        string s;
        cin >> s;
        
        int count=0;
        for(int i = 0; i < n; i++)
        {
            if(s[i]== 'a' || s[i]== 'e' || s[i] == 'i' || s[i]== 'o'|| s[i]== 'u')
            {
              count = 0;
            }
            else 
            {
                count ++;
                if (count >= 4)
                {
                  break;
                }
                
            }
            
        }
    
        
        cout << (count >=4 ? "NO" : "YES") << endl;
        
    }

}
