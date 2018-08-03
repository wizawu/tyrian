declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace codegen {
                namespace types {
                    abstract class Type implements java.lang.Comparable<jdk.nashorn.internal.codegen.types.Type> , jdk.nashorn.internal.codegen.types.BytecodeOps , java.io.Serializable {
                        protected static readonly MIN_WEIGHT: int
                        protected static readonly MAX_WEIGHT: int
                        public static readonly BOOLEAN: jdk.nashorn.internal.codegen.types.Type
                        public static readonly INT: jdk.nashorn.internal.codegen.types.BitwiseType
                        public static readonly NUMBER: jdk.nashorn.internal.codegen.types.NumericType
                        public static readonly LONG: jdk.nashorn.internal.codegen.types.Type
                        public static readonly STRING: jdk.nashorn.internal.codegen.types.Type
                        public static readonly CHARSEQUENCE: jdk.nashorn.internal.codegen.types.Type
                        public static readonly OBJECT: jdk.nashorn.internal.codegen.types.Type
                        public static readonly UNDEFINED: jdk.nashorn.internal.codegen.types.Type
                        public static readonly SCRIPT_OBJECT: jdk.nashorn.internal.codegen.types.Type
                        public static readonly INT_ARRAY: jdk.nashorn.internal.codegen.types.ArrayType
                        public static readonly LONG_ARRAY: jdk.nashorn.internal.codegen.types.ArrayType
                        public static readonly NUMBER_ARRAY: jdk.nashorn.internal.codegen.types.ArrayType
                        public static readonly OBJECT_ARRAY: jdk.nashorn.internal.codegen.types.ArrayType
                        public static readonly THIS: jdk.nashorn.internal.codegen.types.Type
                        public static readonly SCOPE: jdk.nashorn.internal.codegen.types.Type
                        public static readonly UNKNOWN: jdk.nashorn.internal.codegen.types.Type
                        public static readonly SLOT_2: jdk.nashorn.internal.codegen.types.Type
                        public getWeight(): int
                        public getTypeClass(): java.lang.Class<any>
                        public nextWider(): jdk.nashorn.internal.codegen.types.Type
                        public getBoxedType(): java.lang.Class<any>
                        public abstract getBytecodeStackType(): char
                        public static getMethodDescriptor(arg0: jdk.nashorn.internal.codegen.types.Type | jdk.nashorn.internal.codegen.types.Type$$Lambda, ...arg1: jdk.nashorn.internal.codegen.types.Type[]): string
                        public static getMethodDescriptor(arg0: java.lang.Class<any>, ...arg1: java.lang.Class<any>[]): string
                        public static getShortSignatureDescriptor(arg0: jdk.nashorn.internal.codegen.types.Type | jdk.nashorn.internal.codegen.types.Type$$Lambda): char
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
                        public isEquivalentTo(arg0: jdk.nashorn.internal.codegen.types.Type | jdk.nashorn.internal.codegen.types.Type$$Lambda): boolean
                        public static isAssignableFrom(arg0: jdk.nashorn.internal.codegen.types.Type | jdk.nashorn.internal.codegen.types.Type$$Lambda, arg1: jdk.nashorn.internal.codegen.types.Type | jdk.nashorn.internal.codegen.types.Type$$Lambda): boolean
                        public isAssignableFrom(arg0: jdk.nashorn.internal.codegen.types.Type | jdk.nashorn.internal.codegen.types.Type$$Lambda): boolean
                        public static areEquivalent(arg0: jdk.nashorn.internal.codegen.types.Type | jdk.nashorn.internal.codegen.types.Type$$Lambda, arg1: jdk.nashorn.internal.codegen.types.Type | jdk.nashorn.internal.codegen.types.Type$$Lambda): boolean
                        public getSlots(): int
                        public static widest(arg0: jdk.nashorn.internal.codegen.types.Type | jdk.nashorn.internal.codegen.types.Type$$Lambda, arg1: jdk.nashorn.internal.codegen.types.Type | jdk.nashorn.internal.codegen.types.Type$$Lambda): jdk.nashorn.internal.codegen.types.Type
                        public static widest(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>): java.lang.Class<any>
                        public static widestReturnType(arg0: jdk.nashorn.internal.codegen.types.Type | jdk.nashorn.internal.codegen.types.Type$$Lambda, arg1: jdk.nashorn.internal.codegen.types.Type | jdk.nashorn.internal.codegen.types.Type$$Lambda): jdk.nashorn.internal.codegen.types.Type
                        public static generic(arg0: jdk.nashorn.internal.codegen.types.Type | jdk.nashorn.internal.codegen.types.Type$$Lambda): jdk.nashorn.internal.codegen.types.Type
                        public static narrowest(arg0: jdk.nashorn.internal.codegen.types.Type | jdk.nashorn.internal.codegen.types.Type$$Lambda, arg1: jdk.nashorn.internal.codegen.types.Type | jdk.nashorn.internal.codegen.types.Type$$Lambda): jdk.nashorn.internal.codegen.types.Type
                        public narrowerThan(arg0: jdk.nashorn.internal.codegen.types.Type | jdk.nashorn.internal.codegen.types.Type$$Lambda): boolean
                        public widerThan(arg0: jdk.nashorn.internal.codegen.types.Type | jdk.nashorn.internal.codegen.types.Type$$Lambda): boolean
                        public static widest(arg0: jdk.nashorn.internal.codegen.types.Type | jdk.nashorn.internal.codegen.types.Type$$Lambda, arg1: jdk.nashorn.internal.codegen.types.Type | jdk.nashorn.internal.codegen.types.Type$$Lambda, arg2: jdk.nashorn.internal.codegen.types.Type | jdk.nashorn.internal.codegen.types.Type$$Lambda): jdk.nashorn.internal.codegen.types.Type
                        public static narrowest(arg0: jdk.nashorn.internal.codegen.types.Type | jdk.nashorn.internal.codegen.types.Type$$Lambda, arg1: jdk.nashorn.internal.codegen.types.Type | jdk.nashorn.internal.codegen.types.Type$$Lambda, arg2: jdk.nashorn.internal.codegen.types.Type | jdk.nashorn.internal.codegen.types.Type$$Lambda): jdk.nashorn.internal.codegen.types.Type
                        public narrowest(arg0: jdk.nashorn.internal.codegen.types.Type | jdk.nashorn.internal.codegen.types.Type$$Lambda): jdk.nashorn.internal.codegen.types.Type
                        public widest(arg0: jdk.nashorn.internal.codegen.types.Type | jdk.nashorn.internal.codegen.types.Type$$Lambda): jdk.nashorn.internal.codegen.types.Type
                        public getDescriptor(): string
                        public getShortDescriptor(): string
                        public toString(): string
                        public static typeFor(arg0: java.lang.Class<any>): jdk.nashorn.internal.codegen.types.Type
                        public compareTo(arg0: jdk.nashorn.internal.codegen.types.Type | jdk.nashorn.internal.codegen.types.Type$$Lambda): int
                        public dup(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: int): jdk.nashorn.internal.codegen.types.Type
                        public swap(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: jdk.nashorn.internal.codegen.types.Type | jdk.nashorn.internal.codegen.types.Type$$Lambda): jdk.nashorn.internal.codegen.types.Type
                        public pop(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        public loadEmpty(arg0: jdk.internal.org.objectweb.asm.MethodVisitor): jdk.nashorn.internal.codegen.types.Type
                        protected static pop(arg0: jdk.internal.org.objectweb.asm.MethodVisitor, arg1: jdk.nashorn.internal.codegen.types.Type | jdk.nashorn.internal.codegen.types.Type$$Lambda): void
                        protected readResolve(): java.lang.Object
                        public compareTo(arg0: java.lang.Object): int
                        public static class: java.lang.Class<any>
                    }
                    interface Type$$Lambda implements java.lang.Comparable<jdk.nashorn.internal.codegen.types.Type> , jdk.nashorn.internal.codegen.types.BytecodeOps , java.io.Serializable {
                        (): char
                    }
                }
            }
        }
    }
}