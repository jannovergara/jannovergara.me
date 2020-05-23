---
title: How to create, merge and delete a branch in Github
date: "2017-03-29T15:12:32.169Z"
layout: post
draft: false
path: "/posts/how-to-create-merge-and-delete-a-branch-in-github/"
category: "Software tools"
tags:
  - "Git"
description: "There will always be an time that the developer will need to create a different version of an application either with additional features or with a test functionality. Creating a branch from the master branch will help organize the development process."
---
For example from an existing _master_ branch of a _calculator_ application, a developer wants to add new features that will improve the existing functionality. He needs to create a branch from _master_ and implement all the new functionality into that branch, then eventually merging all those modifications back to the _master_ branch.

First, clone the _master_.
```sh
$ git clone https://www.github.io/jannovergara/calculator.git
$ cd calculator
```

![Git branch](./1.jpg "Calculator")<sub>Photo from Unsplash</sub>

Next, create a branch from the _master_ branch. Let's name it as *calculator\_new_version*.
```sh
$ git checkout -b calculator_new_version
```
Perform modifications on this branch that will reflect all the new functionalities. When the developer realizes that the modifications are enough, he can _push_ the modifications via _git add_, _git commit_ and _git push_ commands. After which, he can then merge *calculator\_new_version* to the _master_ branch.
```sh
$ git checkout master
$ git merge -b calculator_new_version
```
He may want to delete *calculator\_new_version* to keep the repository nice and clean. This will delete the branch from the local repository.
```sh
$ git branch -d calculator_new_version
```
To delete the branch from the remote repository:
```sh
$ git push origin --delete calculator_new_version
```
If there are conflicts during the _merge_, the developer needs to manually resolve the conflicts. When there are no more issues, the merged source code of the _calculator_ app now contains the new features from *calculator\_new_version*.