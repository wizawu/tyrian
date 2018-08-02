declare namespace javax {
    namespace xml {
        namespace bind {
            namespace annotation {
                interface XmlElement extends java.lang.annotation.Annotation {
                    name(): string
                    nillable(): boolean
                    required(): boolean
                    namespace(): string
                    defaultValue(): string
                    type(): java.lang.Class
                }
            }
        }
    }
}