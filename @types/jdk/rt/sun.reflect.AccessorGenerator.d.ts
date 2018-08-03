declare namespace sun {
    namespace reflect {
        class AccessorGenerator implements sun.reflect.ClassFileConstants {
            protected static readonly S0: short
            protected static readonly S1: short
            protected static readonly S2: short
            protected static readonly S3: short
            protected static readonly S4: short
            protected static readonly S5: short
            protected static readonly S6: short
            protected asm: sun.reflect.ClassFileAssembler
            protected modifiers: int
            protected thisClass: short
            protected superClass: short
            protected targetClass: short
            protected throwableClass: short
            protected classCastClass: short
            protected nullPointerClass: short
            protected illegalArgumentClass: short
            protected invocationTargetClass: short
            protected initIdx: short
            protected initNameAndTypeIdx: short
            protected initStringNameAndTypeIdx: short
            protected nullPointerCtorIdx: short
            protected illegalArgumentCtorIdx: short
            protected illegalArgumentStringCtorIdx: short
            protected invocationTargetCtorIdx: short
            protected superCtorIdx: short
            protected objectClass: short
            protected toStringIdx: short
            protected codeIdx: short
            protected exceptionsIdx: short
            protected booleanIdx: short
            protected booleanCtorIdx: short
            protected booleanUnboxIdx: short
            protected byteIdx: short
            protected byteCtorIdx: short
            protected byteUnboxIdx: short
            protected characterIdx: short
            protected characterCtorIdx: short
            protected characterUnboxIdx: short
            protected doubleIdx: short
            protected doubleCtorIdx: short
            protected doubleUnboxIdx: short
            protected floatIdx: short
            protected floatCtorIdx: short
            protected floatUnboxIdx: short
            protected integerIdx: short
            protected integerCtorIdx: short
            protected integerUnboxIdx: short
            protected longIdx: short
            protected longCtorIdx: short
            protected longUnboxIdx: short
            protected shortIdx: short
            protected shortCtorIdx: short
            protected shortUnboxIdx: short
            protected readonly NUM_COMMON_CPOOL_ENTRIES: short
            protected readonly NUM_BOXING_CPOOL_ENTRIES: short
            protected static readonly primitiveTypes: java.lang.Class<any>[]
            protected emitCommonConstantPoolEntries(): void
            protected emitBoxingContantPoolEntries(): void
            protected static add(arg0: short, arg1: short): short
            protected static sub(arg0: short, arg1: short): short
            protected isStatic(): boolean
            protected isPrivate(): boolean
            protected static getClassName(arg0: java.lang.Class<any>, arg1: boolean): string
            protected emitConstructor(): void
            protected emitMethod(arg0: short, arg1: int, arg2: sun.reflect.ClassFileAssembler, arg3: sun.reflect.ClassFileAssembler, arg4: short[]): void
            protected indexForPrimitiveType(arg0: java.lang.Class<any>): short
            protected ctorIndexForPrimitiveType(arg0: java.lang.Class<any>): short
            protected static canWidenTo(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>): boolean
            protected static emitWideningBytecodeForPrimitiveConversion(arg0: sun.reflect.ClassFileAssembler, arg1: java.lang.Class<any>, arg2: java.lang.Class<any>): void
            protected unboxingMethodForPrimitiveType(arg0: java.lang.Class<any>): short
            protected static isPrimitive(arg0: java.lang.Class<any>): boolean
            protected typeSizeInStackSlots(arg0: java.lang.Class<any>): int
            protected illegalArgumentCodeBuffer(): sun.reflect.ClassFileAssembler
            public static class: java.lang.Class<any>
        }
    }
}