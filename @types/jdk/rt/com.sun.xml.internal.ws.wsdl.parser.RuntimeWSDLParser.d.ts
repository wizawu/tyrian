declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace wsdl {
                        namespace parser {
                            class RuntimeWSDLParser {
                                public static parse(arg0: java.net.URL, arg1: javax.xml.transform.Source, arg2: org.xml.sax.EntityResolver | org.xml.sax.EntityResolver$$Lambda, arg3: boolean, arg4: com.sun.xml.internal.ws.api.server.Container, ...arg5: com.sun.xml.internal.ws.api.wsdl.parser.WSDLParserExtension[]): com.sun.xml.internal.ws.api.model.wsdl.WSDLModel
                                public static parse(arg0: java.net.URL, arg1: javax.xml.transform.Source, arg2: org.xml.sax.EntityResolver | org.xml.sax.EntityResolver$$Lambda, arg3: boolean, arg4: com.sun.xml.internal.ws.api.server.Container, arg5: java.lang.Class, ...arg6: com.sun.xml.internal.ws.api.wsdl.parser.WSDLParserExtension[]): com.sun.xml.internal.ws.api.model.wsdl.WSDLModel
                                public static parse(arg0: java.net.URL, arg1: javax.xml.transform.Source, arg2: org.xml.sax.EntityResolver | org.xml.sax.EntityResolver$$Lambda, arg3: boolean, arg4: com.sun.xml.internal.ws.api.server.Container, arg5: com.sun.xml.internal.ws.api.policy.PolicyResolver, ...arg6: com.sun.xml.internal.ws.api.wsdl.parser.WSDLParserExtension[]): com.sun.xml.internal.ws.api.model.wsdl.WSDLModel
                                public static parse(arg0: java.net.URL, arg1: javax.xml.transform.Source, arg2: org.xml.sax.EntityResolver | org.xml.sax.EntityResolver$$Lambda, arg3: boolean, arg4: com.sun.xml.internal.ws.api.server.Container, arg5: java.lang.Class, arg6: com.sun.xml.internal.ws.api.policy.PolicyResolver, ...arg7: com.sun.xml.internal.ws.api.wsdl.parser.WSDLParserExtension[]): com.sun.xml.internal.ws.api.model.wsdl.WSDLModel
                                public static parse(arg0: java.net.URL, arg1: javax.xml.transform.Source, arg2: org.xml.sax.EntityResolver | org.xml.sax.EntityResolver$$Lambda, arg3: boolean, arg4: com.sun.xml.internal.ws.api.server.Container, arg5: java.lang.Class, arg6: com.sun.xml.internal.ws.api.policy.PolicyResolver, arg7: boolean, ...arg8: com.sun.xml.internal.ws.api.wsdl.parser.WSDLParserExtension[]): com.sun.xml.internal.ws.api.model.wsdl.WSDLModel
                                public static parse(arg0: com.sun.xml.internal.ws.api.wsdl.parser.XMLEntityResolver$Parser, arg1: com.sun.xml.internal.ws.api.wsdl.parser.XMLEntityResolver | com.sun.xml.internal.ws.api.wsdl.parser.XMLEntityResolver$$Lambda, arg2: boolean, arg3: com.sun.xml.internal.ws.api.server.Container, arg4: com.sun.xml.internal.ws.api.policy.PolicyResolver, ...arg5: com.sun.xml.internal.ws.api.wsdl.parser.WSDLParserExtension[]): com.sun.xml.internal.ws.api.model.wsdl.WSDLModel
                                public static parse(arg0: com.sun.xml.internal.ws.api.wsdl.parser.XMLEntityResolver$Parser, arg1: com.sun.xml.internal.ws.api.wsdl.parser.XMLEntityResolver | com.sun.xml.internal.ws.api.wsdl.parser.XMLEntityResolver$$Lambda, arg2: boolean, arg3: com.sun.xml.internal.ws.api.server.Container, ...arg4: com.sun.xml.internal.ws.api.wsdl.parser.WSDLParserExtension[]): com.sun.xml.internal.ws.api.model.wsdl.WSDLModel
                                protected parseImport(arg0: java.net.URL, arg1: javax.xml.stream.XMLStreamReader): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}