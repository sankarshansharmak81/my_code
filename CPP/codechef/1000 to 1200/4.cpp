#include <bits/stdc++.h>
using namespace std;

int main()
{

    int t;
    cin >> t;

    while (t--)
    {
        int n;
        cin >> n;
        
        int B[n];
        for (int i = 0; i < n; i++)
        {
            cin >> B[i];
        }

        int A[n];
        
        A[0] = 0 ;
        for (int i = 0; i < n-1; i++)
        {
           
           if (B[i] == 0)
           {
            A[i+1] = A[i];
           }
           else
           {
            A[i+1] = 1 - A[i];
           }
           
        }

        
        bool ok;
        if (B[n - 1] == 0)
            ok = (A[n - 1] == A[0]);    
        else
            ok = (A[n - 1] != A[0]);  
     
            if(ok)
        {
            cout << "YES" << endl;
        }
        else
        cout << "NO" << endl;
        
        
        

    }
}
