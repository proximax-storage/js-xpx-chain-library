# nem2-library-js

[![npm version](https://badge.fury.io/js/nem2-library.svg)](https://badge.fury.io/js/nem2-library)
[![Build Status](https://api.travis-ci.org/nemtech/nem2-library-js.svg?branch=master)](https://travis-ci.org/nemtech/nem2-library-js)
[![Coverage Status](https://coveralls.io/repos/github/nemtech/nem2-library-js/badge.svg?branch=travis-ci)](https://coveralls.io/github/nemtech/nem2-library-js?branch=travis-ci)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

:warning:️ nem2-library-js is not meant to be used in NEM2 Tools/Applications. 
It is used by [nem2-sdk-typescript-javascript](https://github.com/nemtech/nem2-sdk-typescript-javascript).

:information_source: nem2-library-js is not related to nem-library of NIS1.

This project is developed and maintained by NEM Foundation. 

## Notes on generation of catapult-rest DTO and API client

Following command can be used to generate DTOs and Api clients for the [nem2-sdk-typescript-javascript](https://github.com/nemtech/nem2-sdk-typescript-javascript) :

```bash
$ git clone git@github.com:nemtech/nem2-docs
$ cd nem2-docs && mkdir sdks && cd sdks
$ cp ../source/resources/collections/swagger.yaml .
$ docker run --rm -v ${PWD}:/local swaggerapi/swagger-codegen-cli generate -i /local/swagger.yaml -l javascript -o /local/nem2-sdk-typescript-javascript && rm -R nem2-sdk-typescript-javascript/test
```

## License

Copyright (c) 2018 NEM
Licensed under the [Apache License 2.0](LICENSE)