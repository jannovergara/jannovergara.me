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
  - "bash scripting"
  - "R"
description: "Understanding RegEx on different languages"
---
It would take a healthy amount of time before a developer can be familiar with RegEx. In this post I'll show how to do RegEx on different programming languages.

![RegEx](./1.jpg)<sub>Photo from Unsplash</sub>

**The challenge**: Find from a collection of words or phrases, the word or phrase that contains the word "dog" but not "cat".

Contents of _sample.txt_:  
```
A great white dog.
Dogs are man's bestfriend.
It's a good cat with a dog mark.
There's a cat on the table.
```


In bash,  
```sh
$ grep -i "dog" sample.txt | grep -v -i "cat"
A great white dog.
Dogs are man's bestfriend.
```

In python,  
```python
$ sudo pip install grepfunc
$ python
>>> from grepfunc import grep
>>> infile = open('sample.txt', 'r')
>>> grep(grep(infile, "dog", i=True), "cat", v=True)
['A great white dog.', "Dogs are man's bestfriend."]
```

In R,
```r
$ r
> infile <- read.delim("sample.txt", header=FALSE)
> dogscats <- lapply(infile, function(x) grep("dog", x, ignore.case=TRUE, value=TRUE))
> lapply(dogscats, function(x) grep("cat", x, ignore.case=TRUE, value=TRUE, invert=TRUE))
$V1
[1] "A great white dog."         "Dogs are man's bestfriend."
```

Cheers!