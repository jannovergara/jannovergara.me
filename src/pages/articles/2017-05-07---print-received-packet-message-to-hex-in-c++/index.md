---
title: Print received packet message to hex in C++
date: "2017-05-07T17:14:10.198Z"
layout: post
draft: false
path: "/posts/print-received-packet-message-to-hex-in-c++/"
category: "Code"
tags:
  - "c++"
description: "Displaying hexadecimal numbers are surprisingly tricky. This is a quick reference on how to display hex numbers."
---
![Git branch](./1.jpg)<sub>Photo from Unsplash</sub>

Print a char or a collection of chars as a hexadecimal string in C++ using code below:

```cpp
#include <iostream>
char packet[8];
// operation on getting packet message
for(int i=0; i<8; i++) std::cout<<" "<<std::uppercase<<std::hex<<(int)packet[i];
```