#include <bits/stdc++.h>
using namespace std;

int main ()
{
    long long n, t;
    cin >> n >> t;
  
    vector<int> a(n);
    for (int i = 0; i < n; i++)
        cin >> a[i];
    
    int curr = 0;
    long long total = 0;
    int i = 0;
    int close;

    while (curr < t)
    {
        while (i < n && a[i] < curr)
            i++;

        if (i < n) close = a[i];
        else close = t;

        close = min(close, (int)t);

        total += close - curr;  

        curr = close + 100;

        if (i < n && close == a[i])
            i++;
    }

    cout << total << endl;
}
