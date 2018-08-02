declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
class SOAPVersion extends java.lang.Enum<com.sun.xml.internal.ws.api.SOAPVersion> {
    public static SOAP_11: com.sun.xml.internal.ws.api.SOAPVersion
    public static SOAP_12: com.sun.xml.internal.ws.api.SOAPVersion
    public httpBindingId: string
    public nsUri: string
    public contentType: string
    public faultCodeMustUnderstand: javax.xml.namespace.QName
    public saajMessageFactory: javax.xml.soap.MessageFactory
    public saajSoapFactory: javax.xml.soap.SOAPFactory
    public implicitRole: string
    public implicitRoleSet: java.util.Set<java.lang.String>
    public requiredRoles: java.util.Set<java.lang.String>
    public roleAttributeName: string
    public faultCodeClient: javax.xml.namespace.QName
    public faultCodeServer: javax.xml.namespace.QName
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