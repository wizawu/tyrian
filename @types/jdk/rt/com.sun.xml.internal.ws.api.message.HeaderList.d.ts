declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace message {
                            class HeaderList extends java.util.ArrayList<com.sun.xml.internal.ws.api.message.Header> implements com.sun.xml.internal.ws.api.message.MessageHeaders {
                                public constructor()
                                public constructor(arg0: com.sun.xml.internal.ws.api.SOAPVersion)
                                public constructor(arg0: com.sun.xml.internal.ws.api.message.HeaderList)
                                public constructor(arg0: com.sun.xml.internal.ws.api.message.MessageHeaders)
                                public size(): int
                                public hasHeaders(): boolean
                                public addAll(...arg0: com.sun.xml.internal.ws.api.message.Header[]): void
                                public get(arg0: int): com.sun.xml.internal.ws.api.message.Header
                                public understood(arg0: int): void
                                public isUnderstood(arg0: int): boolean
                                public understood(arg0: com.sun.xml.internal.ws.api.message.Header): void
                                public get(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: boolean): com.sun.xml.internal.ws.api.message.Header
                                public get(arg0: java.lang.String | string, arg1: java.lang.String | string): com.sun.xml.internal.ws.api.message.Header
                                public get(arg0: javax.xml.namespace.QName, arg1: boolean): com.sun.xml.internal.ws.api.message.Header
                                public get(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.message.Header
                                public getHeaders(arg0: java.lang.String | string, arg1: java.lang.String | string): java.util.Iterator<com.sun.xml.internal.ws.api.message.Header>
                                public getHeaders(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: boolean): java.util.Iterator<com.sun.xml.internal.ws.api.message.Header>
                                public getHeaders(arg0: javax.xml.namespace.QName, arg1: boolean): java.util.Iterator<com.sun.xml.internal.ws.api.message.Header>
                                public getHeaders(arg0: java.lang.String | string): java.util.Iterator<com.sun.xml.internal.ws.api.message.Header>
                                public getHeaders(arg0: java.lang.String | string, arg1: boolean): java.util.Iterator<com.sun.xml.internal.ws.api.message.Header>
                                public getTo(arg0: com.sun.xml.internal.ws.api.addressing.AddressingVersion, arg1: com.sun.xml.internal.ws.api.SOAPVersion): string
                                public getAction(arg0: com.sun.xml.internal.ws.api.addressing.AddressingVersion, arg1: com.sun.xml.internal.ws.api.SOAPVersion): string
                                public getReplyTo(arg0: com.sun.xml.internal.ws.api.addressing.AddressingVersion, arg1: com.sun.xml.internal.ws.api.SOAPVersion): com.sun.xml.internal.ws.api.addressing.WSEndpointReference
                                public getFaultTo(arg0: com.sun.xml.internal.ws.api.addressing.AddressingVersion, arg1: com.sun.xml.internal.ws.api.SOAPVersion): com.sun.xml.internal.ws.api.addressing.WSEndpointReference
                                public getMessageID(arg0: com.sun.xml.internal.ws.api.addressing.AddressingVersion, arg1: com.sun.xml.internal.ws.api.SOAPVersion): string
                                public getRelatesTo(arg0: com.sun.xml.internal.ws.api.addressing.AddressingVersion, arg1: com.sun.xml.internal.ws.api.SOAPVersion): string
                                public fillRequestAddressingHeaders(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda, arg1: com.sun.xml.internal.ws.api.addressing.AddressingVersion, arg2: com.sun.xml.internal.ws.api.SOAPVersion, arg3: boolean, arg4: java.lang.String | string, arg5: boolean): void
                                public fillRequestAddressingHeaders(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda, arg1: com.sun.xml.internal.ws.api.addressing.AddressingVersion, arg2: com.sun.xml.internal.ws.api.SOAPVersion, arg3: boolean, arg4: java.lang.String | string): void
                                public fillRequestAddressingHeaders(arg0: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort, arg1: com.sun.xml.internal.ws.api.WSBinding, arg2: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): void
                                public add(arg0: com.sun.xml.internal.ws.api.message.Header): boolean
                                public remove(arg0: java.lang.String | string, arg1: java.lang.String | string): com.sun.xml.internal.ws.api.message.Header
                                public addOrReplace(arg0: com.sun.xml.internal.ws.api.message.Header): boolean
                                public replace(arg0: com.sun.xml.internal.ws.api.message.Header, arg1: com.sun.xml.internal.ws.api.message.Header): void
                                protected addInternal(arg0: int, arg1: com.sun.xml.internal.ws.api.message.Header): void
                                protected removeInternal(arg0: int): com.sun.xml.internal.ws.api.message.Header
                                public remove(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.message.Header
                                public remove(arg0: int): com.sun.xml.internal.ws.api.message.Header
                                public remove(arg0: java.lang.Object): boolean
                                public remove(arg0: com.sun.xml.internal.ws.api.message.Header): com.sun.xml.internal.ws.api.message.Header
                                public static copy(arg0: com.sun.xml.internal.ws.api.message.MessageHeaders): com.sun.xml.internal.ws.api.message.HeaderList
                                public static copy(arg0: com.sun.xml.internal.ws.api.message.HeaderList): com.sun.xml.internal.ws.api.message.HeaderList
                                public readResponseAddressingHeaders(arg0: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort, arg1: com.sun.xml.internal.ws.api.WSBinding): void
                                public understood(arg0: javax.xml.namespace.QName): void
                                public understood(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                public getUnderstoodHeaders(): java.util.Set<javax.xml.namespace.QName>
                                public isUnderstood(arg0: com.sun.xml.internal.ws.api.message.Header): boolean
                                public isUnderstood(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
                                public isUnderstood(arg0: javax.xml.namespace.QName): boolean
                                public getNotUnderstoodHeaders(arg0: java.util.Set<java.lang.String>, arg1: java.util.Set<javax.xml.namespace.QName>, arg2: com.sun.xml.internal.ws.api.WSBinding): java.util.Set<javax.xml.namespace.QName>
                                public setSoapVersion(arg0: com.sun.xml.internal.ws.api.SOAPVersion): void
                                public getHeaders(): java.util.Iterator<com.sun.xml.internal.ws.api.message.Header>
                                public asList(): java.util.List<com.sun.xml.internal.ws.api.message.Header>
                                public remove(arg0: int): java.lang.Object
                                public add(arg0: java.lang.Object): boolean
                                public get(arg0: int): java.lang.Object
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}