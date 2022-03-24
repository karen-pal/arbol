from nltk.parse.corenlp import CoreNLPParser
from nltk.draw.tree import TreeView
from nltk.draw import TreeWidget
from nltk import Tree
from nltk.draw.util import CanvasFrame
from nltk.parse.corenlp import CoreNLPDependencyParser
import os
import sys
from flask import Flask, request, jsonify
import logging
from flask_cors import CORS
import requests
import matplotlib
matplotlib.use('Agg')
from matplotlib import pyplot as plt
import time

app = Flask(__name__)
CORS(app)


def draw_syntax_tree(text="Have you practised so long to learn to read?"):
    app.logger.info("aca adentro")
    parser = CoreNLPParser()
    cf = CanvasFrame()
    #text = sys.argv[1] 
    #text = "Have you practised so long to learn to read?"
    parse = next(parser.raw_parse(text))
    #print(dir(TreeView(parse)._cframe))
    tc = TreeWidget(cf.canvas(),parse)
    tc['node_font'] = 'helvetica 14 '
    tc['leaf_font'] = 'helvetica 14 bold'
    tc['node_color'] = '#FFFFFF'
    tc['leaf_color'] = '#3F8F57'
    tc['line_color'] = '#175252'
    cf.add_widget(tc,10,10) # (10,10) offsets
    cf.print_to_file('output_test.ps')
    cf.destroy('all')
    app.logger.debug("AAAAAAAAAAAAA antes de convert")
    convert_to_png = "gs -dSAFER -dEPSCrop -r600 -sDEVICE=pngalpha -o output_test.svg output_test.ps"
    app.logger.debug("BBBBBBBBBBBBB despues de convert")
    os.system(convert_to_png)
    app.logger.info("drawn")

def draw_dep_tree():

    parser = CoreNLPDependencyParser()
    cf = CanvasFrame()
    text = sys.argv[1] #"Have you practised so long to learn to read?"
    parse = next(parser.raw_parse(text))
    tc = TreeWidget(cf.canvas(),parse)
    print(tc, dir(tc))
    tc['node_font'] = 'arial 14 bold'
    tc['leaf_font'] = 'arial 14'
    tc['node_color'] = '#005990'
    tc['leaf_color'] = '#3F8F57'
    tc['line_color'] = '#175252'
    cf.add_widget(tc,10,10) # (10,10) offsets
    cf.print_to_file('tree3.ps')
    cf.destroy()


@app.route('/exec', methods=['GET', 'POST','DELETE', 'PATCH'])
def exec():
    app.logger.info(request.json["element"])
    draw_syntax_tree(text=request.json["element"])
    return ''

if __name__ == '__main__':
    app.run(debug=True)

#if __name__ == "__main__":
#    text=sys.argv[1]
#    print("python",text)
#    draw_syntax_tree(text)
