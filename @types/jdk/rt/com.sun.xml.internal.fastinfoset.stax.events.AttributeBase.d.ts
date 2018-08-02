declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace fastinfoset {
                    namespace stax {
                        namespace events {
class AttributeBase extends com.sun.xml.internal.fastinfoset.stax.events.EventBase implements javax.xml.stream.events.Attribute {
    public constructor()
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
    public constructor(arg0: javax.xml.namespace.QName, arg1: java.lang.String | string)
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string)
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string)
    public setName(arg0: javax.xml.namespace.QName): void
    public getName(): javax.xml.namespace.QName
    public setValue(arg0: java.lang.String | string): void
    public getLocalName(): string
    public getValue(): string
    public setAttributeType(arg0: java.lang.String | string): void
    public getDTDType(): string
    public isSpecified(): boolean
    public setSpecified(arg0: boolean): void
    public toString(): string
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}