#include<stdio.h>
#include <stdlib.h>

struct Node{
    int val;
    struct Node* left;
    struct Node* right;
};

struct Node* newNode(int item){
    struct Node* temp = (struct Node*)malloc(sizeof(struct Node*));
    temp->val = item;
    temp->left = temp->right = NULL;

    return temp;
};

void printTree(struct Node* root){
    if(root->left){
        printTree(root->left);
    }
    printf("%d ->", root->val);
    if(root->right){
        printTree(root->right);
    }
}

void preorder(struct Node* root){
    printf("%d ->", root->val);
    if(root->left){
        preorder(root->left);
    }
    if(root->right){
        preorder(root->right);
    }
}

void postorder(struct Node* root){
    if(root->left){
        postorder(root->left);
    }
    if(root->right){
        postorder(root->right);
    }
    printf("%d ->", root->val);
}

int main(){
    struct Node* root = newNode(10);
    struct Node* first = newNode(8);
    struct Node* second =  newNode(7);
    struct Node* third =  newNode(9);
    struct Node* fourth =  newNode(12);
    struct Node* fifth =  newNode(13);
    struct Node* sixth =  newNode(11);
    
    root->left = first;
    root->left->left = second;
    root->left->right =  third;
    root->right = fourth;
    root->right->left = sixth;
    root->right->right = fifth;

    printTree(root);
    printf("\n");
    preorder(root);
    printf("\n");
    postorder(root);

    return 0;
}