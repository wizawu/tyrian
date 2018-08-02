declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace model {
                            namespace impl {
class GetterSetterPropertySeed<TypeT, ClassDeclT, FieldT, MethodT> implements com.sun.xml.internal.bind.v2.model.impl.PropertySeed<TypeT, ClassDeclT, FieldT, MethodT> {
    protected getter: MethodT
    protected setter: MethodT
    public getRawType(): TypeT
    public readAnnotation<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<A>): A
    public hasAnnotation<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<java.lang.annotation.Annotation>): boolean
    public getName<A extends java.lang.annotation.Annotation>(): string
    public getUpstream<A extends java.lang.annotation.Annotation>(): com.sun.xml.internal.bind.v2.model.annotation.Locatable
    public getLocation<A extends java.lang.annotation.Annotation>(): com.sun.xml.internal.bind.v2.runtime.Location
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