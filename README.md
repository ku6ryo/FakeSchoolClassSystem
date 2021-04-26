# Overview
This is a project of a fake school class system. This is a kind of a practice of
ku6ryo to develop a relatively large system fast with latest technologies.

# System components
```
- API server
- FE server (Next.js)
```

There are two servers. FE server proxy API call to API servers. Ideally, the two
servers are combined in a server. But it's very difficult because TypeORM does
not work (cannot share connection object) on Next.js. And, it may not be a good idea
because Next.js is a special build system using webpack while API server is
using ts-node.
