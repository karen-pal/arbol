import matplotlib
matplotlib.use('Agg')

from nltk.corpus import wordnet as wn
from nltk.corpus import knbc, jeita

import networkx as nx
import matplotlib.pyplot as plt
import sys
#
from flask import Flask, request, jsonify
import logging
from flask_cors import CORS
import requests
import time
#

app = Flask(__name__)
CORS(app)
plt.style.use('dark_background')
params = {"ytick.color" : "white",
          "xtick.color" : "white",
          "axes.labelcolor" : "white",
          "axes.edgecolor" : "white",
          "text.color":"white"}
plt.rcParams.update(params)
def graph(word):
    def closure_graph(synset, fn):
        seen = set()
        graph = nx.DiGraph()
        def recurse(s):
            if not s in seen:
                seen.add(s)
                graph.add_node(s.name())
                for s1 in fn(s):
                    graph.add_node(s1.name())
                    print(s1.name()) 
                    graph.add_edge(s.name(), s1.name())
                    recurse(s1)

        res_amount = recurse(synset)
        return graph,len(seen)

    #word = sys.argv[1]

    dog = wn.synsets(word)[0]
    print(type(dog))
    print(dir(dog))
    G_hypo, length_hypo = closure_graph(dog,
                          lambda s: s.hyponyms())
    G_hyper, length_hyper = closure_graph(dog,
                          lambda s: s.hypernyms())

    res = [{"name":"hypo", "obj":G_hypo, "len":length_hypo}, {"name":"hyper", "obj":G_hyper, "len":length_hyper }]
    print("hypo got ", length_hypo)
    print("hyper got ", length_hyper)

    G = max(res, key=lambda x:x["len"])["obj"]

    index = nx.betweenness_centrality(G)
    plt.rc('figure', figsize=(20, 10))
    node_size = [index[n]*5000 for n in G]
    pos = nx.spring_layout(G)
    nx.draw_networkx(G, pos, node_size=node_size, edge_color='r', alpha=.6, linewidths=.2, font_color="whitesmoke")
    plt.show()
    plt.savefig('output_word.png',bbox_inches='tight')
    plt.close()
    print("drawn in disk")
    return

# while True:
#     word = input()
#     plt.close('all')
#     graph(word)

@app.route('/exec', methods=['GET', 'POST','DELETE', 'PATCH'])
def exec():
    words = request.json["element"]
    app.logger.info(words)
    try:
        graph(words)
        graph(words)
    except:
        pass
    return ''

if __name__ == '__main__':
    app.run(debug=True)
