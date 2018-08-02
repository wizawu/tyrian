declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace model {
                            namespace nav {
abstract class TypeVisitor<T, P> {
    public visit(arg0: java.lang.reflect.Type | java.lang.reflect.Type$$Lambda, arg1: P): T
    protected onClass(arg0: java.lang.Class, arg1: P): T
    protected onParameterizdType(arg0: java.lang.reflect.ParameterizedType, arg1: P): T
    protected onGenericArray(arg0: java.lang.reflect.GenericArrayType, arg1: P): T
    protected onVariable(arg0: java.lang.reflect.TypeVariable, arg1: P): T
    protected onWildcard(arg0: java.lang.reflect.WildcardType, arg1: P): T
    public static class: java.lang.Class<any>
}

                            }
                        }
                    }
                }
            }
        }
    }
}