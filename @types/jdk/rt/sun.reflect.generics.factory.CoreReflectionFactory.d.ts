declare namespace sun {
    namespace reflect {
        namespace generics {
            namespace factory {
                class CoreReflectionFactory implements sun.reflect.generics.factory.GenericsFactory {
                    public static make(arg0: java.lang.reflect.GenericDeclaration, arg1: sun.reflect.generics.scope.Scope | sun.reflect.generics.scope.Scope$$Lambda): sun.reflect.generics.factory.CoreReflectionFactory
                    public makeTypeVariable(arg0: java.lang.String | string, arg1: sun.reflect.generics.tree.FieldTypeSignature[]): java.lang.reflect.TypeVariable<any>
                    public makeWildcard(arg0: sun.reflect.generics.tree.FieldTypeSignature[], arg1: sun.reflect.generics.tree.FieldTypeSignature[]): java.lang.reflect.WildcardType
                    public makeParameterizedType(arg0: java.lang.reflect.Type | java.lang.reflect.Type$$Lambda, arg1: java.lang.reflect.Type[], arg2: java.lang.reflect.Type | java.lang.reflect.Type$$Lambda): java.lang.reflect.ParameterizedType
                    public findTypeVariable(arg0: java.lang.String | string): java.lang.reflect.TypeVariable<any>
                    public makeNamedType(arg0: java.lang.String | string): java.lang.reflect.Type
                    public makeArrayType(arg0: java.lang.reflect.Type | java.lang.reflect.Type$$Lambda): java.lang.reflect.Type
                    public makeByte(): java.lang.reflect.Type
                    public makeBool(): java.lang.reflect.Type
                    public makeShort(): java.lang.reflect.Type
                    public makeChar(): java.lang.reflect.Type
                    public makeInt(): java.lang.reflect.Type
                    public makeLong(): java.lang.reflect.Type
                    public makeFloat(): java.lang.reflect.Type
                    public makeDouble(): java.lang.reflect.Type
                    public makeVoid(): java.lang.reflect.Type
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}