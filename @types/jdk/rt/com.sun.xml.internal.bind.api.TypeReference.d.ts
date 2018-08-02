declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace api {
class TypeReference {
    public tagName: javax.xml.namespace.QName
    public type: java.lang.reflect.Type
    public annotations: java.lang.annotation.Annotation[]
    public constructor(arg0: javax.xml.namespace.QName, arg1: java.lang.reflect.Type | java.lang.reflect.Type$$Lambda, ...arg2: java.lang.annotation.Annotation[])
    public get<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<A>): A
    public toItemType<A extends java.lang.annotation.Annotation>(): com.sun.xml.internal.bind.api.TypeReference
    public equals<A extends java.lang.annotation.Annotation>(arg0: java.lang.Object): boolean
    public hashCode<A extends java.lang.annotation.Annotation>(): int
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}