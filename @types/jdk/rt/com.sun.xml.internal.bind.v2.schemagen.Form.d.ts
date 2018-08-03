declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace schemagen {
                            abstract class Form extends java.lang.Enum<com.sun.xml.internal.bind.v2.schemagen.Form> {
                                public static readonly QUALIFIED: com.sun.xml.internal.bind.v2.schemagen.Form
                                public static readonly UNQUALIFIED: com.sun.xml.internal.bind.v2.schemagen.Form
                                public static readonly UNSET: com.sun.xml.internal.bind.v2.schemagen.Form
                                public readonly isEffectivelyQualified: boolean
                                public static values(): com.sun.xml.internal.bind.v2.schemagen.Form[]
                                public static valueOf(arg0: java.lang.String | string): com.sun.xml.internal.bind.v2.schemagen.Form
                                public writeForm(arg0: com.sun.xml.internal.bind.v2.schemagen.xmlschema.LocalElement, arg1: javax.xml.namespace.QName): void
                                public writeForm(arg0: com.sun.xml.internal.bind.v2.schemagen.xmlschema.LocalAttribute, arg1: javax.xml.namespace.QName): void
                                public static get(arg0: javax.xml.bind.annotation.XmlNsForm): com.sun.xml.internal.bind.v2.schemagen.Form
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}