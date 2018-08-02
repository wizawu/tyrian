declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace codegen {
                namespace types {
                    abstract class Type implements java.lang.Comparable<jdk.nashorn.internal.codegen.types.Type> , jdk.nashorn.internal.codegen.types.BytecodeOps , java.io.Serializable {
                        protected static MIN_WEIGHT: int
                        protected static MAX_WEIGHT: int
                        public static BOOLEAN: jdk.nashorn.internal.codegen.types.Type
                        public static INT: jdk.nashorn.internal.codegen.types.BitwiseType
                        public static NUMBER: jdk.nashorn.internal.codegen.types.NumericType
                        public static LONG: jdk.nashorn.internal.codegen.types.Type
                        public static STRING: jdk.nashorn.internal.codegen.types.Type
                        public static CHARSEQUENCE: jdk.nashorn.internal.codegen.types.Type
                        public static OBJECT: jdk.nashorn.internal.codegen.types.Type
                        public static UNDEFINED: jdk.nashorn.internal.codegen.types.Type
                        public static SCRIPT_OBJECT: jdk.nashorn.internal.codegen.types.Type
                        public static INT_ARRAY: jdk.nashorn.internal.codegen.types.ArrayType
                        public static LONG_ARRAY: jdk.nashorn.internal.codegen.types.ArrayType
                        public static NUMBER_ARRAY: jdk.nashorn.internal.codegen.types.ArrayType
                        public static OBJECT_ARRAY: jdk.nashorn.internal.codegen.types.ArrayType
                        public static THIS: jdk.nashorn.internal.codegen.types.Type
                        public static SCOPE: jdk.nashorn.internal.codegen.types.Type
                        public static UNKNOWN: jdk.nashorn.internal.codegen.types.Type
                        public static SLOT_2: jdk.nashorn.internal.codegen.types.Type
                        public getWeight(): int
                        public getTypeClass(): java.lang.Class<any>
                        public nextWider(): jdk.nashorn.internal.codegen.types.Type
                        public getBoxedType(): java.lang.Class<any>
                        public getBytecodeStackType(): char
                        public static getMethodDescriptor(arg0: jdk.nashorn.internal.codegen.types.Type, ...arg1: jdk.nashorn.internal.codegen.types.Type[]): string
                        public static getMethodDescriptor(arg0: java.lang.Class<any>, ...arg1: java.lang.Class<any>[]): string
                        public static getShortSignatureDescriptor(arg0: jdk.nashorn.internal.codegen.types.Type): char
                        public static getMethodReturnType(arg0: java.lang.String | string): jdk.nashorn.internal.codegen.types.Type
                        public static getMethodArguments(arg0: java.lang.String | string): jdk.nashorn.internal.codegen.types.Type[]
                        public static writeTypeMap(arg0: java.util.Map<java.lang.Integer, jdk.nashorn.internal.codegen.types.Type>, arg1: java.io.DataOutput): void
                        public static readTypeMap(arg0: java.io.DataInput): java.util.Map<java.lang.Integer, jdk.nashorn.internal.codegen.types.Type>
                        public getInternalName(): string
                        public static getInternalName(arg0: java.lang.Class<any>): string
                        public isUnknown(): boolean
                        public isJSPrimitive(): boolean
                        public isBoolean(): boolean
                        public isInteger(): boolean
                        public isLong(): boolean
                        public isNumber(): boolean
                        public isNumeric(): boolean
                        public isArray(): boolean
                        public isCategory2(): boolean
                        public isObject(): boolean
                        public isPrimitive(): boolean
                        public isString(): boolean
                        public isCharSequence(): boolean
                        public isEquivalentTo(arg0: jdk.nashorn.internal.codegen.types.Type): boolean
                        public static isAssignableFrom(arg0: jdk.nashorn.internal.codegen.types.Type, arg1: jdk.nashorn.internal.codegen.types.Type): boolean
                        public isAssignableFrom(arg0: jdk.nashorn.internal.codegen.types.Type): boolean
                        public static areEquivalent(arg0: jdk.nashorn.internal.codegen.types.Type, arg1: jdk.nashorn.internal.codegen.types.Type): boolean
                        public getSlots(): int
                        public static widest(arg0: jdk.nashorn.internal.codegen.types.Type, arg1: jdk.nashorn.internal.codegen.types.Type): jdk.nashorn.internal.codegen.types.Type
                        public static widest(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>): java.lang.Class<any>
                        public static widestReturnType(arg0: jdk.nashorn.internal.codegen.types.Type, arg1: jdk.nashorn.internal.codegen.types.Type): jdk.nashorn.internal.codegen.types.Type
                        public static generic(arg0: jdk.nashorn.internal.codegen.types.Type): jdk.nashorn.internal.codegen.types.Type
                        public static narrowest(arg0: jdk.nashorn.internal.codegen.types.Type, arg1: jdk.nashorn.internal.codegen.types.Type): jdk.nashorn.internal.codegen.types.Type
                        public narrowerThan(arg0: jdk.nashorn.internal.codegen.types.Type): boolean
                        public widerThan(arg0: jdk.nashorn.internal.codegen.types.Type): boolean
                        public static widest(arg0: jdk.nashorn.internal.codegen.types.Type, arg1: jdk.nashorn.internal.codegen.types.Type, arg2: jdk.nashorn.internal.codegen.types.Type): jdk.nashorn.internal.codegen.types.Type
                        public static narrowest(arg0: jdk.nashorn.internal.codegen.types.Type, arg1: jdk.nashorn.internal.codegen.types.Type, arg2: jdk.nashorn.internal.codegen.types.Type): jdk.nashorn.internal.codegen.types.Type
                        public narrowest(arg0: jdk.nashorn.internal.codegen.types.Type): jdk.nashorn.internal.codegen.types.Type
                        public widest(arg0: jdk.nashorn.internal.codegen.types.Type): jdk.nashorn.internal.codegen.types.Type
                        public getDescriptor(): string
                        public getShortDescriptor(): string
                        public toString(): string
                        public static typeFor(arg0: java.lang.Class<any>): jdk.nashorn.internal.codegen.types.Type
                        public compareTo(arg0: jdk.nashorn.internal.codegen.types.Type): int
                        public dup(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): jdk.nashorn.internal.codegen.types.Type
                        public swap(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: jdk.nashorn.internal.codegen.types.Type): jdk.nashorn.internal.codegen.types.Type
                        public pop(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        public loadEmpty(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        protected static pop(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: jdk.nashorn.internal.codegen.types.Type): void
                        protected readResolve(): java.lang.Object
                        public compareTo(arg0: java.lang.Object): int
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}