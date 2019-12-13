/*
  Problem of the day

  You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

                      
   * // Definition for a Node.
   * function Node(val,left,right,next) {
   *    this.val = val;
   *    this.left = left;
   *    this.right = right;
   *    this.next = next;
   * };
                      
       
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.

  Input:
       1
     /   \
    2     3
   / \   / \
  4   5 6   7


  Output:
        1 -> Null
     /      \
    2   ->   3 -> Null
   /  \     / \
  4 -> 5 -> 6 -> 7 -> Null
  

*/


#include <iostream>
#include <tuple>
#include <memory>
#include <vector> 

class Node : public std::enable_shared_from_this<Node>
{
public:
  std::shared_ptr<Node> left, right, next;
  int val;
  Node(int value) : val(value), left(NULL), right(NULL), next(NULL) {}

  void addLeaves(int left, int right)
  {
    this->left = std::shared_ptr<Node>(new Node(left));
    this->right = std::shared_ptr<Node>(new Node(right));
  }

  void setNextPointers()
  {
    std::vector<std::vector<std::shared_ptr<Node>>> store{};
    createStore( store, shared_from_this() );
    for (int i = 0; i < store.size(); i++) 
      for (int j = 0; j < store[i].size()-1; j++) 
        store[i][j]->next = store[i][j+1];
    debugPrint( store );
  }

protected:
  void debugPrint( std::vector<std::vector<std::shared_ptr<Node>>> &store)
  {
    for (int i = 0; i < store.size(); i++) 
    {
      for (int j = 0; j < store[i].size(); j++) 
        if ( store[i][j]->next )
          std::cout << store[i][j]->val << "->" << store[i][j]->next->val  << " ";
        else
          std::cout << store[i][j]->val << "->null ";
      std::cout << "\n";
    }
  }

  void createStore( std::vector<std::vector<std::shared_ptr<Node>>> &store, std::shared_ptr<Node> n, int depth=0 )
  {
    if ( n == NULL )
      return;
    if ( store.size() <= depth )
      store.push_back( std::vector<std::shared_ptr<Node>>{} );
    store[depth].push_back( n );
    createStore( store, n->left, depth+1 );
    createStore( store, n->right, depth+1 );
  }
};


int main() {
  std::shared_ptr<Node> root( new Node(1) );
  root->addLeaves(2,3);
  root->left->addLeaves(4,5);
  root->right->addLeaves(6,7);

  root->setNextPointers();
}
