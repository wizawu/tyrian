declare namespace jdk {
    namespace internal {
        namespace org {
            namespace objectweb {
                namespace asm {
                    class TypeReference {
                        public static readonly CLASS_TYPE_PARAMETER: int
                        public static readonly METHOD_TYPE_PARAMETER: int
                        public static readonly CLASS_EXTENDS: int
                        public static readonly CLASS_TYPE_PARAMETER_BOUND: int
                        public static readonly METHOD_TYPE_PARAMETER_BOUND: int
                        public static readonly FIELD: int
                        public static readonly METHOD_RETURN: int
                        public static readonly METHOD_RECEIVER: int
                        public static readonly METHOD_FORMAL_PARAMETER: int
                        public static readonly THROWS: int
                        public static readonly LOCAL_VARIABLE: int
                        public static readonly RESOURCE_VARIABLE: int
                        public static readonly EXCEPTION_PARAMETER: int
                        public static readonly INSTANCEOF: int
                        public static readonly NEW: int
                        public static readonly CONSTRUCTOR_REFERENCE: int
                        public static readonly METHOD_REFERENCE: int
                        public static readonly CAST: int
                        public static readonly CONSTRUCTOR_INVOCATION_TYPE_ARGUMENT: int
                        public static readonly METHOD_INVOCATION_TYPE_ARGUMENT: int
                        public static readonly CONSTRUCTOR_REFERENCE_TYPE_ARGUMENT: int
                        public static readonly METHOD_REFERENCE_TYPE_ARGUMENT: int
                        public constructor(arg0: int)
                        public static newTypeReference(arg0: int): jdk.internal.org.objectweb.asm.TypeReference
                        public static newTypeParameterReference(arg0: int, arg1: int): jdk.internal.org.objectweb.asm.TypeReference
                        public static newTypeParameterBoundReference(arg0: int, arg1: int, arg2: int): jdk.internal.org.objectweb.asm.TypeReference
                        public static newSuperTypeReference(arg0: int): jdk.internal.org.objectweb.asm.TypeReference
                        public static newFormalParameterReference(arg0: int): jdk.internal.org.objectweb.asm.TypeReference
                        public static newExceptionReference(arg0: int): jdk.internal.org.objectweb.asm.TypeReference
                        public static newTryCatchReference(arg0: int): jdk.internal.org.objectweb.asm.TypeReference
                        public static newTypeArgumentReference(arg0: int, arg1: int): jdk.internal.org.objectweb.asm.TypeReference
                        public getSort(): int
                        public getTypeParameterIndex(): int
                        public getTypeParameterBoundIndex(): int
                        public getSuperTypeIndex(): int
                        public getFormalParameterIndex(): int
                        public getExceptionIndex(): int
                        public getTryCatchBlockIndex(): int
                        public getTypeArgumentIndex(): int
                        public getValue(): int
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}