#include <bits/stdc++.h>
using namespace std;

int main()
{
    

    int t;
    cin >> t;

    while (t--)
    {
        long long s, k, m;
        cin >> s >> k >> m;

        long long lastFlip = (m / k);
        long long el = m%k;

        int sand;
        if(lastFlip%2==0)
        {
            sand = s;
        }
        else
        {
            sand = min(s,k);

        }

        if (el==0)
        {
            cout << sand << endl;

        }
        else{
        long long ans = max(0LL , sand -el);
        cout << ans << endl;
        }
        
    }
}
