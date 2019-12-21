#include <iostream>
#include <tuple>
#include <memory>
#include <vector> 
class Node
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
  void setNextPointers( std::shared_ptr<Node> root )
  {
    std::vector<std::vector<std::shared_ptr<Node>>> store{};
    createStore( store, root );
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
  root->setNextPointers( root );
}

