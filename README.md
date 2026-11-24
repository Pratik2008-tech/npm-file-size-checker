# npm-file-size-checker

# npm-file-size-checker

A simple Node.js package to check the size of a file and display it in
Bytes, KB, MB, or GB.

## Features

-   Check the size of any file.
-   Automatically convert bytes into KB, MB, or GB.
-   Display file size in a readable format.
-   Get file size in bytes.
-   Simple and easy to use.

## Installation


npm install npm-file-size-checker

## Usage


import fileSizeChecker from "npm-file-size-checker";

const result = fileSizeChecker("test.txt");

console.log(result);


## Output Example

{
  filePath: 'test.txt',
  bytes: 1024,
  size: 1,
  unit: 'KB',
  readableSize: '1.00 KB'
}

## Return Values

-   filePath: Path of the file.
-   bytes: File size in bytes.
-   size: Converted file size.
-   unit: File size unit (Bytes, KB, MB, GB).
-   readableSize: Formatted file size.

## Technologies Used

-   JavaScript
-   Node.js
-   File System (fs) module

## License

This project is licensed under the MIT License.

## Author

Pratik Suralkar
