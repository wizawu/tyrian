declare namespace com {
    namespace sun {
        namespace nio {
            namespace file {
                class ExtendedCopyOption extends java.lang.Enum<com.sun.nio.file.ExtendedCopyOption> implements java.nio.file.CopyOption {
                    public static INTERRUPTIBLE: com.sun.nio.file.ExtendedCopyOption
                    public static values(): com.sun.nio.file.ExtendedCopyOption[]
                    public static valueOf(arg0: java.lang.String | string): com.sun.nio.file.ExtendedCopyOption
                    public static class: java.lang.Class<any>
                }
                class ExtendedOpenOption extends java.lang.Enum<com.sun.nio.file.ExtendedOpenOption> implements java.nio.file.OpenOption {
                    public static NOSHARE_READ: com.sun.nio.file.ExtendedOpenOption
                    public static NOSHARE_WRITE: com.sun.nio.file.ExtendedOpenOption
                    public static NOSHARE_DELETE: com.sun.nio.file.ExtendedOpenOption
                    public static values(): com.sun.nio.file.ExtendedOpenOption[]
                    public static valueOf(arg0: java.lang.String | string): com.sun.nio.file.ExtendedOpenOption
                    public static class: java.lang.Class<any>
                }
                class ExtendedWatchEventModifier extends java.lang.Enum<com.sun.nio.file.ExtendedWatchEventModifier> implements java.nio.file.WatchEvent$Modifier {
                    public static FILE_TREE: com.sun.nio.file.ExtendedWatchEventModifier
                    public static values(): com.sun.nio.file.ExtendedWatchEventModifier[]
                    public static valueOf(arg0: java.lang.String | string): com.sun.nio.file.ExtendedWatchEventModifier
                    public static class: java.lang.Class<any>
                }
                class SensitivityWatchEventModifier extends java.lang.Enum<com.sun.nio.file.SensitivityWatchEventModifier> implements java.nio.file.WatchEvent$Modifier {
                    public static HIGH: com.sun.nio.file.SensitivityWatchEventModifier
                    public static MEDIUM: com.sun.nio.file.SensitivityWatchEventModifier
                    public static LOW: com.sun.nio.file.SensitivityWatchEventModifier
                    public static values(): com.sun.nio.file.SensitivityWatchEventModifier[]
                    public static valueOf(arg0: java.lang.String | string): com.sun.nio.file.SensitivityWatchEventModifier
                    public sensitivityValueInSeconds(): int
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}
declare namespace sun {
    namespace misc {
        class Signal {
            public getNumber(): int
            public getName(): string
            public equals(arg0: java.lang.Object): boolean
            public hashCode(): int
            public toString(): string
            public constructor(arg0: java.lang.String | string)
            public static handle(arg0: sun.misc.Signal, arg1: sun.misc.SignalHandler): sun.misc.SignalHandler
            public static raise(arg0: sun.misc.Signal): void
            public static class: java.lang.Class<any>
        }
        interface SignalHandler {
            SIG_DFL: sun.misc.SignalHandler
            SIG_IGN: sun.misc.SignalHandler
            handle(arg0: sun.misc.Signal): void
        }
        class Unsafe {
            public static INVALID_FIELD_OFFSET: int
            public static ARRAY_BOOLEAN_BASE_OFFSET: int
            public static ARRAY_BYTE_BASE_OFFSET: int
            public static ARRAY_SHORT_BASE_OFFSET: int
            public static ARRAY_CHAR_BASE_OFFSET: int
            public static ARRAY_INT_BASE_OFFSET: int
            public static ARRAY_LONG_BASE_OFFSET: int
            public static ARRAY_FLOAT_BASE_OFFSET: int
            public static ARRAY_DOUBLE_BASE_OFFSET: int
            public static ARRAY_OBJECT_BASE_OFFSET: int
            public static ARRAY_BOOLEAN_INDEX_SCALE: int
            public static ARRAY_BYTE_INDEX_SCALE: int
            public static ARRAY_SHORT_INDEX_SCALE: int
            public static ARRAY_CHAR_INDEX_SCALE: int
            public static ARRAY_INT_INDEX_SCALE: int
            public static ARRAY_LONG_INDEX_SCALE: int
            public static ARRAY_FLOAT_INDEX_SCALE: int
            public static ARRAY_DOUBLE_INDEX_SCALE: int
            public static ARRAY_OBJECT_INDEX_SCALE: int
            public static ADDRESS_SIZE: int
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
            public freeDBBMemory(arg0: long): void
            public fieldOffset(arg0: java.lang.reflect.Field): int
            public staticFieldBase(arg0: java.lang.Class<any>): java.lang.Object
            public allocateDBBMemory(arg0: long): long
            public staticFieldOffset(arg0: java.lang.reflect.Field): long
            public objectFieldOffset(arg0: java.lang.reflect.Field): long
            public staticFieldBase(arg0: java.lang.reflect.Field): java.lang.Object
            public shouldBeInitialized(arg0: java.lang.Class<any>): boolean
            public reallocateDBBMemory(arg0: long, arg1: long): long
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
    namespace reflect {
        class ReflectionFactory {
            public static getReflectionFactory(): sun.reflect.ReflectionFactory
            public setLangReflectAccess(arg0: sun.reflect.LangReflectAccess): void
            public newFieldAccessor(arg0: java.lang.reflect.Field, arg1: boolean): sun.reflect.FieldAccessor
            public newMethodAccessor(arg0: java.lang.reflect.Method): sun.reflect.MethodAccessor
            public newConstructorAccessor(arg0: java.lang.reflect.Constructor<any>): sun.reflect.ConstructorAccessor
            public newField(arg0: java.lang.Class<any>, arg1: java.lang.String | string, arg2: java.lang.Class<any>, arg3: int, arg4: int, arg5: java.lang.String | string, arg6: byte[]): java.lang.reflect.Field
            public newMethod(arg0: java.lang.Class<any>, arg1: java.lang.String | string, arg2: java.lang.Class<any>[], arg3: java.lang.Class<any>, arg4: java.lang.Class<any>[], arg5: int, arg6: int, arg7: java.lang.String | string, arg8: byte[], arg9: byte[], arg10: byte[]): java.lang.reflect.Method
            public newConstructor(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>[], arg2: java.lang.Class<any>[], arg3: int, arg4: int, arg5: java.lang.String | string, arg6: byte[], arg7: byte[]): java.lang.reflect.Constructor<any>
            public getMethodAccessor(arg0: java.lang.reflect.Method): sun.reflect.MethodAccessor
            public setMethodAccessor(arg0: java.lang.reflect.Method, arg1: sun.reflect.MethodAccessor): void
            public getConstructorAccessor(arg0: java.lang.reflect.Constructor<any>): sun.reflect.ConstructorAccessor
            public setConstructorAccessor(arg0: java.lang.reflect.Constructor<any>, arg1: sun.reflect.ConstructorAccessor): void
            public copyMethod(arg0: java.lang.reflect.Method): java.lang.reflect.Method
            public copyField(arg0: java.lang.reflect.Field): java.lang.reflect.Field
            public copyConstructor<T>(arg0: java.lang.reflect.Constructor<T>): java.lang.reflect.Constructor<T>
            public getExecutableTypeAnnotationBytes<T>(arg0: java.lang.reflect.Executable): byte[]
            public newConstructorForSerialization<T>(arg0: java.lang.Class<any>, arg1: java.lang.reflect.Constructor<any>): java.lang.reflect.Constructor<any>
            public newConstructorForSerialization<T>(arg0: java.lang.Class<any>): java.lang.reflect.Constructor<any>
            public newConstructorForExternalization<T>(arg0: java.lang.Class<any>): java.lang.reflect.Constructor<any>
            public readObjectForSerialization<T>(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandle
            public readObjectNoDataForSerialization<T>(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandle
            public writeObjectForSerialization<T>(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandle
            public readResolveForSerialization<T>(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandle
            public writeReplaceForSerialization<T>(arg0: java.lang.Class<any>): java.lang.invoke.MethodHandle
            public hasStaticInitializerForSerialization<T>(arg0: java.lang.Class<any>): boolean
            public newOptionalDataExceptionForSerialization<T>(arg0: boolean): java.io.OptionalDataException
            public static class: java.lang.Class<any>
        }
    }
}
