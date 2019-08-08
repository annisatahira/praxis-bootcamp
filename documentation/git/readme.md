# Using GIT for development
#### Command line instructions

##### Git config global
```
git config --global user.name "Your Name"
git config --global user.email "your.email@domain.com"
```
> Set configuration of your computer user to your repository (**Github**, **Gitlab**, etc)

##### Push an existing folder
```
cd your_project_folder
```
> Change to your directory project in terminal

```
git init
```
> Initialize your project to git
```
git remote add origin url_repository_project
```
> Set remote url your project to your repository
```
git add .
```
> Add all untracked and changes files in your project directory [1]
```
git commit -m "your commit"
```
> Type your commit as history log to your repository [1]
```
git push -u origin master
```
> Push or upload your commit to your repository and set *master* as upstream branch [2]

##### Additional command for push
```
[1] git commit -am "your commit"
```
> Add all changes files (*not include untracked files*) and commit at once
```
[2] git push
```
> Push or upload your commit to your repository without set upstream branch

##### Pull changes files
```
git pull origin your_branch
```
> Pull or download your commit from specific branch
```
git pull
```
> Pull or download your commit from current branch

##### Manage branch
```
git checkout -b your_branch
```
> Create new branch
```
git checkout your_branch
```
> Change to your specific branch
