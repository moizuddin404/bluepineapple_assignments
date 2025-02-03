#include <iostream>
using namespace std;

int binarySearch(int arr[], int n, int x) {
  int left = 0, right = n - 1;

  while (left <= right) {
    int mid = left + (right - left) / 2;
    if (arr[mid] == x) {
      return 1;
    } else if (arr[mid] > x) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

int main() {
  int arr[] = {2, 3, 5, 9, 12, 25, 40, 61, 88, 96, 100, 126, 333, 365, 500};
  int n = sizeof(arr) / sizeof(arr[0]);
  int x;
  cout << "Enter number to find: ";
  cin >> x;

  int ans = binarySearch(arr, n, x);
  // cout << ans;

  ans == 1 ? cout << "found!\n" : cout << "not found\n";

  return 0;
}