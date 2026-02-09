#include  <bits/stdc++.h>
using namespace std;
 
int main() 
{
  long long t;
 cin >> t;

 while(t--)
 {
   
 long long n;
 cin >> n;

 vector<int>a(n);
 vector<int>pos(n-1);
 for (int i = 0; i < n; i++)
 {
    cin >> a[i];
    pos[a[i]] = i;
 }

 vector<int> b = a;
 sort(b.begin() , b.end());

 bool ok = true;

 for (int i = 0; i < n-1; i++)
 {
      int idx1 = pos[b[i]];
            int idx2 = pos[b[i+1]];

            if(idx1 % 2 == idx2 % 2) {  
                ok = false;
                break;
            }
        }

        if(ok) cout << "YES\n";
        else cout << "NO\n";
    }
 }
 

 