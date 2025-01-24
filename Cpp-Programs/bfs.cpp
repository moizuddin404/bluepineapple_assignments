// bfs of graph

#include <iostream>
#include <queue>
#include <vector>

using namespace std;

void addEdge(vector<vector<int>> &adj, int u, int v)
{
    adj[u].push_back(v);
    adj[v].push_back(u);
}

int main()
{

    int numOfVertices = 5;
    vector<vector<int>> adjarr(numOfVertices);
    addEdge(adjarr, 0, 4);
    addEdge(adjarr, 1, 2);
    addEdge(adjarr, 0, 1);
    addEdge(adjarr, 2, 3);
    addEdge(adjarr, 1, 3);

    for (auto &i : adjarr)
    {
        for (auto &j : i)
        {
            cout << j << " ";
        }
    }

    return 0;
}