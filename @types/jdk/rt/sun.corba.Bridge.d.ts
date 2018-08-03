declare namespace sun {
    namespace corba {
        class Bridge {
            public static readonly INVALID_FIELD_OFFSET: long
            public static get(): sun.corba.Bridge
            public getLatestUserDefinedLoader(): java.lang.ClassLoader
            public getInt(arg0: java.lang.Object, arg1: long): int
            public putInt(arg0: java.lang.Object, arg1: long, arg2: int): void
            public getObject(arg0: java.lang.Object, arg1: long): java.lang.Object
            public putObject(arg0: java.lang.Object, arg1: long, arg2: java.lang.Object): void
            public getBoolean(arg0: java.lang.Object, arg1: long): boolean
            public putBoolean(arg0: java.lang.Object, arg1: long, arg2: boolean): void
            public getByte(arg0: java.lang.Object, arg1: long): byte
            public putByte(arg0: java.lang.Object, arg1: long, arg2: byte): void
            public getShort(arg0: java.lang.Object, arg1: long): short
            public putShort(arg0: java.lang.Object, arg1: long, arg2: short): void
            public getChar(arg0: java.lang.Object, arg1: long): char
            public putChar(arg0: java.lang.Object, arg1: long, arg2: char): void
            public getLong(arg0: java.lang.Object, arg1: long): long
            public putLong(arg0: java.lang.Object, arg1: long, arg2: long): void
            public getFloat(arg0: java.lang.Object, arg1: long): float
            public putFloat(arg0: java.lang.Object, arg1: long, arg2: float): void
            public getDouble(arg0: java.lang.Object, arg1: long): double
            public putDouble(arg0: java.lang.Object, arg1: long, arg2: double): void
            public objectFieldOffset(arg0: java.lang.reflect.Field): long
            public throwException(arg0: java.lang.Throwable): void
            public newConstructorForSerialization(arg0: java.lang.Class, arg1: java.lang.reflect.Constructor): java.lang.reflect.Constructor
            public static class: java.lang.Class<any>
        }
    }
}