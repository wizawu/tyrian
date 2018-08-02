declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace objects {
class NativeRegExp extends jdk.nashorn.internal.runtime.ScriptObject {
    public lastIndex: java.lang.Object
    public getClassName(): string
    public static constructor(arg0: boolean, arg1: java.lang.Object, ...arg2: java.lang.Object[]): jdk.nashorn.internal.objects.NativeRegExp
    public static constructor(arg0: boolean, arg1: java.lang.Object): jdk.nashorn.internal.objects.NativeRegExp
    public static constructor(arg0: boolean, arg1: java.lang.Object, arg2: java.lang.Object): jdk.nashorn.internal.objects.NativeRegExp
    public static constructor(arg0: boolean, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object): jdk.nashorn.internal.objects.NativeRegExp
    public static newRegExp(arg0: java.lang.Object, arg1: java.lang.Object): jdk.nashorn.internal.objects.NativeRegExp
    public safeToString(): string
    public toString(): string
    public static compile(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): jdk.nashorn.internal.runtime.ScriptObject
    public static exec(arg0: java.lang.Object, arg1: java.lang.Object): jdk.nashorn.internal.runtime.ScriptObject
    public static test(arg0: java.lang.Object, arg1: java.lang.Object): boolean
    public static toString(arg0: java.lang.Object): string
    public static source(arg0: java.lang.Object): java.lang.Object
    public static global(arg0: java.lang.Object): java.lang.Object
    public static ignoreCase(arg0: java.lang.Object): java.lang.Object
    public static multiline(arg0: java.lang.Object): java.lang.Object
    public static getLastInput(arg0: java.lang.Object): java.lang.Object
    public static getLastMultiline(arg0: java.lang.Object): java.lang.Object
    public static getLastMatch(arg0: java.lang.Object): java.lang.Object
    public static getLastParen(arg0: java.lang.Object): java.lang.Object
    public static getLeftContext(arg0: java.lang.Object): java.lang.Object
    public static getRightContext(arg0: java.lang.Object): java.lang.Object
    public static getGroup1(arg0: java.lang.Object): java.lang.Object
    public static getGroup2(arg0: java.lang.Object): java.lang.Object
    public static getGroup3(arg0: java.lang.Object): java.lang.Object
    public static getGroup4(arg0: java.lang.Object): java.lang.Object
    public static getGroup5(arg0: java.lang.Object): java.lang.Object
    public static getGroup6(arg0: java.lang.Object): java.lang.Object
    public static getGroup7(arg0: java.lang.Object): java.lang.Object
    public static getGroup8(arg0: java.lang.Object): java.lang.Object
    public static getGroup9(arg0: java.lang.Object): java.lang.Object
    public exec(arg0: java.lang.String | string): jdk.nashorn.internal.objects.NativeRegExpExecResult
    public test(arg0: java.lang.String | string): boolean
    public getLastIndex(): int
    public getLastIndexObject(): java.lang.Object
    public setLastIndex(arg0: int): void
    public static $clinit$(): void
    public G$lastIndex(): java.lang.Object
    public S$lastIndex(arg0: java.lang.Object): void
    public static class: java.lang.Class<any>
}

            }
        }
    }
}