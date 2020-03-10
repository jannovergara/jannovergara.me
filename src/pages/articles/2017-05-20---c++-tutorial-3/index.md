---
title: C++ Tutorial 3
date: "2017-05-20T04:19:07.410Z"
layout: post
draft: false
path: "/posts/c++-tutorial-3/"
category: "C++ Tutorial"
tags:
  - "C++"
  - "C++11"
description: "How to do simple exception handling?"
---
In this tutorial, we will show how basic exception handling is implemented.

![Tutorial3](./1.jpg)<sub>Photo from Unsplash</sub>

C++ code.

```cpp
// main.cpp

#include <iostream>
#include <iomanip>

int main() {

    // Basic example #1
    double num1 = 0, num2 = 0;

    std::cout << std::fixed << std::setprecision(2);
    std::cout << "Enter integer number 1 : ";
    std::cin >> num1;
    std::cout << "Enter integer number 2 : ";
    std::cin >> num2;

    try {
        if (num2 == 0) {
            throw "This is undefined behavior.";
        } else {
            std::cout << num1 << " / " << num2 << " = " << num1 / num2 << std::endl;
        }
    }
    catch (const char *exc) {
        std::cout << "Error.. " << exc << std::endl;
    }

    // Basic example #2
    // Another way to throw exception
    try {
        std::cout << "Let's throw this exception.." << std::endl;
        throw std::runtime_error("An error has occurred..");

        // What is the behavior for this?
        std::cout << "Will you print me?" << std::endl;
    }
    
    // All exceptions are based on std::exception
    catch (std::exception &exp) {
        
        // what() Prints an explanatory string
        std::cout << "Handled Exception : " <<  exp.what() << std::endl;
    }
    
    // If exceptions aren't caught any place else 
    // this will catch it
    catch (...) {
        std::cout << "Default exception catch" << std::endl;
    }

    return 0;
}
```

## Compile and run,
```bash
$ g++ -std=c++11 main.cpp
$ ./a.out
Enter integer number 1 : 2
Enter integer number 2 : 3
2.00 / 3.00 = 0.67
Let's throw this exception..
Handled Exception : An error has occurred..
```