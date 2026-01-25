#include <bits/stdc++.h>
using namespace std;

int main()
{
    int t;
    cin >> t;

    while (t--)
    {
        int n, k;
        cin >> n >> k;

        int arr[n];
        for (int i = 0; i < n; i++)
        {
            cin >> arr[i];
        }

        int store = 0;
        bool ok = true;

        for (int i = 0; i < n; i++)
        {
            int total = arr[i] + store;   

            if (total >= k)
            {
                store = total - k;      
            }
            else
            {
                ok = false;
                cout << "NO " << i+1 << endl;
                break;
            }
        }

        if (ok)
        {
            cout << "YES" << endl;
        }
    }
}
