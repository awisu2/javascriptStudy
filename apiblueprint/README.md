# apiblueprint study

## install

```
npm i -g aglio
# npm i -D aglio
```

## usage

### convert markdown to html

```
aglio -i foo.md -o foo.html
```

### ondemand edit

```
aglio -i foo.md --server
```

## custom usage

```
npm run convert
```

this command use package.json
1. read files under "src" directory
2. merge one file with erase FORMAT:
3. aglio convert and output

**attention**

please only one group each files
