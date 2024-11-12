# Open Ordinal Bootstrap

Open Ordinal Bootstrap is a on-chain JavaScript library / module that solves the immutable initial loading of an ordinal.

## Documentation

Head over to [the docs](https://openordinal.dev/docs/open-ordinal-bootstrap/) to read more about this tiny beast.

## Folders

- `dist`: Contain the minified and packaged version of the library. For now this is just used for build validation of the code.
- `docs`: Contain the generated docs.
- `lib`: Contain the build of the library. For now this is just used for build validation of the code.
- `src`: Contain all source code for the library and docs source.
- `test`: Contain the testable version used in a HTML-page.

## Commands

- `npm install`: Get all the libraries that is needed for development and running this library.
- `npm run all`: Run the `build`, `schema` and `docs` in sequence.
- `npm run build`: Builds the `src` to the `lib` folder and then minimize it to the `dist` folder.
- `npm run docs`: Builds the `docs`.
