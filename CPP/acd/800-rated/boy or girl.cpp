#include  <bits/stdc++.h>
using namespace std;

int main() 
{
  string s;
  cin >> s;
  
//   int len = sizeof(s);
//   int j = 0;
//    for (int i = 1; i < len; i++)
//    {
//     if (s[j]==s[i])
//     {
//         len--;
//     }
//     else
//     j++;
//    }
   
//    cout << (len%2==0?  "IGNORE HIM!" : "CHAT WITH HER!" ) << endl;
   
   set<char> st(st.begin(),st.end());
   if(st.size()%2==0){
    cout << "CHAT WITH HER!\n";
   }else{
    cout << "IGNORE HIM!\n";
   }
}