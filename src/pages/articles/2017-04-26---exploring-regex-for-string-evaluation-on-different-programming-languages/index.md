---
title: Exploring RegEx for string evaluation on different programming languages
date: "2017-04-26T16:01:18.952Z"
layout: post
draft: false
path: "/posts/exploring-regex-for-string-evaluation-on-different-programming-languages/"
category: "RegEx"
tags:
  - "C"
  - "C++"
  - "Python"
  - "Bash scripting"
description: "Understanding RegEx on different languages"
---
It would take a healthy amount of time before a developer can be familiar with RegEx. In this post I'll show how to do RegEx on different programming languages.

![Travis-CI](./1.jpg)<sub>Photo from Unsplash</sub>

**The challenge**: Find from a collection of words or phrases, the word or phrase that contains the word "dog" but not "cat".

Contents of _sample.txt_:  
```
A great white dog.
Dogs are man's bestfriend.
It's a good cat with a dog mark.
There's a cat on the table.
```


In bash,  
```
$ grep -i "dog" sample.txt | grep -v -i "cat"
A great white dog.
Dogs are man's bestfriend.
```

In python,  
```
$ sudo pip install grepfunc
$ python
>>> from grepfunc import grep
>>> infile = open('sample.txt', 'r')
>>> grep(grep(infile, "dog", i=True), "cat", v=True)
['A great white dog.', "Dogs are man's bestfriend."]
```

Cheers!