//Book Management System
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAX_SIZE 100

int size = 0; //static counter for map size
char bk_name[MAX_SIZE][100];
char athr_name[MAX_SIZE][100];



//getIndex
int getIndex(char key[]){
    for(int i=0; i<size; i++){
        if(strcmp(bk_name[i], key)==0){
            return i;
        }
    }
    return -1;
}
//insert/update
void insert(char key[], char val[]){
    int idx = getIndex(key);
    if(idx == -1){
        strcpy(bk_name[size], key);
        strcpy(athr_name[size], val);
        size++;
    }else{
        strcpy(bk_name[idx], key);
        strcpy(athr_name[idx], val);
    }
}
//delete
void deleteBook(char key[]){
    int idx = getIndex(key);
    if(idx == -1){
        printf("The book %s isn't there.\n", key);
        return;
    }else{
        for(int i=idx; i<size; i++){
            if(idx+1 < size){
                strcpy(bk_name[i], bk_name[i+1]);
                strcpy(athr_name[i], athr_name[i+1]);
            }
        }
        size--;
        printf("%s deleted from Collection.\n", key);
    }
}

//get
int get_author(char key[]){
    for(int i=0; i<size; i++){
        if(strcmp(bk_name[i], key)==0){
            return i;
        }
    }
    return -1;
}

//showLibrary
void showLibrary(){
    if(size==0){
        printf("Nothing in Yet!\n");
        return;
    }
    for(int i=0; i<size; i++){
        printf("%s: %s\n",bk_name[i],athr_name[i]);
    }
}


int main() {
    // Write C code here
    int choice=1;
   while(choice!=5){
        printf("\nHow may I help You?\n 1. View Books\n 2. Insert Book \n 3. Delete Book \n 4. Get Author Name \n 5. Exit \n Your Choice : ");
        scanf("%d", &choice);
         char insBook [50];
         char insAthr [50];
         char delBook [50];
        //  int insBook = malloc(MAX_SIZE+1);
        //  int insAthr = malloc(MAX_SIZE+1);

        switch(choice){
            case 1:
                showLibrary();
                break;
            case 2:
                getchar();
                printf("\nEnter Book's Name: ");
                fgets(insBook, 100, stdin);
                
                printf("\nEnter Author's Name: ");
                fgets(insAthr, 100, stdin);
                
                insert(insBook, insAthr);
                printf("\n%s Inserted", insBook);
                break;
            case 3:
                getchar();
                printf("\nWhich Book to remove? : ");
                fgets(delBook, sizeof(delBook), stdin);
                deleteBook(delBook);
                break;
            case 4:
                getchar();
                printf("\nWhose author are you searching for? ");
                fgets(insBook, MAX_SIZE, stdin);
                int auth = get_author(insBook);
                if(auth == -1){
                    printf("\nNothing Here!");
                }else{
                    printf("\n%s ",athr_name[auth]);
                }
                break;
            default:
                printf("Invalid Choice!");
            
        }
    }

    return 0;
}