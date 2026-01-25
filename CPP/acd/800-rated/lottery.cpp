#include <bits/stdc++.h>
using namespace std;

int lottery(int n)
{
   
   int count = 0;

    count += n / 100;
    n %= 100;

    count += n / 20;
    n %= 20;

    count += n / 10;
    n %= 10;

    count += n / 5;
    n %= 5;

    count += n; 

    return count;
}

int main ()

{
    int n;
    cin >> n;
 int ans = lottery(n);
cout << ans << endl;
}