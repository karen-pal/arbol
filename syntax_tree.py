from nltk.parse.corenlp import CoreNLPParser
from nltk.draw.tree import TreeView
from nltk.draw import TreeWidget
from nltk import Tree
from nltk.draw.util import CanvasFrame
from nltk.parse.corenlp import CoreNLPDependencyParser
import os
import sys
def draw_syntax_tree():
    parser = CoreNLPParser()
    cf = CanvasFrame()
    print(cf)
    print(dir(cf.canvas))
    text = sys.argv[1] #"Have you practised so long to learn to read?"
    parse = next(parser.raw_parse(text))
    #print(dir(TreeView(parse)._cframe))
    tc = TreeWidget(cf.canvas(),parse)
    print(tc, dir(tc))
    tc['node_font'] = 'arial 14 bold'
    tc['leaf_font'] = 'arial 14'
    tc['node_color'] = '#005990'
    tc['leaf_color'] = '#3F8F57'
    tc['line_color'] = '#175252'
    cf.add_widget(tc,10,10) # (10,10) offsets
    cf.print_to_file('output_test.ps')
    convert_to_png = "gs -dSAFER -dEPSCrop -r600 -sDEVICE=pngalpha -o output_test.png output_test.ps"
    os.system(convert_to_png)
    cf.destroy()

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

draw_syntax_tree()
