declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace objects {
                class NativeDataView extends jdk.nashorn.internal.runtime.ScriptObject {
                    public readonly buffer: java.lang.Object
                    public readonly byteOffset: int
                    public readonly byteLength: int
                    public static constructor(arg0: boolean, arg1: java.lang.Object, ...arg2: java.lang.Object[]): jdk.nashorn.internal.objects.NativeDataView
                    public static constructor(arg0: boolean, arg1: java.lang.Object, arg2: java.lang.Object, arg3: int): jdk.nashorn.internal.objects.NativeDataView
                    public static constructor(arg0: boolean, arg1: java.lang.Object, arg2: java.lang.Object, arg3: int, arg4: int): jdk.nashorn.internal.objects.NativeDataView
                    public static getInt8(arg0: java.lang.Object, arg1: java.lang.Object): int
                    public static getInt8(arg0: java.lang.Object, arg1: int): int
                    public static getUint8(arg0: java.lang.Object, arg1: java.lang.Object): int
                    public static getUint8(arg0: java.lang.Object, arg1: int): int
                    public static getInt16(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): int
                    public static getInt16(arg0: java.lang.Object, arg1: int): int
                    public static getInt16(arg0: java.lang.Object, arg1: int, arg2: boolean): int
                    public static getUint16(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): int
                    public static getUint16(arg0: java.lang.Object, arg1: int): int
                    public static getUint16(arg0: java.lang.Object, arg1: int, arg2: boolean): int
                    public static getInt32(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): int
                    public static getInt32(arg0: java.lang.Object, arg1: int): int
                    public static getInt32(arg0: java.lang.Object, arg1: int, arg2: boolean): int
                    public static getUint32(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): double
                    public static getUint32(arg0: java.lang.Object, arg1: int): double
                    public static getUint32(arg0: java.lang.Object, arg1: int, arg2: boolean): double
                    public static getFloat32(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): double
                    public static getFloat32(arg0: java.lang.Object, arg1: int): double
                    public static getFloat32(arg0: java.lang.Object, arg1: int, arg2: boolean): double
                    public static getFloat64(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): double
                    public static getFloat64(arg0: java.lang.Object, arg1: int): double
                    public static getFloat64(arg0: java.lang.Object, arg1: int, arg2: boolean): double
                    public static setInt8(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): java.lang.Object
                    public static setInt8(arg0: java.lang.Object, arg1: int, arg2: int): java.lang.Object
                    public static setUint8(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): java.lang.Object
                    public static setUint8(arg0: java.lang.Object, arg1: int, arg2: int): java.lang.Object
                    public static setInt16(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object): java.lang.Object
                    public static setInt16(arg0: java.lang.Object, arg1: int, arg2: int): java.lang.Object
                    public static setInt16(arg0: java.lang.Object, arg1: int, arg2: int, arg3: boolean): java.lang.Object
                    public static setUint16(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object): java.lang.Object
                    public static setUint16(arg0: java.lang.Object, arg1: int, arg2: int): java.lang.Object
                    public static setUint16(arg0: java.lang.Object, arg1: int, arg2: int, arg3: boolean): java.lang.Object
                    public static setInt32(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object): java.lang.Object
                    public static setInt32(arg0: java.lang.Object, arg1: int, arg2: int): java.lang.Object
                    public static setInt32(arg0: java.lang.Object, arg1: int, arg2: int, arg3: boolean): java.lang.Object
                    public static setUint32(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object): java.lang.Object
                    public static setUint32(arg0: java.lang.Object, arg1: int, arg2: double): java.lang.Object
                    public static setUint32(arg0: java.lang.Object, arg1: int, arg2: double, arg3: boolean): java.lang.Object
                    public static setFloat32(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object): java.lang.Object
                    public static setFloat32(arg0: java.lang.Object, arg1: int, arg2: double): java.lang.Object
                    public static setFloat32(arg0: java.lang.Object, arg1: int, arg2: double, arg3: boolean): java.lang.Object
                    public static setFloat64(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object): java.lang.Object
                    public static setFloat64(arg0: java.lang.Object, arg1: int, arg2: double): java.lang.Object
                    public static public static setFloat64(arg0: java.lang.Object, arg1: int, arg2: double, arg3: boolean): java.lang.Object
                    public static $clinit$(): void
                    public G$buffer(): java.lang.Object
                    public G$byteOffset(): int
                    public G$byteLength(): int
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}