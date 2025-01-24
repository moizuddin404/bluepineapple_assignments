#include<iostream>
#include <string>
#include <map>

using namespace std;

bool isthere(map<string, int> mp, string x){
    if(mp.find(x)==mp.end())
        return false;
    else
        return true;
} 

int main(){
    string para = "C++ is a popular programming language. C++ is used to create computer programs, and is one of the most used language in game development.";
    map<string, int> freq;
    string temp="";
    for(int i=0; i<para.length(); i++){
        
        if(!isspace(para[i])){
            temp +=para[i];
        }else{
            int check = isthere(freq, temp);
            if(check){
                freq[temp]++;
            }else{
                freq[temp] = 1;
            }
            temp="";
        }
    }
    
   map<string, int>::iterator it = freq.begin();
   while(it != freq.end()){
    cout << it->first <<" : " <<it->second <<endl;
    it++;
   }

    return 0;
}