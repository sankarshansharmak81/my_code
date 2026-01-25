#include  <bits/stdc++.h>
using namespace std;
 
int main() 
{
    long long n ;
    cin >> n;
    int count = 0;
    
    while(n!=0)
    {
    int lastDigit = n%10;
    if(lastDigit == 4 ||  lastDigit == 7)
    {
        count ++;
    }

    n = n/10;
}

    if(count == 4 || count == 7)
    {
        cout << "YES" << endl;
    }

    else 
    cout << "NO" << endl;
    

    

}