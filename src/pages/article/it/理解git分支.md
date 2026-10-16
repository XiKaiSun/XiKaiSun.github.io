---
title: "理解git分支"
pubDate: 2022-10-09
categorize: it
layout: ./../../../layouts/MarkdownPostLayout.astro
articleId: 2
---
# 理解git分支

在创建git仓库的时候默认会创建main分支（指针），和head指针。可以试想下没有分支的状态，就只剩head指针了，head指针的指向表示我们当前所处的commit。例如在游离的状态（没有分支的状态）下进行了5次commit。 
![本地图片](./../../../img/article/Screenshot%202026-10-10%20at%201.46.50 pm.png)
从图中可以看出，head指针直接指向了第五次commit，其实只需要head就可以满足版本控制的需求了，但只能储存一个commit历史状态，如果按照这种架构进行commit历史状态管理，可以创建新的head指针，然后让新的head指针指向目标版本， 
![本地图片](../../../img/article/Screenshot%202026-10-10%20at%201.59.19 pm.png)
 

 

如果在head2下进行commit，则会 
![本地图片](../../../img/article/Screenshot%202026-10-10%20at%202.05.22 pm.png)
。 

但git并没有这样设计，而是引入了分支作为中间层，git系统里可以有多个分支指针，但是head指针只有一个, head指针则会指向选中的分支。
![本地图片](../../../img/article/Screenshot%202026-10-16%20at%2012.49.22 am.png)

从main分支切换到new branch分支的状态，修改head指向就好了，在分支下进行新的提交，分支的指针会指向新的提交.  
![本地图片](../../../img/article/Screenshot%202026-10-16%20at%2012.49.44 am.png)

理解了这个才能更好的使用git。 