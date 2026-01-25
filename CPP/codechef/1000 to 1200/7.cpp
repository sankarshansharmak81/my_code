#include <bits/stdc++.h>
using namespace std;

int main()
{
    int t;
    cin >> t;

    while (t--)
    {
        int n, x;
        cin >> n >> x;

        if (x > n)
        {
            cout << "NO\n";
            continue;
        }

        int rem = n - x;

\
        if (x % 2 == 1)
        {
            cout << "YES\n";
        }
        else
        {
            if (rem % 2 == 0)
                cout << "YES\n";
            else
                cout << "NO\n";
        }
    }
}
