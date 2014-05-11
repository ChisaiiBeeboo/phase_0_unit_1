## Release 2: Basic Git Commands
Define the following commands and describe how they work/what they do.  


#### add
stages the file you wish to commit. kinda like adding items to a container being prepared for shipment.

#### branch
gives you a list of local branches, git branch -a lists both local and remote branches.

#### checkout
lets you switch between the branches you're working on.

#### clone
lets you clone a working copy of a local or remote repository. git clone /path/repo command will let you clone a local repo. and git clone username@host:/path/repo will copy a remote repo.

#### commit
commits all the files you've added and any change you've made to a file. the equivalent of sealing up the box and labeling it before you ship 

#### fetch
downloads all content and changes from other branches.

#### log
gives you a detailed list of recent commits including the date and time they were commited and by who

#### merge
lets you merge the contents/changes of different branches

#### pull
applies the changes from a remote repo to your current branch

#### push
sends the files/changes you've commited to the remote server where its accessible online.

#### reset
is a permanent undo to changes. It can unstage a file without overwriting changes

#### rm
tells git to stop tracking the file without deleting it.

#### status
gives you a list of files that have changed, and ones you have yet to add.

## Release 4: Git Workflow

- Push files to a remote repository
cd into directory
git status
git add
git status
git commit -m ""
git push origin master

- Fetch changes
cd into directory
git fetch <remote> <rbranch>:<lbranch> 
git checkout <lbranch>

- Commit locally
cd into dir
git status
git add file
git commit -m ""

Release 6: Review
deepakswami07/phase_0_unit_1
JYoung217/phase_0_unit_1

## Release 5: Reflection

I struggled with git/Github the first two weeks due to an unknown issue with OSX's Keychain Access settings. Through the app I was able to commit and push from one repo, but denied by the other. I ended up deleting the current git version I had installed and upgraded to the latest release. I then deleted my current ssh keys and generated new ones, voila. I was commiting and pushing in no time. I'm still working on trying to bypass entering my username/password everytime I push. And when pushing Keychain Access is asking me to reset my password everytime, still investigating the root of this. 

