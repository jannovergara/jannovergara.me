---
title: How to remove Github stale branches from local repo
date: "2017-05-03T05:01:24.652Z"
template: "post"
draft: false
slug: "how-to-remove-github-stale-branches-from-local-repo"
category: "Software tools"
tags:
  - "Git"
description: "At some point during code development, there will come a time to clean history from the local repository. This git tool will do the job."
socialImage: "/media/post-12-1.jpg"
---

![Stale](/media/post-12-1.jpg "Window cleaning")<sub>Photo from Unsplash</sub>

To _delete remotes/origin/{branch}_ from local repository, use:

```sh
git remote prune origin
```