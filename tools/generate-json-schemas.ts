// for docs see https://github.com/YousefED/typescript-json-schema

import * as TJS from "typescript-json-schema";
import {writeFileSync} from "node:fs";
import glob from "glob"

const settings: TJS.PartialArgs = {
    required: false
    },
    compilerOptions: TJS.CompilerOptions = {
        strictNullChecks: true,
        esModuleInterop: true
    },
    basePath = "./src/generated";

const files = glob.sync("src/types/record/**.ts");

const program = TJS.getProgramFromFiles(
    files,
    compilerOptions,
    basePath
);

const generator = TJS.buildGenerator(program, settings);

const whitelist = [
    "ZeebeRecord"
];

const blacklist = [
];

const symbols = generator.getUserSymbols().filter(name =>
    whitelist.includes(name) ||
    ((name.endsWith("RecordValue")) && !blacklist.includes(name))
)

// Write JSON Schema Files
symbols.forEach(symbol => {
    let schema = generator.getSchemaForSymbol(symbol);
    writeFileSync(`src/generated/jsonschema/${symbol}.json`, JSON.stringify(schema, null, 2));
});


let exportFile = "";

symbols.forEach(symbol => {
    exportFile += `import * as ${symbol} from './jsonschema/${symbol}.json'\n`;
});

exportFile += "export const JsonSchemaRegistry = {\n";
symbols.forEach(symbol => {
    exportFile += "  '" + symbol + "': " + symbol + ",\n";
});
exportFile += "}\n";

exportFile += "export type JsonSchemaRegistryTypes = keyof typeof JsonSchemaRegistry\n";

writeFileSync(`src/generated/jsonschema.ts`, exportFile);
