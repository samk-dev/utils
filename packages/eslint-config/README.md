# Eslint Config

Eslint configuration for Nuxt, Eslint, Typescript, Prettier

## Usage

Install the package

```bash
pnpm install -D @samk-dev/eslint-config
```

Create a .eslintrc in your project and extend the config

```js
{
  "extends": [ "@samk-dev/eslint-config" ],
}
```

If using in a root of a project add `root: true`

```js
{
  "root": true,
  "extends": ["@samk-dev/eslint-config"]
}
```
