---
title: C++ Tutorial 1
date: "2017-05-11T02:20:10.654Z"
layout: post
draft: false
path: "/posts/c++-tutorial-1/"
category: "C++ Tutorial"
tags:
  - "C++"
description: "This is an object-oriented approach that shows inheritance of classes and member attributes and functions. There is also an application of how static variables and functions are used."
---
In this tutorial, we will show how object oriented paradigm can be applied in C++ development. Covered in this sample _Car_ program the relationship of the general _Car_ class with _Sedan_ class.

![Git branch](./1.jpg)<sub>Photo from Unsplash</sub>

C++ code.

```cpp
// Car.hpp

#ifndef CAR_H
#define CAR_H

#include <iostream>

class Car {
private:
    std::string name, color, brand, model;
    int year_make;
    double price;

    static int num_cars;
public:
    std::string GetName(){ return name; }
    void SetName(std::string name){ this->name = name; }
    std::string GetColor(){ return color; }
    void SetColor(std::string color){ this->color = color; }
    std::string GetBrand(){ return brand; }
    void SetBrand(std::string brand){ this->brand = brand; }
    std::string GetModel(){ return model; }
    void SetModel(std::string model){ this->model = model; }
    int GetYearMake(){ return year_make; }
    void SetYearMake(int year_make){ this->year_make = year_make; }
    double GetPrice(){ return price; }
    void SetPrice(double price){ this->price = price; }
    
    void SetAll(std::string, std::string, std::string, std::string,
        int, double);

    static int GetNumCars(){ return num_cars; }
    void SetNumCars(int num_cars){ this->num_cars = num_cars; }
    void ToString();

    Car(std::string, std::string, std::string, std::string, int, double);
    Car();
    ~Car();
};

#endif
```

```cpp
// Car.cpp

#include "Car.hpp"

int Car::num_cars = 0;

Car::Car(std::string name, std::string brand, std::string model, std::string color,
        int year_make, double price) {
    this->name = name;
    this->color = color;
    this->brand = brand;
    this->model = model;
    this->year_make = year_make;
    this->price = price;

    Car::num_cars++;
}

Car::Car() {
    this->name = "";
    this->color = "";
    this->brand = "";
    this->model = "";
    this->year_make = 1990;
    this->price = 0;

    Car::num_cars++;
}

Car::~Car() {
}

void Car::ToString() {
    std::cout << this->name << " is a " << this->brand + " " + this->model <<
    " with a color " << this->color << " made last " << this->year_make <<
    " with a price of " << this->price << "." << std::endl;
}
```

```cpp
// Sedan.hpp

#ifndef SEDAN_H
#define SEDAN_H

#include "Car.hpp"

class Sedan: public Car {
private:
    bool is_nitro = false;
public:
    void IgniteNitro() {
        std::cout << "Sedan " << this->GetBrand() << " switched to nitrous mode: " <<
            is_nitro << std::endl;
    }
    Sedan(std::string, std::string, std::string, std::string, int, double, bool);
    Sedan(): Car(){};
    ~Sedan();

    void ToString();
};

#endif
```

```cpp
// Sedan.cpp

#include "Sedan.hpp"

Sedan::Sedan(std::string name, std::string color, std::string brand, std::string model,
        int year_make, double price, bool is_nitro) : Car(name, color, brand,
        model, year_make, price) {

    this->is_nitro = is_nitro;
}

Sedan::~Sedan() {
}

void Sedan::ToString() {
    std::cout << this->GetName() << " is a " << this->GetBrand() + " " + this->GetModel() <<
    " with a color " << this->GetColor() << " made last " << this->GetYearMake() <<
    " with a price of " << this->GetPrice() << "." << std::endl;
}
```

```cpp
// main.cpp

#include "Car.hpp"
#include "Sedan.hpp"

int main() {
    Car firstcar;
    firstcar.SetName("Heritage Edition");
    firstcar.SetBrand("Toyota");
    firstcar.SetModel("Land Cruiser");
    firstcar.SetPrice(87745);
    firstcar.SetColor("white");
    firstcar.SetYearMake(2017);
    firstcar.ToString();

    Car secondcar("Tron", "Audi", "A1", "red", 2016, 83800);
    secondcar.ToString();
    
    return 0;
}
```
Compile and run,

```bash
$ g++ -std=c++11 main.cpp Car.cpp Sedan.cpp
$ ./a.out
Heritage Edition is a Toyota Land Cruiser with a color white made last 2017 with a price of 87745.
Tron is a Audi A1 with a color red made last 2016 with a price of 83800.
```