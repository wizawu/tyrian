declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        class SOAPVersion extends java.lang.Enum<com.sun.xml.internal.ws.api.SOAPVersion> {
                            public static readonly SOAP_11: com.sun.xml.internal.ws.api.SOAPVersion
                            public static readonly SOAP_12: com.sun.xml.internal.ws.api.SOAPVersion
                            public readonly httpBindingId: string
                            public readonly nsUri: string
                            public readonly contentType: string
                            public readonly faultCodeMustUnderstand: javax.xml.namespace.QName
                            public readonly saajMessageFactory: javax.xml.soap.MessageFactory
                            public readonly saajSoapFactory: javax.xml.soap.SOAPFactory
                            public readonly implicitRole: string
                            public readonly implicitRoleSet: java.util.Set<java.lang.String>
                            public readonly requiredRoles: java.util.Set<java.lang.String>
                            public readonly roleAttributeName: string
                            public readonly faultCodeClient: javax.xml.namespace.QName
                            public readonly faultCodeServer: javax.xml.namespace.QName
                            public static values(): com.sun.xml.internal.ws.api.SOAPVersion[]
                            public static valueOf(arg0: java.lang.String | string): com.sun.xml.internal.ws.api.SOAPVersion
                            public getSOAPFactory(): javax.xml.soap.SOAPFactory
                            public getMessageFactory(): javax.xml.soap.MessageFactory
                            public toString(): string
                            public static fromHttpBinding(arg0: java.lang.String | string): com.sun.xml.internal.ws.api.SOAPVersion
                            public static fromNsUri(arg0: java.lang.String | string): com.sun.xml.internal.ws.api.SOAPVersion
                            public static from(arg0: com.oracle.webservices.internal.api.EnvelopeStyleFeature): com.sun.xml.internal.ws.api.SOAPVersion
                            public static from(arg0: com.oracle.webservices.internal.api.EnvelopeStyle$Style): com.sun.xml.internal.ws.api.SOAPVersion
                            public toFeature(): com.oracle.webservices.internal.api.EnvelopeStyleFeature
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}