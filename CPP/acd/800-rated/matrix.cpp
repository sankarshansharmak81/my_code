#include <bits/stdc++.h>

using namespace std;

int main()
{
    vector<vector<int>> arr(5, vector<int>(5));
    for(int i = 0; i < 5; i++) {
    for(int j = 0; j < 5; j++) {
        cin >> arr[i][j];
    }
    
}

int ans = 0;
  for(int i = 0; i < 5; i++) {
    for(int j = 0; j < 5; j++) {
       if(arr[i][j]==1)
       {
        ans = (abs(i-2) + abs(j-2));
        
       }
    }


}
cout << ans << endl;

}