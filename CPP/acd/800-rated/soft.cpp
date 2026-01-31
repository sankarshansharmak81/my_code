#include <bits/stdc++.h>
using namespace std;



int main ()

{
    int n , k , l , c ,d ,p ,nl ,np;
    cin >> n >> k >> l >> c >> d >> p >> nl >> np;

    int totDrink = k*l;
    int toast = totDrink/nl;
    int totSlice = c*d;
    int totsalt = p*np;

   

    int ans = min(toast,min(totSlice,totsalt))/n;
    cout << ans << endl;
    
    
 
}