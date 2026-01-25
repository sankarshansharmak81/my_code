#include  <bits/stdc++.h>
using namespace std;
 
int main() 
{
  int n , k;
  cin >> n >> k;
  int arr[n];
  int count = 0;
  
  for (int i = 0; i < n; i++)
  {
    cin >> arr[i];
  }
  int score = arr[k-1];
  int i = n;
  while (i--)
  { 

    
      if (arr[i] >= score)
    {
        count++;
    }
  }
  

  
  
  cout << count << endl;
  
  
}
