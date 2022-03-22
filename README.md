arbol
============

¿¿¿????

Entorno de generación de ASTs en vivo

para performance en vivo con Marmotas Dream

Software MADE IN CÓRDOBA, ARGENTINA

Maxima SEMIOSIS

por KAREN PALACIO aka kardaver

# Instalar y Correr

> Muchos prerequisitos (estàs avisade)

Crear virtualenv con requerimientos de requirements.txt

`
pip install -r requirements.txt
`


Mantener corriendo stanford core NLP  server (en port 9000)
`
java -mx4g -cp "*" edu.stanford.nlp.pipeline.StanfordCoreNLPServer -port 9000 -timeout 15000
` 

Tener abierta index.html en un navegador

levantar servidor de python

`
python3 syntax_tree.py
`

WIP: espera inputs desde consola

`
python3 word_graph.py
`


# Recursos

* [hyponym graph copy pasted from](https://stackoverflow.com/questions/39824133/networkx-and-wordnet)
