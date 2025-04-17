---
title: How to synchronize Obsidian via Git for beginners
socialImage: images/cover.png
publishDate: 2025-01-11
---
Obsidian offers a great sync subscription at a relatively cheap price ($4/month) that works OOTB. However, it might not fit everyone's use case. For me, I already have a cloud storage provider and don't store large files in obsidian which means I will never even come close to the 4GB of storage included in the package.

# Why use Git?
As this is an honest review, comparatively speaking "Syncthing" [1] is probably a better synchronization solution for most personal use cases. As for me, I like the ability to self-host my Obsidian notes on this website, and I like to have a place where I can easily track changes I have made over time. Those are the primary reasons why I personally use Git. 

Additionally, Git can be great for users who wish to collaborate on a "vault" of notes as it offers detailed insights in the changes made by each user. And solving merge conflicts is in my opinion the best solution for conflicting changes. A glaring issue in many collaboration events across companies and communities.

# Setting up Git on your computer
- If Git is not already installed on your computer, you can grab the installer for your operating system from [here](https://git-scm.com/downloads). After that, create a free account on [GitHub](https://github.com/) and note down your *username* and *email*.
- Open up your desired terminal and enter the following commands:
```bash
$ git config --global user.name "<Your username>"
$ git config --global user.email <Your Email>
```
- As of 2021, using git via HTTPS is deprecated and you should definitely use SSH instead. Follow [this guide](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent?platform=windows) to set up an ssh key on your operating system.
- Create a git repository and initialize it with a `.gitignore` 
- Clone the repository (via SSH!) in your desired directory
- Add excludes in your git ignore for directories you don't wish to synchronize. By default I at least recommend the following
```.gitignore
.obsidian/icons
.obsidian/workspace.json
.obsidian/workspace-mobile.json

# OS Fixes
.trash/
.DS_Store
```

# Setting up the git plugin
- Enable community plugins if you hadn't already.
- Search for Git and choose the first one.
- Configure the frequency and commit message as you see fit.

# Conclusion
Now your files wil be automatically synchronized to GitHub, and should be available on your other computers. Synchronization on Android via Git is possible as well, as of late 2024. However, it is still finicky and I would recommend any of the existing alternatives over using Git. If you do wish to try it out, head over to the [GitHub Repository](https://github.com/ViscousPot/GitSync) and follow the instructions there.