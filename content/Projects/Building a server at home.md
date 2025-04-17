---
title: Building a server at home
description: A detailed walk-trough for building your own server at home
socialImage: images/cover.png
publishDate: 2025-04-15
---
# Introduction
The concept of subscriptions has exploded since the start of Covid, everything has a monthly subscription, and the concept of "owning" something seems to be in a steep decline. As with everything in life, the counter-acting force is growing and with that has come the rise of the "Self-hosted" community. A community of people, focused on hosting their own free alternatives to popular services such as Netflix, iCloud etc.

While this might seem daunting at first, the advances in software and proper UX have actually made it quite easy to set-up. For most use-cases it is simply installing an application on the server. Speaking of, the popular server operating systems all have an easy to navigate UI with a large ecosystem of applications. Lowering the entry-level drastically.

# Chapter 1: Where to start and which pitfalls to avoid
The first step is of course the hardware of the server. There are many pre-built NAS/Server options online, and apart from the Synology NAS line (overpriced) they're mostly fine. However, I'd argue that this is the first pitfall for many. For most people, their server will spent the most time in an idle state, and this is precisely where things go wrong. Let me explain, depending on the hardware component a certain idle state can be reached, and with this idle state comes an amount of Watt used. Two similar systems in terms of performance can have a drastic difference in idle Watt consumption, up to 5x the amount. So if a server would cost someone € 10 a month in electricity, a similar system with worse idle states now costs € 50 a month. That is more than most people pay for subscriptions a month.

