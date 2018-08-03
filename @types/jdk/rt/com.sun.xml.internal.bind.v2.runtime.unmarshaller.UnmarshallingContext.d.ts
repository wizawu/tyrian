declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace runtime {
                            namespace unmarshaller {
                                class UnmarshallingContext extends com.sun.xml.internal.bind.v2.runtime.Coordinator implements javax.xml.namespace.NamespaceContext , javax.xml.bind.ValidationEventHandler , org.xml.sax.ErrorHandler , com.sun.xml.internal.bind.v2.runtime.unmarshaller.XmlVisitor , com.sun.xml.internal.bind.v2.runtime.unmarshaller.XmlVisitor$TextPredictor {
                                    public readonly parent: com.sun.xml.internal.bind.v2.runtime.unmarshaller.UnmarshallerImpl
                                    public classResolver: com.sun.xml.internal.bind.api.ClassResolver
                                    public classLoader: java.lang.ClassLoader
                                    public constructor(arg0: com.sun.xml.internal.bind.v2.runtime.unmarshaller.UnmarshallerImpl, arg1: com.sun.xml.internal.bind.v2.runtime.AssociationMap)
                                    public reset(arg0: com.sun.xml.internal.bind.unmarshaller.InfosetScanner, arg1: boolean, arg2: com.sun.xml.internal.bind.v2.runtime.JaxBeanInfo, arg3: com.sun.xml.internal.bind.IDResolver): void
                                    public getJAXBContext(): com.sun.xml.internal.bind.v2.runtime.JAXBContextImpl
                                    public getCurrentState(): com.sun.xml.internal.bind.v2.runtime.unmarshaller.UnmarshallingContext$State
                                    public selectRootLoader(arg0: com.sun.xml.internal.bind.v2.runtime.unmarshaller.UnmarshallingContext$State, arg1: com.sun.xml.internal.bind.v2.runtime.unmarshaller.TagName | com.sun.xml.internal.bind.v2.runtime.unmarshaller.TagName$$Lambda): com.sun.xml.internal.bind.v2.runtime.unmarshaller.Loader
                                    public clearStates(): void
                                    public setFactories(arg0: java.lang.Object): void
                                    public startDocument(arg0: com.sun.xml.internal.bind.v2.runtime.unmarshaller.LocatorEx, arg1: javax.xml.namespace.NamespaceContext): void
                                    public startElement(arg0: com.sun.xml.internal.bind.v2.runtime.unmarshaller.TagName | com.sun.xml.internal.bind.v2.runtime.unmarshaller.TagName$$Lambda): void
                                    public text(arg0: java.lang.CharSequence): void
                                    public endElement(arg0: com.sun.xml.internal.bind.v2.runtime.unmarshaller.TagName | com.sun.xml.internal.bind.v2.runtime.unmarshaller.TagName$$Lambda): void
                                    public endDocument(): void
                                    public expectText(): boolean
                                    public getPredictor(): com.sun.xml.internal.bind.v2.runtime.unmarshaller.XmlVisitor$TextPredictor
                                    public getContext(): com.sun.xml.internal.bind.v2.runtime.unmarshaller.UnmarshallingContext
                                    public getResult(): java.lang.Object
                                    public createInstance(arg0: java.lang.Class<any>): java.lang.Object
                                    public createInstance(arg0: com.sun.xml.internal.bind.v2.runtime.JaxBeanInfo): java.lang.Object
                                    public handleEvent(arg0: javax.xml.bind.ValidationEvent, arg1: boolean): void
                                    public handleEvent(arg0: javax.xml.bind.ValidationEvent): boolean
                                    public handleError(arg0: java.lang.Exception): void
                                    public handleError(arg0: java.lang.Exception, arg1: boolean): void
                                    public handleError(arg0: java.lang.String | string): void
                                    protected getLocation(): javax.xml.bind.ValidationEventLocator
                                    public getLocator(): com.sun.xml.internal.bind.v2.runtime.unmarshaller.LocatorEx
                                    public errorUnresolvedIDREF(arg0: java.lang.Object, arg1: java.lang.String | string, arg2: com.sun.xml.internal.bind.v2.runtime.unmarshaller.LocatorEx): void
                                    public addPatcher(arg0: com.sun.xml.internal.bind.v2.runtime.unmarshaller.Patcher | com.sun.xml.internal.bind.v2.runtime.unmarshaller.Patcher$$Lambda): void
                                    public addToIdTable(arg0: java.lang.String | string): string
                                    public getObjectFromId(arg0: java.lang.String | string, arg1: java.lang.Class): java.util.concurrent.Callable
                                    public startPrefixMapping(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                    public endPrefixMapping(arg0: java.lang.String | string): void
                                    public getNewlyDeclaredPrefixes(): java.lang.String[]
                                    public getAllDeclaredPrefixes(): java.lang.String[]
                                    public getPrefixes(arg0: java.lang.String | string): java.util.Iterator<java.lang.String>
                                    public getPrefix(arg0: java.lang.String | string): string
                                    public getNamespaceURI(arg0: java.lang.String | string): string
                                    public startScope(arg0: int): void
                                    public endScope(arg0: int): void
                                    public getScope(arg0: int): com.sun.xml.internal.bind.v2.runtime.unmarshaller.Scope
                                    public recordInnerPeer(arg0: java.lang.Object): void
                                    public getInnerPeer(): java.lang.Object
                                    public recordOuterPeer(arg0: java.lang.Object): void
                                    public getOuterPeer(): java.lang.Object
                                    public getXMIMEContentType(): string
                                    public static getInstance(): com.sun.xml.internal.bind.v2.runtime.unmarshaller.UnmarshallingContext
                                    public getCurrentExpectedElements(): java.util.Collection<javax.xml.namespace.QName>
                                    public getCurrentExpectedAttributes(): java.util.Collection<javax.xml.namespace.QName>
                                    public getStructureLoader(): com.sun.xml.internal.bind.v2.runtime.unmarshaller.StructureLoader
                                    public shouldErrorBeReported(): boolean
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