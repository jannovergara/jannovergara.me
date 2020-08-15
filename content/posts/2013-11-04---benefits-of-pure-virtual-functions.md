---
title: Benefits of pure virtual functions
date: "2013-11-04T02:13:20.271Z"
template: "post"
draft: false
slug: "benefits-of-pure-virtual-functions"
category: "Design Principles"
tags:
    - "Pure Virtual"
    - "C++03"
description: "Here we discuss the importance of pure virtual functions."
socialImage: "/media/post-8-1.jpg"
---

Have you ever used pure virtual functions before?

![Pure virtual](/media/post-8-1.jpg "Horses")<sub>Photo from Unsplash</sub>

Pure virtual functions are used to make the class abstract, so that it can't be instantiated, but a child class can override the pure virtual methods to form a concrete class. A **pure virtual function** (or abstract function) in C++ is a virtual function for which we don't have implementation, we only declare it. A pure virtual function is declared *by assigning 0 in declaration*. This is a good way to define an interface in C++.

Let's take for example the _AnimalMovement_ class example with movement methods.

#### Good example

```cpp
class AnimalMovement {
public:
    virtual void walk() = 0;
    virtual void run() = 0;
}

class Movement : public AnimalMovement {
public:
    void walk();
    void run();
};
```
_AnimalMovement_ serves as the abstract class with *pure virtual functions* _run_ and _walk_. Then, the child class _Movement_ overrides the virtual methods to form a concrete implementation of the class.

Some important important facts:
1. A class is abstract if it has at least one pure virtual function.
2. We can have pointers and references of abstract class type.
3. If we do not override the pure virtual function in derived class, then derived class also becomes abstract class.
4. Abstract classes cannot be instantiated.


# Takeaway initiative
_"If you design your own language, there are a thousands of sort of amateur language designer pitfalls. - Guido van Rossum"_