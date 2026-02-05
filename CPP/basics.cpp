#include <bits/stdc++.h>
using namespace std;

int main ()
{
   int t;
   cin >> t;

   while(t--)
   {
    long long x , y;
    cin >> x >> y;

    if(x<y && x >=1)
    cout << 2 << endl;

    else if(x > y+1&& y > 1)
    {
        cout << 3 << endl;
    }
    else 
    cout << -1 << endl;
   }
}
