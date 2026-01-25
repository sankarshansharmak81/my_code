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

        for(int i = 0; i<n-1 ; i+=2)
        {
            swap(s[i], s[i+1]);
        }
        for (int i = 0; i < n; i++)
        {
            int store = s[i] - 'a';
            int store2 = 'z' - store;

            s[i] = store2;   
             }

             cout << s << endl;
        
    }

    


}
