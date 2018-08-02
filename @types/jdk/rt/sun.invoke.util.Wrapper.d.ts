declare namespace sun {
    namespace invoke {
        namespace util {
class Wrapper extends java.lang.Enum<sun.invoke.util.Wrapper> {
    public static BOOLEAN: sun.invoke.util.Wrapper
    public static BYTE: sun.invoke.util.Wrapper
    public static SHORT: sun.invoke.util.Wrapper
    public static CHAR: sun.invoke.util.Wrapper
    public static INT: sun.invoke.util.Wrapper
    public static LONG: sun.invoke.util.Wrapper
    public static FLOAT: sun.invoke.util.Wrapper
    public static DOUBLE: sun.invoke.util.Wrapper
    public static OBJECT: sun.invoke.util.Wrapper
    public static VOID: sun.invoke.util.Wrapper
    public static values(): sun.invoke.util.Wrapper[]
    public static valueOf(arg0: java.lang.String | string): sun.invoke.util.Wrapper
    public detailString(): string
    public bitWidth(): int
    public stackSlots(): int
    public isSingleWord(): boolean
    public isDoubleWord(): boolean
    public isNumeric(): boolean
    public isIntegral(): boolean
    public isSubwordOrInt(): boolean
    public isSigned(): boolean
    public isUnsigned(): boolean
    public isFloating(): boolean
    public isOther(): boolean
    public isConvertibleFrom(arg0: sun.invoke.util.Wrapper): boolean
    public zero(): java.lang.Object
    public zero<T>(arg0: java.lang.Class<T>): T
    public static forPrimitiveType<T>(arg0: java.lang.Class<any>): sun.invoke.util.Wrapper
    public static forWrapperType<T>(arg0: java.lang.Class<any>): sun.invoke.util.Wrapper
    public static forBasicType<T>(arg0: char): sun.invoke.util.Wrapper
    public static forBasicType<T>(arg0: java.lang.Class<any>): sun.invoke.util.Wrapper
    public primitiveType<T>(): java.lang.Class<any>
    public wrapperType<T>(): java.lang.Class<any>
    public wrapperType<T>(arg0: java.lang.Class<T>): java.lang.Class<T>
    public static asWrapperType<T>(arg0: java.lang.Class<T>): java.lang.Class<T>
    public static asPrimitiveType<T>(arg0: java.lang.Class<T>): java.lang.Class<T>
    public static isWrapperType<T>(arg0: java.lang.Class<any>): boolean
    public static isPrimitiveType<T>(arg0: java.lang.Class<any>): boolean
    public static basicTypeChar<T>(arg0: java.lang.Class<any>): char
    public basicTypeChar<T>(): char
    public wrapperSimpleName<T>(): string
    public primitiveSimpleName<T>(): string
    public cast<T>(arg0: java.lang.Object, arg1: java.lang.Class<T>): T
    public convert<T>(arg0: java.lang.Object, arg1: java.lang.Class<T>): T
    public wrap<T>(arg0: java.lang.Object): java.lang.Object
    public wrap<T>(arg0: int): java.lang.Object
    public makeArray<T>(arg0: int): java.lang.Object
    public arrayType<T>(): java.lang.Class<any>
    public copyArrayUnboxing<T>(arg0: java.lang.Object[], arg1: int, arg2: java.lang.Object, arg3: int, arg4: int): void
    public copyArrayBoxing<T>(arg0: java.lang.Object, arg1: int, arg2: java.lang.Object[], arg3: int, arg4: int): void
    public static class: java.lang.Class<any>
}

        }
    }
}