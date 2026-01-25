#include  <bits/stdc++.h>
using namespace std;

int main() 
{
    int n;
    cin >> n;
      int count =0;
    while (n--)
    {
        int x, y, z;
        cin >>x >> y >> z;
        
       
        if (x==1 && y == 1 || x== 1 && z==1 || y==1 && z==1)
        {
           count++;
        }
        
        
    }
    
    cout << count << endl;;

}