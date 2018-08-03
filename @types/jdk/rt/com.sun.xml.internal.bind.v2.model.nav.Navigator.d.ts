declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace model {
                            namespace nav {
                                interface Navigator<T, C, F, M> {
                                    getSuperClass(arg0: C): C
                                    getBaseClass(arg0: T, arg1: C): T
                                    getClassName(arg0: C): string
                                    getTypeName(arg0: T): string
                                    getClassShortName(arg0: C): string
                                    getDeclaredFields(arg0: C): java.util.Collection<F>
                                    getDeclaredField(arg0: C, arg1: java.lang.String | string): F
                                    getDeclaredMethods(arg0: C): java.util.Collection<M>
                                    getDeclaringClassForField(arg0: F): C
                                    getDeclaringClassForMethod(arg0: M): C
                                    getFieldType(arg0: F): T
                                    getFieldName(arg0: F): string
                                    getMethodName(arg0: M): string
                                    getReturnType(arg0: M): T
                                    getMethodParameters(arg0: M): T[]
                                    isStaticMethod(arg0: M): boolean
                                    isSubClassOf(arg0: T, arg1: T): boolean
                                    ref(arg0: java.lang.Class): T
                                    use(arg0: C): T
                                    asDecl(arg0: T): C
                                    asDecl(arg0: java.lang.Class): C
                                    isArray(arg0: T): boolean
                                    isArrayButNotByteArray(arg0: T): boolean
                                    getComponentType(arg0: T): T
                                    getTypeArgument(arg0: T, arg1: int): T
                                    isParameterizedType(arg0: T): boolean
                                    isPrimitive(arg0: T): boolean
                                    getPrimitive(arg0: java.lang.Class): T
                                    getClassLocation(arg0: C): com.sun.xml.internal.bind.v2.runtime.Location
                                    getFieldLocation(arg0: F): com.sun.xml.internal.bind.v2.runtime.Location
                                    getMethodLocation(arg0: M): com.sun.xml.internal.bind.v2.runtime.Location
                                    hasDefaultConstructor(arg0: C): boolean
                                    isStaticField(arg0: F): boolean
                                    isPublicMethod(arg0: M): boolean
                                    isFinalMethod(arg0: M): boolean
                                    isPublicField(arg0: F): boolean
                                    isEnum(arg0: C): boolean
                                    erasure<P>(arg0: T): T
                                    isAbstract<P>(arg0: C): boolean
                                    isFinal<P>(arg0: C): boolean
                                    getEnumConstants<P>(arg0: C): F[]
                                    getVoidType<P>(): T
                                    getPackageName<P>(arg0: C): string
                                    loadObjectFactory<P>(arg0: C, arg1: java.lang.String | string): C
                                    isBridgeMethod<P>(arg0: M): boolean
                                    isOverriding<P>(arg0: M, arg1: C): boolean
                                    isInterface<P>(arg0: C): boolean
                                    isTransient<P>(arg0: F): boolean
                                    isInnerClass<P>(arg0: C): boolean
                                    isSameType<P>(arg0: T, arg1: T): boolean
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}