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

# Creating NPM link for the package in test

npm link in the package directory, will create link for this package that way if you try to install 
from some where else then it will install from this location.

name of the package in package json is important.

1. this will be used while publishing the package internally "npm link" 
2. this will be used when linking the package "npm link <name of the package>"

# How to publish the package
<br>1. for this you should have account in NPM 
<br>2. Login from that account in NPM and verify that account.
<br>3. Then come back in VScode or to the root directory of the package to be published.
<br>4. Check npm whoami to see from which account you are logged in or non-logged in.
<br>5. After that use npm login then press enter, then fill in the details for login credentials.
<br>6. Command "npm publish" is used to publish the package.
<br>7. Ensure that email id is verified , package name is unique or within scope before publishing to avoid 403 Forbidden error.
<br>8. if all is fine then package is published.