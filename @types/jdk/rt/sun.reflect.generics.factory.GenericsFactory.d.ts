declare namespace sun {
    namespace reflect {
        namespace generics {
            namespace factory {
                interface GenericsFactory {
                    makeTypeVariable(arg0: java.lang.String | string, arg1: sun.reflect.generics.tree.FieldTypeSignature[]): java.lang.reflect.TypeVariable<any>
                    makeParameterizedType(arg0: java.lang.reflect.Type | java.lang.reflect.Type$$Lambda, arg1: java.lang.reflect.Type[], arg2: java.lang.reflect.Type | java.lang.reflect.Type$$Lambda): java.lang.reflect.ParameterizedType
                    findTypeVariable(arg0: java.lang.String | string): java.lang.reflect.TypeVariable<any>
                    makeWildcard(arg0: sun.reflect.generics.tree.FieldTypeSignature[], arg1: sun.reflect.generics.tree.FieldTypeSignature[]): java.lang.reflect.WildcardType
                    makeNamedType(arg0: java.lang.String | string): java.lang.reflect.Type
                    makeArrayType(arg0: java.lang.reflect.Type | java.lang.reflect.Type$$Lambda): java.lang.reflect.Type
                    makeByte(): java.lang.reflect.Type
                    makeBool(): java.lang.reflect.Type
                    makeShort(): java.lang.reflect.Type
                    makeChar(): java.lang.reflect.Type
                    makeInt(): java.lang.reflect.Type
                    makeLong(): java.lang.reflect.Type
                    makeFloat(): java.lang.reflect.Type
                    makeDouble(): java.lang.reflect.Type
                    makeVoid(): java.lang.reflect.Type
                }
            }
        }
    }
}