declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace runtime {
                            class XMLSerializer extends com.sun.xml.internal.bind.v2.runtime.Coordinator {
                                public readonly grammar: com.sun.xml.internal.bind.v2.runtime.JAXBContextImpl
                                public readonly nameList: com.sun.xml.internal.bind.v2.runtime.NameList
                                public readonly knownUri2prefixIndexMap: int[]
                                public attachmentMarshaller: javax.xml.bind.attachment.AttachmentMarshaller
                                public getCachedBase64DataInstance(): com.sun.xml.internal.bind.v2.runtime.unmarshaller.Base64Data
                                public reportError(arg0: javax.xml.bind.ValidationEvent): void
                                public reportError(arg0: java.lang.String | string, arg1: java.lang.Throwable): void
                                public startElement(arg0: com.sun.xml.internal.bind.v2.runtime.Name, arg1: java.lang.Object): void
                                public startElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.Object): void
                                public startElementForce(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.Object): void
                                public endNamespaceDecls(arg0: java.lang.Object): void
                                public endAttributes(): void
                                public endElement(): void
                                public leafElement(arg0: com.sun.xml.internal.bind.v2.runtime.Name, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                public leafElement(arg0: com.sun.xml.internal.bind.v2.runtime.Name, arg1: com.sun.xml.internal.bind.v2.runtime.output.Pcdata, arg2: java.lang.String | string): void
                                public leafElement(arg0: com.sun.xml.internal.bind.v2.runtime.Name, arg1: int, arg2: java.lang.String | string): void
                                public text(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                public text(arg0: com.sun.xml.internal.bind.v2.runtime.output.Pcdata, arg1: java.lang.String | string): void
                                public attribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                public attribute(arg0: com.sun.xml.internal.bind.v2.runtime.Name, arg1: java.lang.CharSequence): void
                                public getNamespaceContext(): com.sun.xml.internal.bind.v2.runtime.NamespaceContext2
                                public onID(arg0: java.lang.Object, arg1: java.lang.String | string): string
                                public onIDREF(arg0: java.lang.Object): string
                                public childAsRoot(arg0: java.lang.Object): void
                                public childAsSoleContent(arg0: java.lang.Object, arg1: java.lang.String | string): void
                                public childAsXsiType(arg0: java.lang.Object, arg1: java.lang.String | string, arg2: com.sun.xml.internal.bind.v2.runtime.JaxBeanInfo, arg3: boolean): void
                                public attWildcardAsURIs(arg0: java.util.Map<javax.xml.namespace.QName, java.lang.String>, arg1: java.lang.String | string): void
                                public attWildcardAsAttributes(arg0: java.util.Map<javax.xml.namespace.QName, java.lang.String>, arg1: java.lang.String | string): void
                                public writeXsiNilTrue(): void
                                public writeDom<E>(arg0: E, arg1: javax.xml.bind.annotation.DomHandler<E, any>, arg2: java.lang.Object, arg3: java.lang.String | string): void
                                public getIdentityTransformer<E>(): javax.xml.transform.Transformer
                                public setPrefixMapper<E>(arg0: com.sun.xml.internal.bind.marshaller.NamespacePrefixMapper | com.sun.xml.internal.bind.marshaller.NamespacePrefixMapper$$Lambda): void
                                public startDocument<E>(arg0: com.sun.xml.internal.bind.v2.runtime.output.XmlOutput, arg1: boolean, arg2: java.lang.String | string, arg3: java.lang.String | string): void
                                public endDocument<E>(): void
                                public close<E>(): void
                                public addInscopeBinding<E>(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                public getXMIMEContentType<E>(): string
                                public setExpectedMimeType<E>(arg0: javax.activation.MimeType): javax.activation.MimeType
                                public setInlineBinaryFlag<E>(arg0: boolean): boolean
                                public getInlineBinaryFlag<E>(): boolean
                                public setSchemaType<E>(arg0: javax.xml.namespace.QName): javax.xml.namespace.QName
                                public getSchemaType<E>(): javax.xml.namespace.QName
                                public setObjectIdentityCycleDetection<E>(arg0: boolean): void
                                public getObjectIdentityCycleDetection<E>(): boolean
                                public handleError<E>(arg0: java.lang.Exception): boolean
                                public handleError<E>(arg0: java.lang.Exception, arg1: java.lang.Object, arg2: java.lang.String | string): boolean
                                public handleEvent<E>(arg0: javax.xml.bind.ValidationEvent): boolean
                                public errorMissingId<E>(arg0: java.lang.Object): void
                                public getCurrentLocation<E>(arg0: java.lang.String | string): javax.xml.bind.ValidationEventLocator
                                protected getLocation<E>(): javax.xml.bind.ValidationEventLocator
                                public getCurrentProperty<E>(): com.sun.xml.internal.bind.v2.runtime.property.Property
                                public clearCurrentProperty<E>(): void
                                public static getInstance<E>(): com.sun.xml.internal.bind.v2.runtime.XMLSerializer
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}