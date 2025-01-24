#include<iostream>

using namespace std;

int main(){
    int n, sum;
    cout << "Enter a Number: ";
    cin >> n;

    for(int i=1; i<=n; i++){
        sum = 0;
        for(int j=1; j<i; j++){
            if(i%j==0){
                sum += j;
            }
        }
        if(sum == i){
            cout << i << " ";
        }
        

    }


    return 0;
}