declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace developer {
                        class MemberSubmissionEndpointReference extends javax.xml.ws.EndpointReference implements com.sun.xml.internal.ws.addressing.v200408.MemberSubmissionAddressingConstants {
                            public addr: com.sun.xml.internal.ws.developer.MemberSubmissionEndpointReference$Address
                            public referenceProperties: com.sun.xml.internal.ws.developer.MemberSubmissionEndpointReference$Elements
                            public referenceParameters: com.sun.xml.internal.ws.developer.MemberSubmissionEndpointReference$Elements
                            public portTypeName: com.sun.xml.internal.ws.developer.MemberSubmissionEndpointReference$AttributedQName
                            public serviceName: com.sun.xml.internal.ws.developer.MemberSubmissionEndpointReference$ServiceNameType
                            public attributes: java.util.Map<javax.xml.namespace.QName, java.lang.String>
                            public elements: java.util.List<org.w3c.dom.Element>
                            protected static readonly MSNS: string
                            public constructor()
                            public constructor(arg0: javax.xml.transform.Source)
                            public writeTo(arg0: javax.xml.transform.Result): void
                            public toWSDLSource(): javax.xml.transform.Source
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}