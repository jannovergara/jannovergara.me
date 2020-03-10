---
title: How to remove Github stale branches from local repo
date: "2017-05-03T05:01:24.652Z"
layout: post
draft: false
path: "/posts/how-to-remove-github-stale-branches-from-local-repo/"
category: "Software tools"
tags:
  - "Git"
description: "At some point during code development, there will come a time to clean history from the local repository. This git tool will do the job."
---
![Stale](./1.jpg)<sub>Photo from Unsplash</sub>

To _delete remotes/origin/{branch}_ from local repository, use:

```sh
git remote prune origin
```