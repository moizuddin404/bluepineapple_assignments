//2-D Matrix Multiplication
#include <iostream>
#include <vector>

using namespace std;

int main(){
    vector<vector<int>> m1 = {{1,2,1},
                             {2,3,2}};
                             
    vector<vector<int>> m2 = {{1,1},
                             {2,3},
                             {4,5}};

//multiplying m1 x m2  
int r_m1 = m1.size();
int c_m1 = m1[0].size();

int r_m2 = m2.size();
int c_m2 = m2[0].size();

vector<vector<int>> res;
res.resize(r_m1, vector<int>(c_m2,0)); //if not resized gives segmentation fault so i had to resize the vector

   if(c_m1 == r_m2){
       for(int i=0; i<r_m1; i++){
           for(int j=0; j<c_m2; j++){
               for(int k=0; k<c_m1; k++){
                   res[i][j] += m1[i][k] * m2[k][j]; 
               }
           }
       }
       
   }else{
       cout<<"This operation is Invalid";
   }
   for(int i=0; i<res.size(); i++){
           for(int j=0; j<res[0].size(); j++){
               cout << res[i][j] << " ";
           }
           cout << endl;
       }
    
    return 0;
}