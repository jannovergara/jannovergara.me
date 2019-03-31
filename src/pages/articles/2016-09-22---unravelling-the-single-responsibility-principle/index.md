---
title: Unravelling the single responsibility principle
date: "2016-09-22T23:46:37.121Z"
layout: post
draft: false
path: "/posts/unravelling-the-single-responsibility-principle/"
category: "Design Principles"
tags:
  - "design principle"
  - "c++"
description: "Getting to know SRP in a more detailed perspective."
---
In a nutshell, "A class should only have a single reason to change." There is separation of distinct concerns in classes handling different, independent tasks or problems.

![SRP.](./1.jpg)<sub>Photo from Unsplash</sub>

We can describe this in a more C++ approach. Say we want to create a _Diary_ class that would need _title_ and _entries_ attributes. Also we want to _add_ entries to our _Diary_ and eventually _save_ them.

```cpp
#include <iostream>
#include <fstream>
#include <string>
#include <vector>
using namespace std;

struct Diary
{
    string title;
    vector<string> entries;

    explicit Diary(const string &title) : title{title} {}

    void add(const string &entry);
    void save(const string &filename);
};

void Diary::add(const string &entry)
{
    static int count = 1;
    entries.push_back(to_string(count++) + ": " + entry);
}

void Diary::save(const string &filename)
{
    ofstream ofs(filename);
    for (auto &s : entries)
        ofs << s << endl;
}

int main()
{
    Diary diary{"Dear Diary"};
    diary.add("I broke my arm this morning.. ");
    diary.add("From 150 lbs to 120 lbs!");

    diary.save("diary.txt");

    return 0;
}
```

However on a design perspective, we notice that the _save_ method is a persistence functionality and therefore is a separate concern. We can then move the _save_ implementation to another class. Let's define a _PersistenceManager_ class that would handle this change.

```cpp
struct PersistenceManager
{
  static void save(const Diary &d, const string &filename)
  {
    ofstream ofs(filename);
    for (auto &s : d.entries)
      ofs << s << endl;
  }
};
```
and then calling in the _main()_,

```cpp
int main()
{
    Diary diary{"Dear Diary"};
    diary.add("I broke my arm this morning.. ");
    diary.add("From 150 lbs to 120 lbs!");

    PersistenceManager pm;
    pm.save(diary, "diary.txt");

    return 0;
}
```

With this design, we have separated the _save_ method from the _Diary_ class, which now has the primary responsibility of adding diary entries.