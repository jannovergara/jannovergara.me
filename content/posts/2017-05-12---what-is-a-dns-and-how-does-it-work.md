---
title: What is DNS and how does it work?
date: "2017-05-17T02:43:17.912Z"
template: "post"
draft: false
slug: "what-is-a-dns-and-how-does-it-work"
category: "Networking"
tags:
  - "DNS"
description: "The Domain Name System is indisputably one of the most important and overlooked parts of the internet. In this section, we will learn what DNS is actually about and why it is important."
socialImage: "/media/post-11-1.jpg"
---

![DNS](/media/post-18-1.jpg "DNS Servers")<sub>Photo from Unsplash</sub>

## What is DNS?
The internet is composed of underground/water-wired interconnected group of computers. These computers are identified by numbers (such as IP addresses) unlike humans which go by names because computers talk to each other also by numbers. To bridge the gap between humans and computers, the **Domain Name Server** is created. **DNS** resolves domain names to IP addresses.

Try *ping* on *jannovergara.me* and you will get the IP address corresponding to *jannovergara.me*. Here it says *104.198.14.52* is the IP address.
```bash
$ ping jannovergara.me -t 3
PING jannovergara.me (104.198.14.52): 56 data bytes
64 bytes from 104.198.14.52: icmp_seq=0 ttl=102 time=183.333 ms
64 bytes from 104.198.14.52: icmp_seq=1 ttl=102 time=196.632 ms
64 bytes from 104.198.14.52: icmp_seq=2 ttl=102 time=167.808 ms

--- jannovergara.me ping statistics ---
3 packets transmitted, 3 packets received, 0.0% packet loss
round-trip min/avg/max/stddev = 167.808/182.591/196.632/11.779 ms
```

## How does it work?

![DNS2](/media/post-18-2.jpg "DNS Lookup.")

When you type in *jannovergara.me* in the web browser (e.g. Chrome, Safari, Firefox), you will actually be looking for *jannovergara.me.*. It is with a dot (.). You can actually try it out!

The dot represents the internet's name space. It is the root. When you search for *jannovergara.me.*, your browser and computer OS will determine if IP address is already in its memory cache. If they can't find it, the OS is configured to ask a resolving name server for IP addresses it does not know.

## RESOLVING name server
The resolving name server may or may not know about the IP address. It should know though where is the root name server.

## ROOT name server
It then sends a query to the root name server.

## TLD or COM name server
The root name server redirects the resolving name server to the com name server or top level domain name server.

## AUTHORITATIVE name server
Again, it will redirect the resolving name server to the authoritative name servers.

## DOMAIN REGISTRAR
TLD or COM name servers know exactly which ANS to use with the help of the domain's registrar. When a domain is purchased, the registrar is told which authoritative name servers that doain should use. They notify the organization responsible for the top level domain and tell them to update the TLD name servers.

With these lookup processes, the resolving name server will be able to query the specific ANS and get the IP address.

# Takeaway initiative
_"No one saves us but ourselves. No one can and no one may. We ourselves must walk the path. - Gautama Buddha"_