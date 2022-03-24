#!/bin/sh

while true; do
  nohup python3 syntax_tree.py >> test.out
done &
