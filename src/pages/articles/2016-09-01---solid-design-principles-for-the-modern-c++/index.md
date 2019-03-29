---
title: SOLID design principles for the modern C++
date: "2016-09-01T23:46:37.121Z"
layout: post
draft: false
path: "/posts/solid-design-principles-for-the-modern-c++/"
category: "Design Principles"
tags:
  - "design principle"
  - "c++"
description: "How does the SOLID design principle change in the modern C++ era?"
---
This is a series of posts explaining the fundamental principles of object-oriented programming for the modern C++ environment.

![Looking at a high level design.](./1.jpg)<sub>Photo from Unsplash</sub>

### Single responsibility principle
Sounds easy but the thing with defining a class is the tendency of most developers to add a lot of functionalities inside it. A good question to always remember when designing is, "What is main the responsibility of your class/component/microservice?" With this, it would be much easier to explain and understand the role of the class than having a lot of functions.

### Open for extension, closed for modification
Having a good understanding of SRP, basically a class would be defined with an intentional knowledge of its role, but eventually, there would be unnecessary instances to perform modifications on it. An extension would be fine, but altering the design of the class would not conform with OCP.

### Liskov substition principle
The principle suggests that objects of a base class can be substituted with objects of its derived classes without breaking the applicaiton. This means that the objects of derived classes behave in a similar way as the base classes.

### Interface segregation principle
The ability to separate into much smaller interfaces from a bigger interface is the main characteristic of ISP. It splits the interface packed with methods sometimes unnecessary into separate interfaces.

### Dependency inversion principle
Both the high-level and low-level modules depend on abstractions, and not from each other. This results in the inversion thinking that low-level should depend on high-level etc.