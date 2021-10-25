"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var webpack_1 = __importDefault(require("webpack"));
var run_1 = require("./run");
var errors_1 = require("../errors");
function default_1(entries, outDir, watch) {
    var compiler = getCompiler(entries, outDir);
    var printStats = function (stats) { return console.log(stats === null || stats === void 0 ? void 0 : stats.toString({
        colors: true,
        chunks: false,
        entrypoints: true,
        modules: false,
    })); };
    if (watch) {
        compiler.watch({ poll: true }, function (err, stats) {
            printStats(stats);
        });
    }
    else {
        compiler.run(function (err, stats) {
            printStats(stats);
            if (stats === null || stats === void 0 ? void 0 : stats.hasErrors())
                process.exit(errors_1.code.BUILD_ERROR);
        });
    }
}
exports.default = default_1;
function getCompiler(entries, outDir) {
    var context = process.cwd();
    var entry = {};
    for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
        var src = entries_1[_i];
        var out = path_1.default.join(outDir, path_1.default.basename(src).replace(/(.ts|.tsx)$/, ".js"));
        entry[out] = path_1.default.format({ dir: ".", name: path_1.default.relative("", src) });
    }
    return (0, webpack_1.default)({
        devtool: false,
        mode: "development",
        context: context,
        entry: entry,
        target: (0, run_1.checkRuntime)()[0] === "nashorn" ? "es5" : "node",
        output: {
            path: process.cwd(),
            filename: "[name]",
        },
        resolve: {
            extensions: [".js", ".ts", ".tsx"],
        },
        resolveLoader: {
            modules: [
                path_1.default.join(__dirname, "..", "..", "node_modules"),
                path_1.default.join(__dirname, "..", "..", ".."),
            ]
        },
        module: {
            rules: [{
                    test: /\.tsx?$/,
                    use: [{
                            loader: "ts-loader",
                            options: {
                                transpileOnly: false,
                            },
                        }]
                }]
        },
        plugins: [
            new webpack_1.default.DefinePlugin(globalVarDefinition())
        ],
    });
}
function globalVarDefinition() {
    var vars = ["com", "java", "javax", "jdk", "netscape", "org"];
    var filePath = path_1.default.join(process.cwd(), "lib", "@types", "namespace.json");
    if (fs_1.default.existsSync(filePath)) {
        var content = fs_1.default.readFileSync(filePath, "utf-8");
        Object.keys(JSON.parse(content)).forEach(function (it) {
            if (vars.indexOf(it) < 0)
                vars.push(it);
        });
    }
    return vars.reduce(function (result, ns) {
        var test = "typeof Packages === \"object\" && typeof " + ns + " === \"undefined\"";
        result[ns] = "(" + test + " ? Packages." + ns + " : " + ns + ")";
        return result;
    }, {});
}
