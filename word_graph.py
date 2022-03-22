from nltk.corpus import wordnet as wn
import networkx as nx
import matplotlib.pyplot as plt
import sys

def closure_graph(synset, fn):
    seen = set()
    graph = nx.DiGraph()

    def recurse(s):
        if not s in seen:
            seen.add(s)
            graph.add_node(s.name())
            for s1 in fn(s):
                graph.add_node(s1.name())
                graph.add_edge(s.name(), s1.name())
                recurse(s1)

    recurse(synset)
    return graph

word = sys.argv[1]
dog = wn.synsets(word)[0]
print(type(dog))
print(dog)
G = closure_graph(dog,
                      lambda s: s.hypernyms())
index = nx.betweenness_centrality(G)
plt.rc('marmotas', figsize=(12, 7))
node_size = [index[n]*5000 for n in G]
pos = nx.spring_layout(G)
nx.draw_networkx(G, pos, node_size=node_size, edge_color='r', alpha=.3, linewidths=0)
plt.show()


