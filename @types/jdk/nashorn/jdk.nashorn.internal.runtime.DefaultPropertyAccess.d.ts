declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
abstract class DefaultPropertyAccess implements jdk.nashorn.internal.runtime.PropertyAccess {
    public constructor()
    public getInt(arg0: java.lang.Object, arg1: int): int
    public getInt(arg0: double, arg1: int): int
    public getInt(arg0: int, arg1: int): int
    public getDouble(arg0: java.lang.Object, arg1: int): double
    public getDouble(arg0: double, arg1: int): double
    public getDouble(arg0: int, arg1: int): double
    public get(arg0: java.lang.Object): java.lang.Object
    public get(arg0: double): java.lang.Object
    public get(arg0: int): java.lang.Object
    public set(arg0: double, arg1: int, arg2: int): void
    public set(arg0: double, arg1: double, arg2: int): void
    public set(arg0: double, arg1: java.lang.Object, arg2: int): void
    public set(arg0: int, arg1: int, arg2: int): void
    public set(arg0: int, arg1: double, arg2: int): void
    public set(arg0: int, arg1: java.lang.Object, arg2: int): void
    public set(arg0: java.lang.Object, arg1: int, arg2: int): void
    public set(arg0: java.lang.Object, arg1: double, arg2: int): void
    public set(arg0: java.lang.Object, arg1: java.lang.Object, arg2: int): void
    public has(arg0: java.lang.Object): boolean
    public has(arg0: int): boolean
    public has(arg0: double): boolean
    public hasOwnProperty(arg0: int): boolean
    public hasOwnProperty(arg0: double): boolean
    public hasOwnProperty(arg0: java.lang.Object): boolean
    public delete(arg0: int, arg1: boolean): boolean
    public delete(arg0: double, arg1: boolean): boolean
    public static class: java.lang.Class<any>
}

            }
        }
    }
}