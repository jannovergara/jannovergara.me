---
title: Understanding the open for extension, closed for modification principle
date: "2013-09-24T14:11:08.615Z"
layout: post
draft: false
path: "/posts/understanding-the-open-for-extension-closed-for-modification-principle/"
category: "Design Principles"
tags:
  - "SOLID"
  - "C++03"
description: "In this portion of our series on SOLID development we will learn how to work with the open closed principle that helps to promote code scalability."
---
Software elements e.g. classes, modules, functions, etc. should be open for extension, but closed for modification. The design and writing of the code should be done in a way that new functionality should be added with minimum changes in the existing code.

The concept may seem really easy, however, one may find that this is the type of design to be practiced with repetition much like any other advanced development task.

![OCP.](./1.jpg)<sub>Photo from Unsplash</sub>

One best design that conforms with OCP is the idea of a class and creating an instance of class. It allows scalability of the base class. Let's take for example a aircraft carrier class.

```cpp
class AircraftCarrier {
private:
  std::string name_;
public:
  std::string GetName(){ return name_; }
  void SetName(std::string name){ name_ = name; }
};

AircraftCarrier nimitz;
nimitz.SetName("Kennedy");
AircraftCarrier stobar;
stobar.SetName("Kuznetsov");
AircraftCarrier stovl;
stovl.SetName("HarrierJumpJet");
```

Simply put, we're able to create three different _AircraftCarrier_ objects and we're able to modify each name attribute. We didn't directly modify the _AircraftCarrier_ class to change the name. This is an excellent example for describing OCP.