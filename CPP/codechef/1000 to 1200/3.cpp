#include <bits/stdc++.h>
using namespace std;

int main()
{

    int t;
    cin >> t;

    while (t--)
    {

        int Ddsa, Dtoc, Ddm;
        cin >> Ddsa >> Dtoc >> Ddm;
        int Sdsa, Stoc, Sdm;
        cin >> Sdsa >> Stoc >> Sdm;

        int sum1 = Ddsa + Dtoc + Ddm;
        int sum2 = Sdsa + Stoc + Sdm;

        auto dragon = make_tuple(sum1, Ddsa, Dtoc, Ddm);
        auto sloth = make_tuple(sum2, Sdsa, Stoc, Sdm);

        if (dragon > sloth)
        {
            cout << "DRAGON" << endl;
        }
        else if (dragon < sloth)
        {
            cout << "SLOTH" <<endl;
        }
        else
        {
            cout << "TIE" <<endl;
        }
    }
}
