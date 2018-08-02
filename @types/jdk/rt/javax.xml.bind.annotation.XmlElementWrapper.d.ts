declare namespace javax {
    namespace xml {
        namespace bind {
            namespace annotation {
                interface XmlElementWrapper extends java.lang.annotation.Annotation {
                    name(): string
                    namespace(): string
                    nillable(): boolean
                    required(): boolean
                }
            }
        }
    }
}