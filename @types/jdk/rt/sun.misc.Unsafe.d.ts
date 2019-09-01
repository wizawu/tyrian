declare namespace sun {
    namespace misc {
        class Unsafe {
            public static readonly INVALID_FIELD_OFFSET: int
            public static readonly ARRAY_BOOLEAN_BASE_OFFSET: int
            public static readonly ARRAY_BYTE_BASE_OFFSET: int
            public static readonly ARRAY_SHORT_BASE_OFFSET: int
            public static readonly ARRAY_CHAR_BASE_OFFSET: int
            public static readonly ARRAY_INT_BASE_OFFSET: int
            public static readonly ARRAY_LONG_BASE_OFFSET: int
            public static readonly ARRAY_FLOAT_BASE_OFFSET: int
            public static readonly ARRAY_DOUBLE_BASE_OFFSET: int
            public static readonly ARRAY_OBJECT_BASE_OFFSET: int
            public static readonly ARRAY_BOOLEAN_INDEX_SCALE: int
            public static readonly ARRAY_BYTE_INDEX_SCALE: int
            public static readonly ARRAY_SHORT_INDEX_SCALE: int
            public static readonly ARRAY_CHAR_INDEX_SCALE: int
            public static readonly ARRAY_INT_INDEX_SCALE: int
            public static readonly ARRAY_LONG_INDEX_SCALE: int
            public static readonly ARRAY_FLOAT_INDEX_SCALE: int
            public static readonly ARRAY_DOUBLE_INDEX_SCALE: int
            public static readonly ARRAY_OBJECT_INDEX_SCALE: int
            public static readonly ADDRESS_SIZE: int
            public static getUnsafe(): sun.misc.Unsafe
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
            public getInt(arg0: java.lang.Object, arg1: int): int
            public putInt(arg0: java.lang.Object, arg1: int, arg2: int): void
            public getObject(arg0: java.lang.Object, arg1: int): java.lang.Object
            public putObject(arg0: java.lang.Object, arg1: int, arg2: java.lang.Object): void
            public getBoolean(arg0: java.lang.Object, arg1: int): boolean
            public putBoolean(arg0: java.lang.Object, arg1: int, arg2: boolean): void
            public getByte(arg0: java.lang.Object, arg1: int): byte
            public putByte(arg0: java.lang.Object, arg1: int, arg2: byte): void
            public getShort(arg0: java.lang.Object, arg1: int): short
            public putShort(arg0: java.lang.Object, arg1: int, arg2: short): void
            public getChar(arg0: java.lang.Object, arg1: int): char
            public putChar(arg0: java.lang.Object, arg1: int, arg2: char): void
            public getLong(arg0: java.lang.Object, arg1: int): long
            public putLong(arg0: java.lang.Object, arg1: int, arg2: long): void
            public getFloat(arg0: java.lang.Object, arg1: int): float
            public putFloat(arg0: java.lang.Object, arg1: int, arg2: float): void
            public getDouble(arg0: java.lang.Object, arg1: int): double
            public putDouble(arg0: java.lang.Object, arg1: int, arg2: double): void
            public getByte(arg0: long): byte
            public putByte(arg0: long, arg1: byte): void
            public getShort(arg0: long): short
            public putShort(arg0: long, arg1: short): void
            public getChar(arg0: long): char
            public putChar(arg0: long, arg1: char): void
            public getInt(arg0: long): int
            public putInt(arg0: long, arg1: int): void
            public getLong(arg0: long): long
            public putLong(arg0: long, arg1: long): void
            public getFloat(arg0: long): float
            public putFloat(arg0: long, arg1: float): void
            public getDouble(arg0: long): double
            public putDouble(arg0: long, arg1: double): void
            public getAddress(arg0: long): long
            public putAddress(arg0: long, arg1: long): void
            public allocateMemory(arg0: long): long
            public reallocateMemory(arg0: long, arg1: long): long
            public setMemory(arg0: java.lang.Object, arg1: long, arg2: long, arg3: byte): void
            public setMemory(arg0: long, arg1: long, arg2: byte): void
            public copyMemory(arg0: java.lang.Object, arg1: long, arg2: java.lang.Object, arg3: long, arg4: long): void
            public copyMemory(arg0: long, arg1: long, arg2: long): void
            public freeMemory(arg0: long): void
            public fieldOffset(arg0: java.lang.reflect.Field): int
            public staticFieldBase(arg0: java.lang.Class<any>): java.lang.Object
            public staticFieldOffset(arg0: java.lang.reflect.Field): long
            public objectFieldOffset(arg0: java.lang.reflect.Field): long
            public staticFieldBase(arg0: java.lang.reflect.Field): java.lang.Object
            public shouldBeInitialized(arg0: java.lang.Class<any>): boolean
            public ensureClassInitialized(arg0: java.lang.Class<any>): void
            public arrayBaseOffset(arg0: java.lang.Class<any>): int
            public arrayIndexScale(arg0: java.lang.Class<any>): int
            public addressSize(): int
            public pageSize(): int
            public defineClass(arg0: java.lang.String | string, arg1: byte[], arg2: int, arg3: int, arg4: java.lang.ClassLoader, arg5: java.security.ProtectionDomain): java.lang.Class<any>
            public defineAnonymousClass(arg0: java.lang.Class<any>, arg1: byte[], arg2: java.lang.Object[]): java.lang.Class<any>
            public allocateInstance(arg0: java.lang.Class<any>): java.lang.Object
            public monitorEnter(arg0: java.lang.Object): void
            public monitorExit(arg0: java.lang.Object): void
            public tryMonitorEnter(arg0: java.lang.Object): boolean
            public throwException(arg0: java.lang.Throwable): void
            public compareAndSwapObject(arg0: java.lang.Object, arg1: long, arg2: java.lang.Object, arg3: java.lang.Object): boolean
            public compareAndSwapInt(arg0: java.lang.Object, arg1: long, arg2: int, arg3: int): boolean
            public compareAndSwapLong(arg0: java.lang.Object, arg1: long, arg2: long, arg3: long): boolean
            public getObjectVolatile(arg0: java.lang.Object, arg1: long): java.lang.Object
            public putObjectVolatile(arg0: java.lang.Object, arg1: long, arg2: java.lang.Object): void
            public getIntVolatile(arg0: java.lang.Object, arg1: long): int
            public putIntVolatile(arg0: java.lang.Object, arg1: long, arg2: int): void
            public getBooleanVolatile(arg0: java.lang.Object, arg1: long): boolean
            public putBooleanVolatile(arg0: java.lang.Object, arg1: long, arg2: boolean): void
            public getByteVolatile(arg0: java.lang.Object, arg1: long): byte
            public putByteVolatile(arg0: java.lang.Object, arg1: long, arg2: byte): void
            public getShortVolatile(arg0: java.lang.Object, arg1: long): short
            public putShortVolatile(arg0: java.lang.Object, arg1: long, arg2: short): void
            public getCharVolatile(arg0: java.lang.Object, arg1: long): char
            public putCharVolatile(arg0: java.lang.Object, arg1: long, arg2: char): void
            public getLongVolatile(arg0: java.lang.Object, arg1: long): long
            public putLongVolatile(arg0: java.lang.Object, arg1: long, arg2: long): void
            public getFloatVolatile(arg0: java.lang.Object, arg1: long): float
            public putFloatVolatile(arg0: java.lang.Object, arg1: long, arg2: float): void
            public getDoubleVolatile(arg0: java.lang.Object, arg1: long): double
            public putDoubleVolatile(arg0: java.lang.Object, arg1: long, arg2: double): void
            public putOrderedObject(arg0: java.lang.Object, arg1: long, arg2: java.lang.Object): void
            public putOrderedInt(arg0: java.lang.Object, arg1: long, arg2: int): void
            public putOrderedLong(arg0: java.lang.Object, arg1: long, arg2: long): void
            public unpark(arg0: java.lang.Object): void
            public park(arg0: boolean, arg1: long): void
            public getLoadAverage(arg0: double[], arg1: int): int
            public getAndAddInt(arg0: java.lang.Object, arg1: long, arg2: int): int
            public getAndAddLong(arg0: java.lang.Object, arg1: long, arg2: long): long
            public getAndSetInt(arg0: java.lang.Object, arg1: long, arg2: int): int
            public getAndSetLong(arg0: java.lang.Object, arg1: long, arg2: long): long
            public getAndSetObject(arg0: java.lang.Object, arg1: long, arg2: java.lang.Object): java.lang.Object
            public loadFence(): void
            public storeFence(): void
            public fullFence(): void
            public static class: java.lang.Class<any>
        }
    }
}