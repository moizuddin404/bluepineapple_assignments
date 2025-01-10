// Online C++ compiler to run C++ program online
#include <bits/stdc++.h>

using namespace std;

int main() {
    unordered_map<int, string> units = {{0,""},{1,"one"},{2,"two"},{3,"three"},{4,"four"}, {5,"five"}, {6, "six"}, {7,"seven"}, {8,"eight"}, {9,"nine"}, {10,"ten"}, {11, "eleven"},{12, "twelve"},{13,"thirteen"},{14, "fourteen"},{15, "fifteen"},{16, "sixteen"},{17, "seventeen"},{18, "eighten"},{19, "nineteen"}};
    unordered_map<int, string> tens = {{0, ""}, {2, "twenty"}, {3,"thirty"},{4,"forty"},{5,"fifty"},{6,"sixty"},{7,"seventy"},{8,"eighty"},{9,"ninety"}};
    
    int num = 100000;
    string temp = (to_string(num));
    int len = temp.length();
    vector<int> numInArr(len, 0);
    string name = "";
    
    for(int i=len-1; i>=0; i--){
        int ld = num%10;
        numInArr[i] = ld;
        num /= 10;
    }
    
    for(int i=0; i<numInArr.size(); i++){

        if(len==9 && numInArr[i] == 1){
            int uni = numInArr[i]*10 + numInArr[i+1];
            name += units[uni] += " crore";
            len=len-2;
            i++;
        }
        else if (len==9){
            name += " " + tens[numInArr[i]];
            --len;
        }
        else if(len == 8){
            name += " " + units[numInArr[i]] + " crore";
            --len;
        }
        else if(len == 7 && numInArr[i] == 1){
            int uni = numInArr[i]*10 + numInArr[i+1];
            name += units[uni] += " lakh";
            len=len-2;
            i++;
        }
        else if(len==7){
             name += " " + tens[numInArr[i]];
            --len;
        }
        else if(len==6){
            name += units[numInArr[i]] + " lakh";
            --len;
        }

        else if(len==5 && numInArr[i] == 1 ){
            int uni = numInArr[i]*10 + numInArr[i+1];
            name += " "+units[uni] += " thousand";
            len=len-2;
            i++;
        }
        else if(len==5){
            name += " " + tens[numInArr[i]];
            --len;
        }
        else if(len==4 && numInArr[i]!=0){
            name += " " + units[numInArr[i]] + " thousand";
            --len;
        }
        else if(len==3){
            name += " " + units[numInArr[i]] + " hundred";
            --len;
        }
        else if(len==2 && numInArr[i] == 1){
            int uni = numInArr[i]*10 + numInArr[i+1];
            name += " and " + units[uni];
            break;
        }
        else if(len==2){
            name += " and " + tens[numInArr[i]];
            --len;
        }
        else if(len==1){
            name += " " + units[numInArr[i]];
            --len;
            break;
        }
        
        
    }
    cout << name;

    return 0;
}