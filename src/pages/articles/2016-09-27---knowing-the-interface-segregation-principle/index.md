---
title: Knowing the interface segregation principle
date: "2016-09-27T01:20:32.098Z"
layout: post
draft: false
path: "/posts/knowing-the-interface-segregation-principle/"
category: "Design Principles"
tags:
  - "SOLID"
  - "C++03"
description: "How can we apply the interface segregation principle in actual software design?"
---
This principle follows the guideline that **any client should not be forced to implement any interface which is irrelevant to it.** Instead of creating one big interface, we can break it down to smaller interfaces.

A very good example of this is a bar and restaurant where you go to the place to eat. So you enter the place and sit. Waiter comes to your table and leaves you with one menu. You open it to see that it's a bar menu with cocktail drinks, beer, vodka etc. The thing happens when you're with your parents, _They don't drink!_, and they don't know what to order leaving them clueless. Sometimes they would also think that there's nothing else in the menu! So it's important to have separate menus, one for the bar and restaurant to avoid confusion and misinterpretation. Give the bar menu for people who will drink, and the restaurant menu for people who will eat.

![ISP.](./1.jpg)<sub>Photo from Unsplash</sub>

We can also explain this principle using another example with code.

#### Bad example

```cpp
class Animal {
private:
    Movement* movement_;
public:
    void setMovement(Movement* movement);
};

class Plant {
private:
    Movement* movement_;
public:
    void setMovement(Movement* movement);
};

class Movement {
private:
    Animal* dog_;
    Animal* cat_;
    Plant* rose_;
public:
    void walk(Animal* animal);
    void run(Animal* animal);
    void bloom(Plant* plant);
};
```

In the above example, there is `Movement` which handles movement from two `Animal` objects and plant activity from a `Plant` object. The problem with this design is that `Animal` and `Plant` both have a `Movement` pointer. `Animal` does need to call the `walk` and `run` methods of the movement object, but it also has access to the `bloom` method which is useless to the animal. The presence of useless `bloom` methods is a violation of the ISP. There is also a cyclic dependency, which is another hint that something is amiss.

To conform to the ISP, `Animal` must not have access to the `bloom` method, and `Plant` must not have access to the `run` and `walk` methods. This can easily be done by applying the Open Closed Principle. Here is one way to improve the design:

#### Good example

```cpp
// Animal
class AnimalMovement {
public:
    virtual void run(Animal* animal) = 0;
    virtual void walk(Animal* animal) = 0;
}

class Animal {
private:
    AnimalMovement* movement_;
public:
    void setMovement(AnimalMovement* movement);
};

// Plant
class PlantMovement {
public:
    virtual void bloom(Plant* plant) = 0;
}

class Plant {
private:
    PlantMovement* movement_;
public:
    void setMovement(PlantMovement* movement);
};

class Movement : public AnimalMovement, public PlantMovement {
private:
    Animal* dog_;
    Animal* cat_;
    Plant* rose_;
public:
    void walk(Animal* animal);
    void run(Animal* animal);
    void bloom(Plant* plant);
};
```

This design uses abstract base classes and multiple inheritance. `Animal` now only has access to animal related movement methods, and `Plant` only has access to plant movement method, while also allowing `Movement` object to be plugged into both.