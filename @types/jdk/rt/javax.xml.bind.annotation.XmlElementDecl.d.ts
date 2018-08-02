declare namespace javax {
    namespace xml {
        namespace bind {
            namespace annotation {
                interface XmlElementDecl extends java.lang.annotation.Annotation {
                    scope(): java.lang.Class
                    namespace(): string
                    name(): string
                    substitutionHeadNamespace(): string
                    substitutionHeadName(): string
                    defaultValue(): string
                }
            }
        }
    }
}