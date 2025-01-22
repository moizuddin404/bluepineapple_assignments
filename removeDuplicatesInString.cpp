#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main()
{
    string line;
    while (getline(cin, line))
    {

        cout << "Processed: " << line << endl;
    }
    return 0;
}
