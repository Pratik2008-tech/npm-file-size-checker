
const fs = require("fs");

function fileSizeChecker(filePath) {
    try {
        const fileInfo = fs.statSync(filePath);

        if (!fileInfo.isFile()) {
            throw new Error("Please provide a valid file.");
        }

        const fileSize = fileInfo.size;

        const KB = 1024;
        const MB = KB * 1024;
        const GB = MB * 1024;

        let size;
        let unit;

        if (fileSize < KB) {
            size = fileSize;
            unit = "Bytes";
        } 
        else if (fileSize < MB) {
            size = fileSize / KB;
            unit = "KB";
        } 
        else if (fileSize < GB) {
            size = fileSize / MB;
            unit = "MB";
        } 
        else {
            size = fileSize / GB;
            unit = "GB";
        }

        return {
            filePath,
            bytes: fileSize,
            size: Number(size.toFixed(2)),
            unit,
            readableSize: `${size.toFixed(2)} ${unit}`
        };

    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = fileSizeChecker;
