declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace model {
                            namespace nav {
class ReflectionNavigator implements com.sun.xml.internal.bind.v2.model.nav.Navigator<java.lang.reflect.Type, java.lang.Class, java.lang.reflect.Field, java.lang.reflect.Method> {
    public getSuperClass(arg0: java.lang.Class): java.lang.Class
    public getBaseClass(arg0: java.lang.reflect.Type | java.lang.reflect.Type$$Lambda, arg1: java.lang.Class): java.lang.reflect.Type
    public getClassName(arg0: java.lang.Class): string
    public getTypeName(arg0: java.lang.reflect.Type | java.lang.reflect.Type$$Lambda): string
    public getClassShortName(arg0: java.lang.Class): string
    public getDeclaredFields(arg0: java.lang.Class): java.util.Collection<java.lang.reflect.Field>
    public getDeclaredField(arg0: java.lang.Class, arg1: java.lang.String | string): java.lang.reflect.Field
    public getDeclaredMethods(arg0: java.lang.Class): java.util.Collection<java.lang.reflect.Method>
    public getDeclaringClassForField(arg0: java.lang.reflect.Field): java.lang.Class
    public getDeclaringClassForMethod(arg0: java.lang.reflect.Method): java.lang.Class
    public getFieldType(arg0: java.lang.reflect.Field): java.lang.reflect.Type
    public getFieldName(arg0: java.lang.reflect.Field): string
    public getMethodName(arg0: java.lang.reflect.Method): string
    public getReturnType(arg0: java.lang.reflect.Method): java.lang.reflect.Type
    public getMethodParameters(arg0: java.lang.reflect.Method): java.lang.reflect.Type[]
    public isStaticMethod(arg0: java.lang.reflect.Method): boolean
    public isFinalMethod(arg0: java.lang.reflect.Method): boolean
    public isSubClassOf(arg0: java.lang.reflect.Type | java.lang.reflect.Type$$Lambda, arg1: java.lang.reflect.Type | java.lang.reflect.Type$$Lambda): boolean
    public ref(arg0: java.lang.Class): java.lang.Class
    public use(arg0: java.lang.Class): java.lang.Class
    public asDecl(arg0: java.lang.reflect.Type | java.lang.reflect.Type$$Lambda): java.lang.Class
    public asDecl(arg0: java.lang.Class): java.lang.Class
    public erasure<T>(arg0: java.lang.reflect.Type | java.lang.reflect.Type$$Lambda): java.lang.Class<T>
    public isAbstract<T>(arg0: java.lang.Class): boolean
    public isFinal<T>(arg0: java.lang.Class): boolean
    public createParameterizedType<T>(arg0: java.lang.Class, ...arg1: java.lang.reflect.Type[]): java.lang.reflect.Type
    public isArray<T>(arg0: java.lang.reflect.Type | java.lang.reflect.Type$$Lambda): boolean
    public isArrayButNotByteArray<T>(arg0: java.lang.reflect.Type | java.lang.reflect.Type$$Lambda): boolean
    public getComponentType<T>(arg0: java.lang.reflect.Type | java.lang.reflect.Type$$Lambda): java.lang.reflect.Type
    public getTypeArgument<T>(arg0: java.lang.reflect.Type | java.lang.reflect.Type$$Lambda, arg1: int): java.lang.reflect.Type
    public isParameterizedType<T>(arg0: java.lang.reflect.Type | java.lang.reflect.Type$$Lambda): boolean
    public isPrimitive<T>(arg0: java.lang.reflect.Type | java.lang.reflect.Type$$Lambda): boolean
    public getPrimitive<T>(arg0: java.lang.Class): java.lang.reflect.Type
    public getClassLocation<T>(arg0: java.lang.Class): com.sun.xml.internal.bind.v2.runtime.Location
    public getFieldLocation<T>(arg0: java.lang.reflect.Field): com.sun.xml.internal.bind.v2.runtime.Location
    public getMethodLocation<T>(arg0: java.lang.reflect.Method): com.sun.xml.internal.bind.v2.runtime.Location
    public hasDefaultConstructor<T>(arg0: java.lang.Class): boolean
    public isStaticField<T>(arg0: java.lang.reflect.Field): boolean
    public isPublicMethod<T>(arg0: java.lang.reflect.Method): boolean
    public isPublicField<T>(arg0: java.lang.reflect.Field): boolean
    public isEnum<T>(arg0: java.lang.Class): boolean
    public getEnumConstants<T>(arg0: java.lang.Class): java.lang.reflect.Field[]
    public getVoidType<T>(): java.lang.reflect.Type
    public getPackageName<T>(arg0: java.lang.Class): string
    public loadObjectFactory<T>(arg0: java.lang.Class, arg1: java.lang.String | string): java.lang.Class
    public isBridgeMethod<T>(arg0: java.lang.reflect.Method): boolean
    public isOverriding<T>(arg0: java.lang.reflect.Method, arg1: java.lang.Class): boolean
    public isInterface<T>(arg0: java.lang.Class): boolean
    public isTransient<T>(arg0: java.lang.reflect.Field): boolean
    public isInnerClass<T>(arg0: java.lang.Class): boolean
    public isSameType<T>(arg0: java.lang.reflect.Type | java.lang.reflect.Type$$Lambda, arg1: java.lang.reflect.Type | java.lang.reflect.Type$$Lambda): boolean
    public isSameType<T>(arg0: java.lang.Object, arg1: java.lang.Object): boolean
    public isInnerClass<T>(arg0: java.lang.Object): boolean
    public isTransient<T>(arg0: java.lang.Object): boolean
    public isInterface<T>(arg0: java.lang.Object): boolean
    public isOverriding<T>(arg0: java.lang.Object, arg1: java.lang.Object): boolean
    public isBridgeMethod<T>(arg0: java.lang.Object): boolean
    public loadObjectFactory<T>(arg0: java.lang.Object, arg1: java.lang.String | string): java.lang.Object
    public getPackageName<T>(arg0: java.lang.Object): string
    public getVoidType<T>(): java.lang.Object
    public getEnumConstants<T>(arg0: java.lang.Object): java.lang.Object[]
    public isFinal<T>(arg0: java.lang.Object): boolean
    public isAbstract<T>(arg0: java.lang.Object): boolean
    public erasure<T>(arg0: java.lang.Object): java.lang.Object
    public isEnum<T>(arg0: java.lang.Object): boolean
    public isPublicField<T>(arg0: java.lang.Object): boolean
    public isFinalMethod<T>(arg0: java.lang.Object): boolean
    public isPublicMethod<T>(arg0: java.lang.Object): boolean
    public isStaticField<T>(arg0: java.lang.Object): boolean
    public hasDefaultConstructor<T>(arg0: java.lang.Object): boolean
    public getMethodLocation<T>(arg0: java.lang.Object): com.sun.xml.internal.bind.v2.runtime.Location
    public getFieldLocation<T>(arg0: java.lang.Object): com.sun.xml.internal.bind.v2.runtime.Location
    public getClassLocation<T>(arg0: java.lang.Object): com.sun.xml.internal.bind.v2.runtime.Location
    public getPrimitive<T>(arg0: java.lang.Class): java.lang.Object
    public isPrimitive<T>(arg0: java.lang.Object): boolean
    public isParameterizedType<T>(arg0: java.lang.Object): boolean
    public getTypeArgument<T>(arg0: java.lang.Object, arg1: int): java.lang.Object
    public getComponentType<T>(arg0: java.lang.Object): java.lang.Object
    public isArrayButNotByteArray<T>(arg0: java.lang.Object): boolean
    public isArray<T>(arg0: java.lang.Object): boolean
    public asDecl<T>(arg0: java.lang.Class): java.lang.Object
    public asDecl<T>(arg0: java.lang.Object): java.lang.Object
    public use<T>(arg0: java.lang.Object): java.lang.Object
    public ref<T>(arg0: java.lang.Class): java.lang.Object
    public isSubClassOf<T>(arg0: java.lang.Object, arg1: java.lang.Object): boolean
    public isStaticMethod<T>(arg0: java.lang.Object): boolean
    public getMethodParameters<T>(arg0: java.lang.Object): java.lang.Object[]
    public getReturnType<T>(arg0: java.lang.Object): java.lang.Object
    public getMethodName<T>(arg0: java.lang.Object): string
    public getFieldName<T>(arg0: java.lang.Object): string
    public getFieldType<T>(arg0: java.lang.Object): java.lang.Object
    public getDeclaringClassForMethod<T>(arg0: java.lang.Object): java.lang.Object
    public getDeclaringClassForField<T>(arg0: java.lang.Object): java.lang.Object
    public getDeclaredMethods<T>(arg0: java.lang.Object): java.util.Collection
    public getDeclaredField<T>(arg0: java.lang.Object, arg1: java.lang.String | string): java.lang.Object
    public getDeclaredFields<T>(arg0: java.lang.Object): java.util.Collection
    public getClassShortName<T>(arg0: java.lang.Object): string
    public getTypeName<T>(arg0: java.lang.Object): string
    public getClassName<T>(arg0: java.lang.Object): string
    public getBaseClass<T>(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
    public getSuperClass<T>(arg0: java.lang.Object): java.lang.Object
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