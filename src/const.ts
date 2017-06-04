export class EXIT_STATUS {
    static OK = 0
    static BAD_COMMAND = 1
    static PARSE_CLASS_ERROR = 2
    static WEBPACK_COMPILE_ERROR = 3
    static BUILD_ENTRY_ERROR = 4
    static BUILD_OUTDIR_ERROR = 5
    static TSCONFIG_NOT_FOUND = 6
    static BROKEN_ENV = 127
}
