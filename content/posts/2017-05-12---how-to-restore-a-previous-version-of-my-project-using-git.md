---
title: How to restore a previous version of my project using Git
date: "2017-05-12T13:21:45.237Z"
template: "post"
draft: false
slug: "how-to-restore-a-previous-version-of-my-project-using-git"
category: "Software tools"
tags:
  - "Git"
description: "The most effective way to restore a previous version of your project."
socialImage: "/media/post-11-1.jpg"
---

![Git](/media/post-17-1.jpg "Going back?")<sub>Photo from Unsplash</sub>

Let's say you want to revert back to an older version of your source code because of unwanted changes in the most recent version. Quick thinking would let you do a *reset*:

hard or,
```bash
$ git reset --hard 721c77
```

soft.
```bash
$ git reset --soft 721c77
```

Either way, you'll end up with a messed up code. A little trick to make a cleaner version of the old one is to put it in a branch. Branch is cheap to create, so it is very handy.

```bash
git checkout -b old-site 721c77
```

# Takeaway initiative
_"Happiness is when what you think, what you say, and what you do are in harmony. - Mahatma Gandhi"_