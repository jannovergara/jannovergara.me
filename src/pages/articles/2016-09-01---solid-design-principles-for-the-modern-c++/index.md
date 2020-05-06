---
title: SOLID design principles for the modern C++
date: "2016-09-01T23:46:37.121Z"
layout: post
draft: false
path: "/posts/solid-design-principles-for-the-modern-c++/"
category: "Design Principles"
tags:
    - "SOLID"
description: "How does the SOLID design principle change in the modern software development?"
---
This is a series of entries explaining the fundamental principles of object-oriented programming to the modern C++ development. How to design classes? How to design objects? How to design relationships between classes and objects?

Why do we need a design? It is because the only consistent thing about a software is that it always **change**. Many times, clients do not know their requirements. Technology also change, and it changes a lot. It is always going to change. So designers and developers have to accommodate future changes while they are creating the present day software.

All these design philosophies are based on three things:
1. DRY - Do not repeat yourself. It is one of the most important things. It is based on the knowledge that software is constantly changing. For example, imagine that a piece of code is duplicated across five different classes, five different functions. And now, that code needs to be changed. Where will it be modified? It will then be modified at five different places where the code was duplicated. However, if that similar piece of code was extracted into a single and reusable component, it will only be modified at a single place only.
2. Divide and Conquer - Whenever the file size of the code gets bigger and bigger, think about the concept of divide and conquer. It is influenced by the philosophy that the software will constantly change. There will be an additional code, added functionality, remove some code, and again add something new to the existing code base.
3. Expect Change

Accordingly, the designer or the developer will have the the coding habits, design habits with the above philosophy in mind. The code will have to accomodate change without destroying the existing working functionality.

On that note, let us discuss some guidelines known as the SOLID principles for OOP.

![Looking at a high level design.](./1.jpg)<sub>Photo from Unsplash</sub>

### Single responsibility principle
Sounds easy but the thing with defining a class is the tendency of most developers to add a lot of functionalities inside it. A good question to always remember when designing is, "What is main the responsibility of your class/component/microservice?" With this, it would be much easier to explain and understand the role of the class than having a lot of functions.

### Open for extension, closed for modification
Having a good understanding of SRP, a class would basically be defined with an intentional knowledge of its role, but eventually, there would be unnecessary instances to perform modifications on it. An extension would be fine, but altering the design of the class would not conform with OCP.

### Liskov substition principle
The principle suggests that objects of a base class can be substituted with objects of its derived classes without breaking the application. This means that the objects of derived classes behave in a way similar to the base class.

### Interface segregation principle
The ability to separate into much smaller interfaces from a bigger interface is the main characteristic of ISP. It splits the interface, sometimes packed with diverse methods, into separate interfaces.

### Dependency inversion principle
Both the high-level and low-level modules depend on abstractions, and not from each other. This results in the inversion thinking that low-level modules should depend on high-level etc.