## 1.1 How do I find the right hardware?
As unintuitively as it might sound, the hardware specification of a component is often unrepresentative of the actual idle consumption. This mostly has to do with what is considered as "idle" by a manufacturer. Luckily there is an [entire community](https://www.hardwareluxx.de/community/threads/die-sparsamsten-systeme-30w-idle.1007101/) only dedicated to testing hardware components. My recommendation would be to take a look at their wonderful [spreadsheet](https://docs.google.com/spreadsheets/d/1LHvT2fRp7I6Hf18LcSzsNnjp10VI-odvwZpQZKv_NCI/edit?gid=0#gid=0) for recommended hardware. 

## 1.2 What is "good" server hardware?
At a baseline, a server doesn't need the greatest latest hardware components. Older components are often available at a cheaper price, or can be bought for even cheaper second-hand. A rule of thumb with regards to idle power consumption is to go for Intel hardware over AMD hardware. Because while AMD generally performs better in the value to performance ratio, Intel has a much better idle power state. 

Another piece of advice for those of you wishing to replace streaming services is checking the support for hardware encoding. In general you'd want something that has HEVC support, as it is much more efficient than H.264. In simpler terms, HEVC uses less power and bandwidth than H.264. For most people, a CPU with an integrated GPU (iGPU) will be the best option. Dedicated GPU's are notorious for their poor idle power consumption and are overkill for most servers anyways. Make sure to check the letters at the end of the CPU, for Intel an "F"  generally means that it has no iGPU.

With regards to cooling, large computer fans that spin slowly are generally a better option than small fans that spin fast. As the former uses less effort for the same result. Though it is worth pointing out that the brand does in fact matter depending on the location of your server. If the server is located near the living room or the bedroom, make sure to check the sound dB levels of a fan. In general, anything under 24 dB should barely be noticeable.

For storage, the RAM usually does not matter that much apart from the idle state. And you'd generally want to look for hard drive brands that have a great reputation for long hardware lifespans. A good example for a reliable brand is [Seagate](https://www.seagate.com/). I'd recommend choosing hard drives as they generally have the best price to storage capacity ratios. The server OS should ideally be on a small M.2 SSD though.

# Chapter 2: The server operating system
The operating system for your server will depend on what is important for you.

A knowledgeable server administrator should probably go for their desired Linux server distribution in combination with [cockpit](https://cockpit-project.org/). This will require the most work, but comes with the benefits of low idle power consumption and the possibilities for personal optimization.  

An avid Linux user might feel more at home with [proxmox](https://www.proxmox.com/en/), a complex operating system with many options for modifications and expansions, made for those that wish to DIY.

A general user will probably gravitate towards either TrueNAS (free) or UNRAID (licensed). Both have a pretty good UI and a large ecosystem that supports most applications OOTB.

Regardless of what you chose, you'll have to download the ISO and burn it to an USB stick with either [Balena Etcher](https://etcher.balena.io/#download-etcher), [Rufus](https://rufus.ie/en/), [Fedora Media Writer](https://flathub.org/apps/org.fedoraproject.MediaWriter) or any other tool. Pretty much every installation should come with an easy GUI, just make sure you install it to the proper disk, usually referred to as NVME if you got an M.2 SSD. 

# Chapter 3: Configuring the drives
The next steps will require some pre-planning. I highly recommend to format your storage drives to ZFS and make sure that you have at least 1 extra drive for redundancy. This will be needed for a proper RAIDZ(1,2,3) configuration. The number depends on the amount of storage disks that will be in your server. For starters it will usually be RAIDZ1 (refer to [this](https://www.raidz-calculator.com/raidz-types-reference.aspx)) for more information. TrueNAS or UNRAID will do all the configuration for you when creating your first storage post installation. I can't verify if proxmox can do it automatically.

Know that you will essentially at least be buying 1 drive worth of storage space that will not be used, and is only a back-up in case of the failure of another drive. It is therefore recommended to chose drives that have the same TB amount of storage. The nice thing is that if a drive decides to fail (hopefully) after a lot of years, all you'll need to do is replace the faulty drive with a new one and you'll still have all your data thanks to RAIDZ.

For any data that is crucial to survive, know that RAIDZ is not a back-up! Make sure you have a back-up somewhere else (e.g. in the cloud, or a second home). For stuff like movies and TV shows, RAIDZ should be more than enough.

# Chapter 4: Applications and their use-cases
If you are one of the people that is done with Netflix, Disney+, Hulu, Amazon Prime, HBO+ etc. etc.
Fear not, for you can [sail the seas](https://wallpaperaccess.com/full/1220461.jpg) with the `*`arr [stack](https://github.com/OliTechFR/Discovarr). Do make sure to camouflage your ship with a VPN. Useful sidenote: the ["bays"](https://privacysavvy.com/security/torrents/best-torrent-sites/) are very unreliable, and the ["private bays"](https://www.reddit.com/r/trackers/) are very hard to get into. For a small yearly price, access to ["a dock"](https://en.wikipedia.org/wiki/Usenet) is considerably faster and easier and has no requirements for "giving back". Just make sure to find a good "indexer" so you know where to look on "the dock".

For all the DVD's you "bought" at the store and "ripped" for your "personal media preservation", do consider [Jellyfin](https://jellyfin.org/) to stream your content to phones, computers and smart TV's. Alternatively there is also the paid alternative [Plex](https://www.plex.tv/) though that does kind of defeat the point a bit (donating to projects you love is still a good thing!). Additionally, setup [Jellyseerr](https://github.com/fallenbagel/jellyseerr) (or [Overseerr](https://overseerr.dev/) if you went with Plex) to allow users to request media they would like to watch, so you can "buy it at the store".

For the readers under us, [Kavita](https://www.kavitareader.com/) is a great option for reading all those "purchased" eBooks.

For the avid and aspiring cooks, there is [Mealie](https://mealie.io/). A great tool that allows you to import any recipes you find online (and should work most of the time). Now you won't have to scroll past a 5000 word backstory before getting to the actual recipe. Additionally, it offers support for meal preparation and planning.

For those of use who want to create their own cloud, [Nextcloud](https://nextcloud.com/) is a great free option for general use with loads of extensions.  And if you really like the Google Photos experience, [Immich](https://immich.app/) is a great alternative.

If you'd like to manage your finances, I think the work in progress [Maybe Finance](https://maybefinance.com/) application is a great option. It has the ability to import CSVs, saving a lot of manual labor.

And lastly, depending on if you wish to visit the "bays" or the "docks", you'll either want to go with [qBittorrent]() or [SABnzbd](https://sabnzbd.org/), or another client if you have a personal preference.

# Chapter 5: Accessing your server outside of your home
There are two ways to access your server from outside of your home. The hard way, which involves purchasing a domain, adding certificates and setting up a reverse-proxy on your server. And the easy way, by using a VPN service like [Tailscale](https://tailscale.com/), and connecting your server and any other devices to it.

In general, if you plan on adding other users, especially those that are not so tech savvy, I'd recommend learning how to purchase a domain, and configure the certificates with a reverse-proxy like [nginx](https://nginx.org/). My personal recommendation is to use [Cloudflare](https://www.cloudflare.com/) for domains and certificates, as the process is quite easy. This will set you back about € 15 a year if you use a relatively unique domain (e.g. don't go for .com). And don't forget to configure the ports on your router!

If it's just you and maybe one other close person, I'd just create a Tailscale account and install Tailscale on your server and devices. Adding a device should only take about 1 to 5 minutes. The added benefit is that nothing is public, so no security concerns their either really. And if a device is compromised, it can simply be kicked from the Tailscale network.

If you are tech savvy person and care about full independence. Consider [Headscale](https://headscale.net/stable/) as your personal Tailscale server instead of the public ones.

# Conclusion
Ever since the implosion in America earlier in 2025, I made my plans a reality and decided to distance myself as much as possible from American service providers and service providers in general. So I made the leap, researched as much as possible and set up my own server at home. And while I am much more familiar with technology due to my profession as a Software Engineer. I hope this inspires someone and helps them build their own server, even if they don't know much about technology to begin with.