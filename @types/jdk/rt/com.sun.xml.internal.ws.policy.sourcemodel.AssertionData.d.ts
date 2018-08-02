declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace policy {
                        namespace sourcemodel {
                            class AssertionData implements java.lang.Cloneable , java.io.Serializable {
                                public static createAssertionData(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.policy.sourcemodel.AssertionData
                                public static createAssertionParameterData(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.policy.sourcemodel.AssertionData
                                public static createAssertionData(arg0: javax.xml.namespace.QName, arg1: java.lang.String | string, arg2: java.util.Map<javax.xml.namespace.QName, java.lang.String>, arg3: boolean, arg4: boolean): com.sun.xml.internal.ws.policy.sourcemodel.AssertionData
                                public static createAssertionParameterData(arg0: javax.xml.namespace.QName, arg1: java.lang.String | string, arg2: java.util.Map<javax.xml.namespace.QName, java.lang.String>): com.sun.xml.internal.ws.policy.sourcemodel.AssertionData
                                protected clone(): com.sun.xml.internal.ws.policy.sourcemodel.AssertionData
                                public containsAttribute(arg0: javax.xml.namespace.QName): boolean
                                public equals(arg0: java.lang.Object): boolean
                                public getAttributeValue(arg0: javax.xml.namespace.QName): string
                                public getAttributes(): java.util.Map<javax.xml.namespace.QName, java.lang.String>
                                public getAttributesSet(): java.util.Set<java.util.Map$Entry<javax.xml.namespace.QName, java.lang.String>>
                                public getName(): javax.xml.namespace.QName
                                public getValue(): string
                                public hashCode(): int
                                public isPrivateAttributeSet(): boolean
                                public removeAttribute(arg0: javax.xml.namespace.QName): string
                                public setAttribute(arg0: javax.xml.namespace.QName, arg1: java.lang.String | string): void
                                public setOptionalAttribute(arg0: boolean): void
                                public isOptionalAttributeSet(): boolean
                                public setIgnorableAttribute(arg0: boolean): void
                                public isIgnorableAttributeSet(): boolean
                                public toString(): string
                                public toString(arg0: int, arg1: java.lang.StringBuffer): java.lang.StringBuffer
                                public getNodeType(): com.sun.xml.internal.ws.policy.sourcemodel.ModelNode$Type
                                protected clone(): java.lang.Object
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}