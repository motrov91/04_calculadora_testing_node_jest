"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveFile = void 0;
const fs_1 = __importDefault(require("fs"));
class SaveFile {
    constructor() {
    }
    ;
    execute({ fileContent, fileDestination = 'outputs', filename = 'table' }) {
        try {
            fs_1.default.mkdirSync(fileDestination, { recursive: true });
            fs_1.default.writeFileSync(`${fileDestination}/${filename}.txt`, fileContent);
            //console.log('File created');
            return true;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }
    ;
}
exports.SaveFile = SaveFile;
