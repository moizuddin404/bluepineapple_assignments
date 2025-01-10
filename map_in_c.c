//Implementing map in c using two arrays -> keys[][] values[]
//keys[][] array is 2D because it can store strings

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAX_SIZE 100
//Global Variables required: three
int size = 0;
char keys[MAX_SIZE][100];
int values[MAX_SIZE];

//functions required

//1. helper
int getIndex(char key[]){
    for(int i=0; i<size; i++){
        if(strcmp(keys[i], key)==0){
            return i;
        }
    }
    return -1;
}

//2. insert / update
void insert(char key[], int value){
    int index = getIndex(key);
    if(index == -1){
        strcpy(keys[size], key);
        values[size] = value;
        size++;
    }else{
        values[index] = value;
    }
}

//3. getting value of a key
int get(char key[]){
    int index = getIndex(key);
    if(index == -1){
        return -1;
    }
    return values[index];
}

//4. full map printing function
void printmap(){
    for(int i=0; i<size; i++){
        printf("%s: %d\n", keys[i], values[i]);
    }
}


int main(){
    insert("moiz", 4);
    insert("mshaikh", 6);
    insert("arif", 4);

    int ans = get("arif");
    printf("%d ", ans);
    printf("\n");
    printmap();

    return 0;
}