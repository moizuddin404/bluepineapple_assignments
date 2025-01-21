#include <iostream>
#include <string>
#include <algorithm>

using namespace std;

string toHexa(int num);

int main()
{
    string s;
    cout << "Enter string to Encrypt: ";
    cin >> s;

    if (!s.empty())
    {

        string ans = "";

        for (int i = 0; i < s.length(); i++)
        {
            int count = 0;
            char c = s[i];
            while (s[i] == c)
            {
                count++;
                i++;
            }
            i--;
            cout << count << endl;
            string hex = toHexa(count);
            cout << hex << endl;
            ans = hex + c + ans;
        }

        cout << "Encrypted: " << ans;
    }
    return 0;
}

string toHexa(int n)
{
    string res = "";
    while (n > 0)
    {
        int ld = n % 16;
        if (ld < 10)
        {
            res += to_string(ld);
        }
        else
        {
            switch (ld)
            {
            case 10:
                res += 'a';
                break;
            case 11:
                res += 'b';
                break;
            case 12:
                res += 'c';
                break;
            case 13:
                res += 'd';
                break;
            case 14:
                res += 'e';
                break;
            case 15:
                res += 'f';
                break;
            }
        }
        n = n / 16;
    }
    reverse(res.begin(), res.end());

    return res;
}
/*
cases

aaaaaaaa -> a8 -> 8a
aaabbcd -> a3b2c1d1 -> 3a2b1c1d

 */