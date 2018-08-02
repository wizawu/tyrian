declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace addressing {
class WSEndpointReference implements com.sun.xml.internal.ws.api.model.wsdl.WSDLExtension {
    public constructor(arg0: javax.xml.ws.EndpointReference, arg1: com.sun.xml.internal.ws.api.addressing.AddressingVersion)
    public constructor(arg0: javax.xml.ws.EndpointReference)
    public constructor(arg0: com.sun.xml.internal.stream.buffer.XMLStreamBuffer, arg1: com.sun.xml.internal.ws.api.addressing.AddressingVersion)
    public constructor(arg0: java.io.InputStream, arg1: com.sun.xml.internal.ws.api.addressing.AddressingVersion)
    public constructor(arg0: javax.xml.stream.XMLStreamReader, arg1: com.sun.xml.internal.ws.api.addressing.AddressingVersion)
    public constructor(arg0: java.net.URL, arg1: com.sun.xml.internal.ws.api.addressing.AddressingVersion)
    public constructor(arg0: java.net.URI, arg1: com.sun.xml.internal.ws.api.addressing.AddressingVersion)
    public constructor(arg0: java.lang.String | string, arg1: com.sun.xml.internal.ws.api.addressing.AddressingVersion)
    public constructor(arg0: com.sun.xml.internal.ws.api.addressing.AddressingVersion, arg1: java.lang.String | string, arg2: javax.xml.namespace.QName, arg3: javax.xml.namespace.QName, arg4: javax.xml.namespace.QName, arg5: java.util.List<org.w3c.dom.Element>, arg6: java.lang.String | string, arg7: java.util.List<org.w3c.dom.Element>)
    public constructor(arg0: com.sun.xml.internal.ws.api.addressing.AddressingVersion, arg1: java.lang.String | string, arg2: javax.xml.namespace.QName, arg3: javax.xml.namespace.QName, arg4: javax.xml.namespace.QName, arg5: java.util.List<org.w3c.dom.Element>, arg6: java.lang.String | string, arg7: java.util.List<org.w3c.dom.Element>, arg8: java.util.Collection<com.sun.xml.internal.ws.api.addressing.WSEndpointReference$EPRExtension>, arg9: java.util.Map<javax.xml.namespace.QName, java.lang.String>)
    public constructor(arg0: com.sun.xml.internal.ws.api.addressing.AddressingVersion, arg1: java.lang.String | string, arg2: javax.xml.namespace.QName, arg3: javax.xml.namespace.QName, arg4: javax.xml.namespace.QName, arg5: java.util.List<org.w3c.dom.Element>, arg6: java.lang.String | string, arg7: java.lang.String | string, arg8: java.util.List<org.w3c.dom.Element>, arg9: java.util.List<org.w3c.dom.Element>, arg10: java.util.Map<javax.xml.namespace.QName, java.lang.String>)
    public static create(arg0: javax.xml.ws.EndpointReference): com.sun.xml.internal.ws.api.addressing.WSEndpointReference
    public createWithAddress(arg0: java.net.URI): com.sun.xml.internal.ws.api.addressing.WSEndpointReference
    public createWithAddress(arg0: java.net.URL): com.sun.xml.internal.ws.api.addressing.WSEndpointReference
    public createWithAddress(arg0: java.lang.String | string): com.sun.xml.internal.ws.api.addressing.WSEndpointReference
    public toSpec(): javax.xml.ws.EndpointReference
    public toSpec<T extends javax.xml.ws.EndpointReference>(arg0: java.lang.Class<T>): T
    public getPort<T>(arg0: javax.xml.ws.Service, arg1: java.lang.Class<T>, ...arg2: javax.xml.ws.WebServiceFeature[]): T
    public createDispatch<T>(arg0: javax.xml.ws.Service, arg1: java.lang.Class<T>, arg2: javax.xml.ws.Service$Mode, ...arg3: javax.xml.ws.WebServiceFeature[]): javax.xml.ws.Dispatch<T>
    public createDispatch<T>(arg0: javax.xml.ws.Service, arg1: javax.xml.bind.JAXBContext, arg2: javax.xml.ws.Service$Mode, ...arg3: javax.xml.ws.WebServiceFeature[]): javax.xml.ws.Dispatch<java.lang.Object>
    public getVersion<T>(): com.sun.xml.internal.ws.api.addressing.AddressingVersion
    public getAddress<T>(): string
    public isAnonymous<T>(): boolean
    public isNone<T>(): boolean
    public read<T>(arg0: java.lang.String | string): javax.xml.stream.XMLStreamReader
    public asSource<T>(arg0: java.lang.String | string): javax.xml.transform.Source
    public writeTo<T>(arg0: java.lang.String | string, arg1: org.xml.sax.ContentHandler, arg2: org.xml.sax.ErrorHandler, arg3: boolean): void
    public writeTo<T>(arg0: java.lang.String | string, arg1: javax.xml.stream.XMLStreamWriter): void
    public createHeader<T>(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.message.Header
    public addReferenceParametersToList<T>(arg0: com.sun.xml.internal.ws.api.message.HeaderList): void
    public addReferenceParametersToList<T>(arg0: com.sun.xml.internal.ws.api.message.MessageHeaders): void
    public addReferenceParameters<T>(arg0: com.sun.xml.internal.ws.api.message.HeaderList): void
    public toString<T>(): string
    public getName<T>(): javax.xml.namespace.QName
    public getEPRExtension<T>(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.addressing.WSEndpointReference$EPRExtension
    public getEPRExtensions<T>(): java.util.Collection<com.sun.xml.internal.ws.api.addressing.WSEndpointReference$EPRExtension>
    public getMetaData<T>(): com.sun.xml.internal.ws.api.addressing.WSEndpointReference$Metadata
    public static class: java.lang.Class<any>
}

class WSEndpointReference$$Lambda implements com.sun.xml.internal.ws.api.model.wsdl.WSDLExtension {
    public constructor(arg0: javax.xml.ws.EndpointReference, arg1: com.sun.xml.internal.ws.api.addressing.AddressingVersion)
}

                        }
                    }
                }
            }
        }
    }
}