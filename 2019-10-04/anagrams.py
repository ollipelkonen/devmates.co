
#  Problem of the day
#  
#  Given an array of strings, group anagrams together.
#  
#  Example:
#  
#                        
#    Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
#    Output: 
#      [
#        ["ate","eat","tea"],
#        ["nat","tan"],
#        ["bat"]
#      ]

import json


Input = ["eat", "tea", "tan", "ate", "nat", "bat"]


dic = dict()
for a in Input:
  key = ''.join(sorted(a)) 
  if not key in dic:
    dic[key] = [a]
  else:
    dic[key].append(a)

output = list(dic.values())

print(output)

