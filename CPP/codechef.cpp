#include <bits/stdc++.h>
using namespace std;


bool prime(int n)

{
  for (int i =2; i*i <=n; i++)
  
    if(n%i==0) return false;
    return n >1;
  
}

int reverse(long long int n)
{
  int rem ;
  int rev =0;
while(n!=0)
 { 
  rem = n%10;
  rev = rev*10 + rem;
  n /=10;

 }
 
  return rev;
}




int main() {

 long long n; cin >> n;
//  int result = reverse(n);
//  if( result == n)
//  {
//   cout << result << endl;
//   cout << "YES";
//  }
//  else {
//    cout << result << endl;
//   cout << "NO";
//  }


    


    
























    for (int i = 2; i < n; i++)
    {
      bool isprime= true;
        for (int j = 2; j *j <=i; j++)
        {
          
          if (i%j==0)
          {
            isprime = false;
            break;
            
          }
          
       
        }
  if (isprime)
        {
          cout << i;
        }
       
        
        
      
      
    }
    
    
}
    
   