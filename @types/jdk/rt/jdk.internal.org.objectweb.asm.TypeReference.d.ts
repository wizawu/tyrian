declare namespace jdk {
    namespace internal {
        namespace org {
            namespace objectweb {
                namespace asm {
                    class TypeReference {
                        public static CLASS_TYPE_PARAMETER: int
                        public static METHOD_TYPE_PARAMETER: int
                        public static CLASS_EXTENDS: int
                        public static CLASS_TYPE_PARAMETER_BOUND: int
                        public static METHOD_TYPE_PARAMETER_BOUND: int
                        public static FIELD: int
                        public static METHOD_RETURN: int
                        public static METHOD_RECEIVER: int
                        public static METHOD_FORMAL_PARAMETER: int
                        public static THROWS: int
                        public static LOCAL_VARIABLE: int
                        public static RESOURCE_VARIABLE: int
                        public static EXCEPTION_PARAMETER: int
                        public static INSTANCEOF: int
                        public static NEW: int
                        public static CONSTRUCTOR_REFERENCE: int
                        public static METHOD_REFERENCE: int
                        public static CAST: int
                        public static CONSTRUCTOR_INVOCATION_TYPE_ARGUMENT: int
                        public static METHOD_INVOCATION_TYPE_ARGUMENT: int
                        public static CONSTRUCTOR_REFERENCE_TYPE_ARGUMENT: int
                        public static METHOD_REFERENCE_TYPE_ARGUMENT: int
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