#include <iostream>
#include <vector>

using namespace std;

long long count(long long *num) {
  int ld = *num % 10;
  *num /= 10;

  return ld;
}

int main() {
  cout << "Enter a Number: ";
  long long num;
  cin >> num;
  vector<int> arr(10, 0);
  while (num != 0) {
    int digit = count(&num);
    arr[digit]++;
  }
  cout << "The Number has \n";
  for (int i = 0; i < 10; i++) {
    if (arr[i] != 0) {
      cout << i << ": " << arr[i] << endl;
    }
  }

  return 0;
}