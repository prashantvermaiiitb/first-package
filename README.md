# publishing 1st NPM package

<br>echo "# first-package" >> README.md
<br>git init
<br>git add README.md
<br>git commit -m "first commit"
<br>git branch -M master
<br>git remote add origin git@github.com:prashantvermaiiitb/first-package.git
<br>git push -u origin master

# for the https 

git remote add origin https://github.com/prashantvermaiiitb/first-package.git
<br>git branch -M master
<br>git push -u origin master

# 

npm link in the package directory, will create link for this package that way if you try to install 
from some where else then it will install from this location.

name of the package in package json is important.

1. this will be used while publishing the package internally "npm link" 
2. this will be used when linking the package "npm link <name of the package>"
