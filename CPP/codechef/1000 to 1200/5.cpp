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

        int arr[2*n];
        for (int i = 0; i < 2 * n; i++)
        {
            cin >> arr[i];
        }

        bool ok  = false;
        for (int i = 0; i < 2 * n; i++)
        {
            int count = 1;
            for (int j = i+1; j < 2*n; j++)
            {
                if (arr[i] == arr[j])
                {
                    count++;
                    
                }
                
            }

            if(count > 2)
            {
                ok = true;
                break;
            }
            
        }

        cout << (ok? "No" : "Yes") << endl;
    }
}