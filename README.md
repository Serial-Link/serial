# Serial-Link

<a href="https://deno.land"><img align="right" src="https://github.com/Serial-Link/.github/blob/main/assets/profile.svg" height="150px" alt="the serial port standing in the rain"></a>

[![Lint](https://github.com/Serial-Link/Serial-Link/actions/workflows/lint.yml/badge.svg)](https://github.com/Serial-Link/Serial-Link/actions/workflows/lint.yml)
[![Unit Tests](https://github.com/Serial-Link/Serial-Link/actions/workflows/unit_tests.yml/badge.svg)](https://github.com/Serial-Link/Serial-Link/actions/workflows/unit_tests.yml)

A [serial](https://en.wikipedia.org/wiki/Serial_communication) library written in TypeScript for [Deno](https://deno.land) without any third party modules.

This library provides an interface for the communication with serial devices and **doesn't use any third party modules**. It uses C++ functions which are included in a [dynamic link library](https://de.wikipedia.org/wiki/Dynamic_Link_Library) or [shared object](https://en.wikipedia.org/wiki/Library_(computing)#Shared_libraries). These functions are then loaded by Deno to establish a serial connection and talk to the devices.

## Features
- Communication with serial devices.
- Create multiple serial connections at the same time.
- List available ports and their properties.
- Set timeouts for both reading and writing.
- All functions are async.
- Uses no third party modules.
- Works on multiple different operating systems (check [compatibility](#compatibility) for mor info).

## Compatibility
| OS      | Tested version          | Current state |
|---------|-------------------------|---------------|
| Windows | Windows 10 (x64)        | in progress   |
| Linux   | Ubuntu Server 22.04 LTS | in progress   |

## Documentation
- Check out the [Wiki](https://github.com/Serial-Link/Serial-Link/wiki) section on how to use this library.
- Check out [denonomicon.deno.dev](https://denonomicon.deno.dev/) and [deno.land/manual@v1.36.4/runtime/ffi_api](https://deno.land/manual@v1.36.4/runtime/ffi_api) about Deno + FFI.

## Credits
- Big thanks goes out to [@Katze719](https://github.com/Katze719) who wrote most of the C++ files and functions!
- Thanks to [@AapoAlas](https://github.com/aapoalas) for the great support and help on the [Deno Discord](https://discord.gg/deno)!
- Thanks to [@Dj](https://github.com/DjDeveloperr) for the inspiration on how to write such a library!

## Licence
Apache-2.0. Check [LICENSE](https://github.com/Serial-Link/Serial-Link/blob/main/LICENSE) for more details.

Feel free to contribute to this project.

Copyright 2023 © Max
