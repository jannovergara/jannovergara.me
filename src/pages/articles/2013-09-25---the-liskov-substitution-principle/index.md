---
title: The Liskov substitution principle
date: "2013-09-25T01:20:32.098Z"
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

Let's take a look at the bird class with virtual functions to get and set its latitude and longitude locations. We also know that birds fly so we are also interested with the altitude information.

#### Bad example

```cpp
class Bird {
public:
  virtual double GetLatitude() const = 0;
  virtual void SetLatitude(double) = 0;
  virtual double GetLongitude() const = 0;
  virtual void SetLongitude(double) = 0;
  virtual double GetAltitude() const = 0;
  virtual void SetAltitude(double) = 0;
};

class Penguin : public Bird { 
public:
  double GetLatitude();
  void SetLatitude(double);
  double GetLongitude();
  void SetLongitude(double);
  double GetAltitude(); // not okay representation
  void SetAltitude(double);
};
```

For most types of birds, we can allow the bird type to be represented by this class. However, for non-flying type of birds like penguin or ostrich, the altitude information will not mean that much. So to provide a solution to this and follow LSP, we can create an additional class that will better represent flying types of birds.

#### Good example

```cpp
class Bird {
public:
  virtual double GetLatitude() const = 0;
  virtual void SetLatitude(double) = 0;
  virtual double GetLongitude() const = 0;
  virtual void SetLongitude(double) = 0;
};

class FlyingBird : public Bird {
public:
  virtual double GetAltitude() const = 0;
  virtual void SetAltitude(double) = 0;
};

class Dove : public FlyingBird {
public:
  double GetLatitude();
  void SetLatitude(double);
  double GetLongitude();
  void SetLongitude(double);
  double GetAltitude();
  void SetAltitude(double);
};

class Penguin : public Bird {
public:
  double GetLatitude();
  void SetLatitude(double);
  double GetLongitude();
  void SetLongitude(double);
}
```

In the above design, it is clear that the _Dove_ class is a flying kind of a bird and _Penguin_ class is bird without the altitude information, which leads to a better representation of classes following LSP.