# A plain Kirby 3 starter-kit with tailwindcss, typescript and lifereloading

## Why?

As a fan of web-performance, simplicity and convinience, this is my approach of getting a quick start into creating a new Kirby project. No complex dependency tree, webpack or server setup.

- Write your javascript in Typescript
- Use the power of Tailwindcss for writing CSS without any overhead
- Using gulp-connect-php to just fire up a server with lifereloading and you're good to go

## Usage

1. Clone or download and extract this repository
2. Install npm dependencies via

```sh
$ npm i
```

3. Installs downloads and extracts the latest Kirby version by just using curl Optionally you can also download it manually yourself over hat https://github.com/getkirby/kirby/releases/latest and extract it to `./www/kirby`

```
$ sh setup.sh
```

4. Start developing by using the npm scripts located in the `package.json`

### Optionally you can use [brocessing/`unboil`](https://github.com/brocessing/unboil) to adjust the projects metadata to your needs

> `unboil` allows you to clean a boilerplate project (files like package.json, readme, git...) to quickly start your own project from it.

```sh
$ npm i -g unboil # install unboil globally
$ cd my-project
$ unboil
```
