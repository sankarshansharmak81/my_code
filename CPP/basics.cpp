#include <bits/stdc++.h>
using namespace std;

bool prime(int n)

{
  for (int i =2; i*i <=n-1; i++)
  
    if(n%i==0) return false;
    return n >1;
  
}


void sieve (int n){
  bool primes[n+1];
  fill(primes,primes+n+1,true);

  primes[0] = primes[1] = false;

  for(int i =2; i <=n; i++)
  {
    if (primes[i]) cout << i << endl; 
    { 
      for (int j = i*i; j <= n; j+= i)
      {
        primes[j] = false;
      }
      
    }
    
  }
}


void trial(int n)
{
for (int i = 2; i*i <= n; i++)
{
 while (n%i==0)
 {
  cout << i << endl;
  n /= i;
 }
 
}
if(n != 1 )
{
  cout << n << endl;
}

}




int main() {
int n; cin >> n;
trial(n);
}












// char c ; cin>> c;
// if(char(c)==122)
// {
//   cout << "a"<< endl;
// }
// else
// cout << char(c+1);
// }












//   long long x , y ,k; cin >> x >> y >> k;

//   if (x % k==0 && y % k==0)
//   {
//     cout << "Both" << endl;
//   }
//   else if (x % k==0 && y % k !=0)
//   cout << "Memo" << endl;
//   else if (x % k !=0 && y % k ==0)
//   cout << "Momo" << endl;
//   else if (x % k !=0 && y % k !=0 )
//   cout <<"No One" << endl;
  
// }

// long long x, p; cin >> x >> p;
// long double price = 1-(x*1.0/100);





// cout  << fixed << setprecision(2) << float(p/price);


// }











// long double x; cin >> x;
// if(x*1== int(x))
// {
//   cout << "int " << x;
// }
// else
// { 
//   cout << "float " << int(x) << " " <<  fixed << setprecision(3) <<  float(x)-int(x); 
// }
// }





















//     long long l1, r1, l2, r2;
//     cin >> l1 >> r1 >> l2 >> r2;

//     // If the intervals overlap
//     if (r1>= l2 && r2 >=l1) {
//         cout << max(l1,l2)<< " " << min(r1,r2)  // Print the overlapping range
//     } else {
//         cout << -1;  // No overlap
//     }

//     return 0;
// }






// int main() {
//     long long a, b, c, d;
//     cin >> a >> b >> c >> d;

//       long long result = (((a % 100) * (b % 100) % 100) * (c % 100) % 100) * (d % 100) % 100;
    
    
//     cout << setw(2) << setfill('0') << result;
// }




// {
//     long long a, b, c, d;
//     cin >> a >> b >> c >> d;

//     if ((b * log(a)) > (d * log(c))) 
//         cout << "YES";
//     else if ((b * log(a)) <= (d * log(c))) 
//         cout << "NO";
// }

    



//     double x; cin >> x;

//     if( x >=0 && x <= 25)
//     {
//         cout << "Intervsl [0,25]";

//     }
//    else if( x > 25 && x <= 50)
//    {
//      cout << "Intervsl (25,50]";
//    }
//    else if (  x > 50 && x <= 75)
//    {
//        cout << "Intervsl (50,75]";
//    }
//    else if ( x > 75 && x <= 100)
//    {
//        cout << "Intervsl (75,100]";
//    }
//    else if (x < 0 || x > 100 )
//    {
//       cout << "Out of Intervals." ;
//    }

// }

//  long long n; cin >> n;

//  long long year = n /365;
//  long long month = (n% 365)/30;
//  long long days = (n%365) %30;
// //  long long month = (n-(year * 365) )  /30;
// //  long long days =  (n-(year * 365)-(month*30)) ;

//  cout << year << " years" << endl;
//  cout << month << " month" << endl;
//  cout << days << " days" << endl;

//  }

//  cout  <<  days << " days" << endl;

//     string s;  cin >> s;

//      for (auto i :s)
//      {
//         i= tolower(i);

//        if (!(i == 'a' || i ==  'e' || i == 'i' || i == 'o' || i=='u'|| i == 'y'))
//        {
//         cout << '.' << i ;

//        }

//      }

//      cout << endl;
// }

// {
//   string s ,t; cin >>s >> t;

//   for (int i = 0; i < s.length(); i++)
//   {
//     s[i] = tolower(s[i]);
//     t[i] = tolower(t[i]);
//   }

//   if (s == t)
//   {

//     cout << "0";
//   }
//   else if (s < t)
//   {
// cout << "-1";
//   }
//   else
//   {
//     cout << "1";
//   }

//   }

// {
//     int tc; cin >> tc;

//     while (tc--)
//     {
//         string s ; cin >> s;

//         int n =s.length();

//         if (n > 10)
//         {
//             cout << s[0] << n-2 << s[n-1]  << endl;
//         }
//         else{
// cout << s << endl;
//         }

//     }

//     long double x , y; cin >> x >> y;
//     if (x==0 && y==0)
//     {
//         cout << "Origem";
//     }
//     else if ( y == 0)
//     {
//         cout << "Eixo X";
//     }

//      else if (x == 0 )
//     {
//         cout << "Eixo Y";
//     }

//     else if (x > 0 && y > 0)
//     {
//        cout << "Q1";
//     }

//  else if (x < 0 && y > 0)
//     {
//        cout << "Q2";
//     }
//     else if (x < 0 && y < 0)
//     {
//        cout << "Q3";
//     }
//     else if (x > 0 && y < 0)
//     {
//        cout << "Q4";
//     }

// }

//  long long x ; cin >> x;

//   while (x >= 10 )
//   {
//       x = x /10;

//   }
//   if (x%2==0)
//   {
//    cout << "EVEN";
//   }
//   else
//   {
//     cout << "ODD";
//   }

// }

//  long long a,b; cin >> a >> b;

//  cout << "Floor " << a << " / " << b << " = " << a/b << endl;

//   if (a%b == 0) {
//     cout << "Ceil " << a << " / " << b << " = " << (a/b)  << endl;
//   }
// else
//  {
//     cout << "Ceil " << a << " / " << b << " = " << (a/b) + 1 << endl;

//  }
//  cout << "round " << a << " / " << b << " = " << int((a*1.0/b) + 0.5) << endl;

//  }
