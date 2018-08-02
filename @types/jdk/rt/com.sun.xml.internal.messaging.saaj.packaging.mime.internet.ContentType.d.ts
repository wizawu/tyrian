declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace messaging {
                    namespace saaj {
                        namespace packaging {
                            namespace mime {
                                namespace internet {
class ContentType {
    public constructor()
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: com.sun.xml.internal.messaging.saaj.packaging.mime.internet.ParameterList)
    public constructor(arg0: java.lang.String | string)
    public copy(): com.sun.xml.internal.messaging.saaj.packaging.mime.internet.ContentType
    public getPrimaryType(): string
    public getSubType(): string
    public getBaseType(): string
    public getParameter(arg0: java.lang.String | string): string
    public getParameterList(): com.sun.xml.internal.messaging.saaj.packaging.mime.internet.ParameterList
    public setPrimaryType(arg0: java.lang.String | string): void
    public setSubType(arg0: java.lang.String | string): void
    public setParameter(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public setParameterList(arg0: com.sun.xml.internal.messaging.saaj.packaging.mime.internet.ParameterList): void
    public toString(): string
    public match(arg0: com.sun.xml.internal.messaging.saaj.packaging.mime.internet.ContentType): boolean
    public match(arg0: java.lang.String | string): boolean
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
}