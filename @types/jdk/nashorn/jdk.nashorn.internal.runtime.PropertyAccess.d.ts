declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
interface PropertyAccess {
    getInt(arg0: java.lang.Object, arg1: int): int
    getInt(arg0: double, arg1: int): int
    getInt(arg0: int, arg1: int): int
    getDouble(arg0: java.lang.Object, arg1: int): double
    getDouble(arg0: double, arg1: int): double
    getDouble(arg0: int, arg1: int): double
    get(arg0: java.lang.Object): java.lang.Object
    get(arg0: double): java.lang.Object
    get(arg0: int): java.lang.Object
    set(arg0: java.lang.Object, arg1: int, arg2: int): void
    set(arg0: java.lang.Object, arg1: double, arg2: int): void
    set(arg0: java.lang.Object, arg1: java.lang.Object, arg2: int): void
    set(arg0: double, arg1: int, arg2: int): void
    set(arg0: double, arg1: double, arg2: int): void
    set(arg0: double, arg1: java.lang.Object, arg2: int): void
    set(arg0: int, arg1: int, arg2: int): void
    set(arg0: int, arg1: double, arg2: int): void
    set(arg0: int, arg1: java.lang.Object, arg2: int): void
    has(arg0: java.lang.Object): boolean
    has(arg0: int): boolean
    has(arg0: double): boolean
    hasOwnProperty(arg0: java.lang.Object): boolean
    hasOwnProperty(arg0: int): boolean
    hasOwnProperty(arg0: double): boolean
    delete(arg0: int, arg1: boolean): boolean
    delete(arg0: double, arg1: boolean): boolean
    delete(arg0: java.lang.Object, arg1: boolean): boolean
}

            }
        }
    }
}