---
title: The Liskov substitution principle
date: "2016-09-25T01:20:32.098Z"
layout: post
draft: false
path: "/posts/the-liskov-substitution-principle/"
category: "Design Principles"
tags:
  - "SOLID"
  - "C++03"
description: "Expanding the idea behind Liskov substitution principle."
---
This principle is introduced by Barbara Liskov which states that **"objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program."**

If a program module is using a base class, then the reference to the base class can be replaced with a derived class without affecting the functionality of the program module or in other terms, without negative side effects.

![Liskov.](./1.jpg)<sub>Photo from Unsplash</sub>

Given a parent and its three children, any of the children should be able to substitute the parent in terms of providing the functionality as promised by the parent. 

In C++, we can describe this principle by creating a base class _Rectangle_ and inheriting to a _Square_ class.

```cpp
class Rectangle {
    int getHeight()
    void setHeight(int value)
    int getWidth()
    void setWidth(int value)
};

class Square : Rectangle {};
```