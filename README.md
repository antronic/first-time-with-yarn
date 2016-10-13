# First time with Yarn from Facebook
Yarn is a javascript package manager like npm.

But Yarn has more security, faster, and can work on offline!

##Installation
###Alternative Way
```sh
$ npm install yarn -g
```

##Sample command
You can find out more command [here](https://yarnpkg.com/en/docs/cli/)
####Initialize your project likes `npm init`
```sh
$ yarn init
```
[click here](https://yarnpkg.com/en/docs/cli/init) for more information of `$ yarn init`
####Add dependencies likes `npm install [package-name]`
```sh
$ yarn add [package-name]
```
#####If you want to ****save*** dependencies try to use this
```sh
$ yarn add [package-name] --save
$ yarn add [package-name] -S

$ yarn add [package-name] --save-dev
$ yarn add [package-name] -D
```
[click here](https://yarnpkg.com/en/docs/cli/install) for more information of `$ yarn add [package-name]`
####Install dependencies that already contain in `package.json` likes `npm install`
```sh
$ yarn install
```
[click here](https://yarnpkg.com/en/docs/cli/add) for more information of `$ yarn install`
