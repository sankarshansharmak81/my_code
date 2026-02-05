#include  <bits/stdc++.h>
using namespace std;
 
int main() 
{
 int t;
 cin >> t;

 while(t--)
 {
   
 int n;
 cin >> n;

 vector<int>a(n);
 for (int i = 0; i < n; i++)
 {
    cin >> a[i];
 }

  vector<int> pref(n);
        pref[0] = a[0];
        for (int i = 1; i < n; i++)
            pref[i] = pref[i-1] + a[i];

 bool found= false;

 int s1 = 0, s2 = 0, s3 = 0;
 for (int l = 0; l < n-2; l++)
 {
    for (int r = l+1; r < n-1; r++)
    {
                s1 = pref[l];
                s2 = pref[r] - pref[l];
                 s3 = pref[n-1] - pref[r];

                s1 %= 3;
                s2 %= 3;
                s3 %= 3;

                if ((s1==s2 && s2==s3) || (s1!=s2 && s2!=s3 && s1!=s3))
                {
                    cout << l+1 << " " << r+1 << endl; 
                    found = true;
                    break;
                }
            }
            if(found) break;
        }

        if(!found)
            cout << 0 << " " << 0 << endl;
 
 

 }
  
    

}