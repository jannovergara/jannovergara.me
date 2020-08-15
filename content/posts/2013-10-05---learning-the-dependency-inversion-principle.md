---
title: Learning the dependency inversion principle
date: "2013-10-05T16:11:37.443Z"
template: "post"
draft: false
slug: "learning-the-dependency-inversion-principle"
category: "Design Principles"
tags:
  - "SOLID"
  - "C++03"
description: "In this entry, we will see the relevance of multiple inheritance and pure virtual functions to DIP."
socialImage: "/media/post-6-1.jpg"
---

This principle is more straight-forward than the other SOLID principles because it relates to a real-world pattern.

One most common analogy to this principle is the role of the CEO of a company and the employees. As a CEO, you wouldn't drive the truck and make product delivery, you wouldn't pick SEO keywords for the corporate website, you wouldn't do the accounting calculations for the tax statements. Instead, it would be your job to manage the organization and delegate responsibility to the executives that report to you. Spending time with low-level work will not translate to better management of the company. In a nutshell, **high level objects should not depend on low level implementations.**

In other words, abstractions should not depend on the details, rather the details should depend on abstractions.

![DIP.](/media/post-6-1.jpg "Suit tucked-in")<sub>Photo from Unsplash</sub>

To have a clearer perspective, let's take a look at the example below. This is the same example as what we have in ISP.

```cpp
// Animal
class AnimalMovement {
public:
    virtual void run(Animal* animal) = 0;
    virtual void walk(Animal* animal) = 0;
}

class Animal {
private:
    AnimalMovement* _movement;
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
    PlantMovement* _movement;
public:
    void setMovement(PlantMovement* movement);
};

class Movement : public AnimalMovement, public PlantMovement {
private:
    Animal* _dog;
    Animal* _cat;
    Plant* _rose;
public:
    void walk(Animal* animal);
    void run(Animal* animal);
    void bloom(Plant* plant);
};
```

Both `AnimalMovement` and `PLantMovement` serve as the high level classes and `Movement` serves as the low level class, which implements the abstractions. This is an application of **pure virtual** functions e.g. `run`, `walk` and `bloom`. These pure virtual functions are the abstractions and the actual implementations are found in the derived class.

# Takeaway initiative
_"I can calculate the motion of heavenly bodies, but not the madness of people. - Isaac Newton"_