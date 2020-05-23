jest-image-snapshot + taiko
===============================

This is an example project to show how taiko works with jest-image-snapshot
in visual regression.

## usage

```bash
# init
npm install
# test
npm test
# update snapshot
npm test -- -u
```

## limitations

It seems that taiko does not blur text field when taking screenshot, which
needs extra care when coding.