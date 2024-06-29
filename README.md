## Euclidean GCD

This project is a simple application that calculates the Greatest Common Divisor (GCD) of two numbers using the [Euclidean algorithm](https://en.wikipedia.org/wiki/Euclidean_algorithm). 

The project is configured with Jest for testing, ESLint for linting, and Husky for managing git hooks. It also enforces conventional commits.
=======

This project is a simple application that calculates the Greatest Common Divisor (GCD) of two numbers using the [Euclidean algorithm](https://en.wikipedia.org/wiki/Euclidean_algorithm). 

The project is configured with Jest for testing, ESLint for linting, and Husky for managing git hooks. It also enforces conventional commits.


### Project Structure
```
euclidean-gcd/
├── src/
│ ├── gcd.ts
├── tests/
│ └── gcd.test.ts
├── .husky/
│ ├── _/
│ ├── commit-msg
│ └── pre-commit
├── .eslintignore
├── .eslintrc.js
├── tsconfig.json
├── jest.config.js
├── package.json
├── commitlint.config.js
├── .gitignore
└── pnpm.lock
```

### Install pnpm
This project uses [pnpm](https://pnpm.io/)
=======

### Install pnpm

This project uses [pnpm](https://pnpm.io/)


If you don't already have `pnpm` installed, you can install it globally using npm:
```
npm install -g pnpm
```

## Installation
=======

## Installation


**Clone the repository**:
```
git clone https://github.com/nic-thompson/euclidean-gcd.git
cd euclidean-gcd
```

=======


**Install dependencies**:
```
pnpm install
```

## Usage
=======

## Usage


**Run tests**:
```
pnpm test
```

=======


**Lint the code**:
```
pnpm lint
```

=======


**Fix linting errors**:
```
pnpm lint:fix
```

### Development
=======

### Development


**Create a new branch**:
```
git checkout -b new-feature-branch
```

=======


**Push the new branch to remote**:
```
git push --set-upstream origin new-feature-branch
```

### Commit Guidelines
=======

### Commit Guidelines


This project uses conventional commits. Ensure your commit messages follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.



