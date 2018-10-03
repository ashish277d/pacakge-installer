# pacakge-installer

# Description

You suddenly have a curious aspiration to create a package installer that can handle dependencies. You want to be able to give the installer a
list of packages with dependencies, and have it install the packages in order such that an install won’t fail due to a missing dependency.
This exercise is to write the code that will determine the order of install.

# Requirements

Please complete the exercise in either C#, Javascript, Java or Scala.
Please use Test Driven Development (TDD) and include your tests.
Please submit your code in a git repo (zipped and emailed, not on github) where you have committed throughout the process so that
we can see your progress as you code the solution.
The function should accept an array of strings defining packages and their dependencies. Each string contains the name of a package
followed by a colon and space then any dependencies required by that package. For simplicity we’ll assume that a package can have
at most one dependency.
The function should reject as invalid a dependency specification that contains cycles.
The function should output a comma separated string of package names in the order of install, such that a package’s dependency will
always precede that package.

## Steps to test this excercice

```
pull or fork git repo.
```

```
npm install
```

```
npm test
```