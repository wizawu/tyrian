declare namespace javax {
    namespace xml {
        namespace validation {
            abstract class TypeInfoProvider {
                protected constructor()
                public getElementTypeInfo(): org.w3c.dom.TypeInfo
                public getAttributeTypeInfo(arg0: int): org.w3c.dom.TypeInfo
                public isIdAttribute(arg0: int): boolean
                public isSpecified(arg0: int): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}