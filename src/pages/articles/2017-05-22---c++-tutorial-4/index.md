---
title: C++ Tutorial 4
date: "2017-05-22T12:01:10.369Z"
layout: post
draft: false
path: "/posts/c++-tutorial-4/"
category: "C++ Tutorial"
tags:
    - "C"
    - "C++"
    - "Multithreading"
description: "Using C++ classes in POSIX pthread_create function."
---
In this tutorial, we will show how to implement a basic POSIX pthread_create threading using C++ classes.

![Git branch](./1.jpg)<sub>Photo from Unsplash</sub>

C++ code.

```cpp
// main.cpp

#include <pthread.h>
#include <iostream>
class C
{
public:
    void *hello(void)
    {
        std::cout << "Hello, world!" << std::endl;
        return 0;
    }
    static void *hello_helper(void *context)
    {
        return ((C *)context)->hello();
    }
};

int main() {
    C c;
    pthread_t t;
    pthread_create(&t, NULL, &C::hello_helper, &c);
    pthread_join(t, NULL);
    return 0;
}
```

## Compile and run,
```bash
$ g++ main.cpp -lpthread
$ ./a.out
Hello, world!
```