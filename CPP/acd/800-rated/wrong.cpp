#include  <bits/stdc++.h>
using namespace std;
 
int main() 
{
    long long n ,k;
    cin >> n >>k;
    int count = 0;
    
    while(k--)
    {
    int lastDigit = n%10;
    if(lastDigit!=0)
    {
        n = n-1;
    }
    else 
    {

    n = n/10;
    }
}

   cout << n << endl;

    

}