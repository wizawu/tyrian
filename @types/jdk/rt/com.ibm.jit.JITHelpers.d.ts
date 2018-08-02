declare namespace com {
    namespace ibm {
        namespace jit {
class JITHelpers {
    public static IS_PLATFORM_LITTLE_ENDIAN: boolean
    public static getHelpers(): com.ibm.jit.JITHelpers
    public transformedEncodeUTF16Big(arg0: long, arg1: long, arg2: int): int
    public transformedEncodeUTF16Little(arg0: long, arg1: long, arg2: int): int
    public getSuperclass(arg0: java.lang.Class<any>): java.lang.Class<any>
    public isArray(arg0: java.lang.Object): boolean
    public getJ9ClassFromObject64(arg0: java.lang.Object): long
    public getJ9ClassFromObject32(arg0: java.lang.Object): int
    public getIntFromObject(arg0: java.lang.Object, arg1: long): int
    public getIntFromObjectVolatile(arg0: java.lang.Object, arg1: long): int
    public getLongFromObject(arg0: java.lang.Object, arg1: long): long
    public getLongFromObjectVolatile(arg0: java.lang.Object, arg1: long): long
    public getObjectFromObject(arg0: java.lang.Object, arg1: long): java.lang.Object
    public getObjectFromObjectVolatile(arg0: java.lang.Object, arg1: long): java.lang.Object
    public putIntInObject(arg0: java.lang.Object, arg1: long, arg2: int): void
    public putIntInObjectVolatile(arg0: java.lang.Object, arg1: long, arg2: int): void
    public putLongInObject(arg0: java.lang.Object, arg1: long, arg2: long): void
    public putLongInObjectVolatile(arg0: java.lang.Object, arg1: long, arg2: long): void
    public putObjectInObject(arg0: java.lang.Object, arg1: long, arg2: java.lang.Object): void
    public putObjectInObjectVolatile(arg0: java.lang.Object, arg1: long, arg2: java.lang.Object): void
    public compareAndSwapIntInObject(arg0: java.lang.Object, arg1: long, arg2: int, arg3: int): boolean
    public compareAndSwapLongInObject(arg0: java.lang.Object, arg1: long, arg2: long, arg3: long): boolean
    public compareAndSwapObjectInObject(arg0: java.lang.Object, arg1: long, arg2: java.lang.Object, arg3: java.lang.Object): boolean
    public getByteFromArray(arg0: java.lang.Object, arg1: long): byte
    public getByteFromArrayVolatile(arg0: java.lang.Object, arg1: long): byte
    public getCharFromArray(arg0: java.lang.Object, arg1: long): char
    public getCharFromArrayVolatile(arg0: java.lang.Object, arg1: long): char
    public getIntFromArray(arg0: java.lang.Object, arg1: long): int
    public getIntFromArrayVolatile(arg0: java.lang.Object, arg1: long): int
    public getLongFromArray(arg0: java.lang.Object, arg1: long): long
    public getLongFromArrayVolatile(arg0: java.lang.Object, arg1: long): long
    public getObjectFromArray(arg0: java.lang.Object, arg1: long): java.lang.Object
    public getObjectFromArrayVolatile(arg0: java.lang.Object, arg1: long): java.lang.Object
    public putByteInArray(arg0: java.lang.Object, arg1: long, arg2: byte): void
    public putByteInArrayVolatile(arg0: java.lang.Object, arg1: long, arg2: byte): void
    public putCharInArray(arg0: java.lang.Object, arg1: long, arg2: char): void
    public putCharInArrayVolatile(arg0: java.lang.Object, arg1: long, arg2: char): void
    public putIntInArray(arg0: java.lang.Object, arg1: long, arg2: int): void
    public putIntInArrayVolatile(arg0: java.lang.Object, arg1: long, arg2: int): void
    public putLongInArray(arg0: java.lang.Object, arg1: long, arg2: long): void
    public putLongInArrayVolatile(arg0: java.lang.Object, arg1: long, arg2: long): void
    public putObjectInArray(arg0: java.lang.Object, arg1: long, arg2: java.lang.Object): void
    public putObjectInArrayVolatile(arg0: java.lang.Object, arg1: long, arg2: java.lang.Object): void
    public compareAndSwapIntInArray(arg0: java.lang.Object, arg1: long, arg2: int, arg3: int): boolean
    public compareAndSwapLongInArray(arg0: java.lang.Object, arg1: long, arg2: long, arg3: long): boolean
    public compareAndSwapObjectInArray(arg0: java.lang.Object, arg1: long, arg2: java.lang.Object, arg3: java.lang.Object): boolean
    public byteToCharUnsigned(arg0: byte): char
    public putByteInArrayByIndex(arg0: java.lang.Object, arg1: int, arg2: byte): void
    public getByteFromArrayByIndex(arg0: java.lang.Object, arg1: int): byte
    public putCharInArrayByIndex(arg0: java.lang.Object, arg1: int, arg2: char): void
    public getCharFromArrayByIndex(arg0: java.lang.Object, arg1: int): char
    public unsafeObjectShallowCopy32(arg0: java.lang.Object, arg1: java.lang.Object, arg2: int): void
    public unsafeObjectShallowCopy64(arg0: java.lang.Object, arg1: java.lang.Object, arg2: long): void
    public optimizedClone(arg0: java.lang.Object): java.lang.Object
    public getClassInitializeStatus(arg0: java.lang.Class<any>): int
    public GPUHelper(): void
    public is32Bit(): boolean
    public getNumBitsInReferenceField(): int
    public getNumBytesInReferenceField(): int
    public getNumBitsInDescriptionWord(): int
    public getNumBytesInDescriptionWord(): int
    public getNumBytesInJ9ObjectHeader(): int
    public getJ9ClassFromClass32(arg0: java.lang.Class): int
    public getClassFromJ9Class32(arg0: int): java.lang.Class
    public getTotalInstanceSizeFromJ9Class32(arg0: int): int
    public getInstanceDescriptionFromJ9Class32(arg0: int): int
    public getDescriptionWordFromPtr32(arg0: int): int
    public getJ9ClassFromClass64(arg0: java.lang.Class): long
    public getClassFromJ9Class64(arg0: long): java.lang.Class
    public getTotalInstanceSizeFromJ9Class64(arg0: long): long
    public getInstanceDescriptionFromJ9Class64(arg0: long): long
    public getDescriptionWordFromPtr64(arg0: long): long
    public getNumSlotsInObject(arg0: java.lang.Class): int
    public getSlotIndex(arg0: java.lang.reflect.Field): int
    public isDescriptorPointerTagged(arg0: int, arg1: long): boolean
    public getRomClassFromJ9Class32(arg0: int): int
    public getSuperClassesFromJ9Class32(arg0: int): int
    public getClassDepthAndFlagsFromJ9Class32(arg0: int): int
    public getBackfillOffsetFromJ9Class32(arg0: int): int
    public getArrayShapeFromRomClass32(arg0: int): int
    public getModifiersFromRomClass32(arg0: int): int
    public getRomClassFromJ9Class64(arg0: long): long
    public getSuperClassesFromJ9Class64(arg0: long): long
    public getClassDepthAndFlagsFromJ9Class64(arg0: long): long
    public getBackfillOffsetFromJ9Class64(arg0: long): long
    public getArrayShapeFromRomClass64(arg0: long): int
    public getModifiersFromRomClass64(arg0: long): int
    public getClassFlagsFromJ9Class32(arg0: int): int
    public getClassFlagsFromJ9Class64(arg0: long): int
    public static class: java.lang.Class<any>
}

        }
    }
}