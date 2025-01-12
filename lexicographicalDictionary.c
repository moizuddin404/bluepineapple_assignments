#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAX_SIZE 100

typedef struct Node {
    char word[MAX_SIZE];
    char definition[MAX_SIZE];
    struct Node* next;
} Node;

int main() {
    
    Node* newNode = (Node*)malloc(sizeof(Node));
    if (!newNode) {
        printf("Memory allocation failed for newNode\n");
        return 1;
    }

    
    strcpy(newNode->word, "cliche");
    strcpy(newNode->definition, "a word or phrase");
    newNode->next = NULL;

    
    Node* newNode2 = (Node*)malloc(sizeof(Node));
    if (!newNode2) {
        printf("Memory allocation failed for newNode2\n");
        free(newNode); 
        return 1;
    }

    
    strcpy(newNode2->word, "sentence");
    strcpy(newNode2->definition, "a meaningful collection of words");
    newNode2->next = NULL;

    
    newNode->next = newNode2;

    
    Node* temp = newNode;
    while (temp) {
        printf("\n%s: %s", temp->word, temp->definition);
        temp = temp->next;
    }

    
    free(newNode2);
    free(newNode);

    return 0;
}
