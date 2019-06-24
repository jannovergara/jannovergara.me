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
description: "exploring regex "
---
It would take hours for one developer to familiarize with RegEx. In this post I'll show how to do RegEx for different programming languages.

![Travis-CI](./1.jpg)<sub>Photo from Unsplash</sub>

The challenge: Find from a collection of words or phrases, the word or phrase that contains the word "dog" but not "cat".

bash:
grep -i "dog" sample.txt | grep -v -i "cat"