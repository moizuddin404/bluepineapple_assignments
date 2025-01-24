#include<iostream>
#include<vector>

using namespace std;

int count(int *num){
    int ld = *num%10;
    *num /= 10; 

    return ld;
}

int main(){

    int num = 2121213;
    vector<int> arr(10,0);
    while(num!=0){
        int digit = count(&num);
        arr[digit]++;
    }

    for(int i=0; i<10; i++){
        if(arr[i]!=0){
            cout << i << ": " << arr[i] << endl;
        }
    }

    return 0;
}