declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace runtime {
                            abstract class JaxBeanInfo<BeanT> {
                                protected isNilIncluded: boolean
                                protected flag: short
                                public readonly jaxbType: java.lang.Class<BeanT>
                                protected constructor(arg0: com.sun.xml.internal.bind.v2.runtime.JAXBContextImpl, arg1: com.sun.xml.internal.bind.v2.model.runtime.RuntimeTypeInfo, arg2: java.lang.Class<BeanT>, arg3: javax.xml.namespace.QName[], arg4: boolean, arg5: boolean, arg6: boolean)
                                protected constructor(arg0: com.sun.xml.internal.bind.v2.runtime.JAXBContextImpl, arg1: com.sun.xml.internal.bind.v2.model.runtime.RuntimeTypeInfo, arg2: java.lang.Class<BeanT>, arg3: javax.xml.namespace.QName, arg4: boolean, arg5: boolean, arg6: boolean)
                                protected constructor(arg0: com.sun.xml.internal.bind.v2.runtime.JAXBContextImpl, arg1: com.sun.xml.internal.bind.v2.model.runtime.RuntimeTypeInfo, arg2: java.lang.Class<BeanT>, arg3: boolean, arg4: boolean, arg5: boolean)
                                public hasBeforeUnmarshalMethod(): boolean
                                public hasAfterUnmarshalMethod(): boolean
                                public hasBeforeMarshalMethod(): boolean
                                public hasAfterMarshalMethod(): boolean
                                public isElement(): boolean
                                public isImmutable(): boolean
                                public hasElementOnlyContentModel(): boolean
                                protected hasElementOnlyContentModel(arg0: boolean): void
                                public isNilIncluded(): boolean
                                public lookForLifecycleMethods(): boolean
                                public abstract getElementNamespaceURI(arg0: BeanT): string
                                public abstract getElementLocalName(arg0: BeanT): string
                                public getTypeNames(): java.util.Collection<javax.xml.namespace.QName>
                                public getTypeName(arg0: BeanT): javax.xml.namespace.QName
                                public abstract createInstance(arg0: com.sun.xml.internal.bind.v2.runtime.unmarshaller.UnmarshallingContext): BeanT
                                public abstract reset(arg0: BeanT, arg1: com.sun.xml.internal.bind.v2.runtime.unmarshaller.UnmarshallingContext): boolean
                                public abstract getId(arg0: BeanT, arg1: com.sun.xml.internal.bind.v2.runtime.XMLSerializer): string
                                public abstract serializeBody(arg0: BeanT, arg1: com.sun.xml.internal.bind.v2.runtime.XMLSerializer): void
                                public abstract serializeAttributes(arg0: BeanT, arg1: com.sun.xml.internal.bind.v2.runtime.XMLSerializer): void
                                public abstract serializeRoot(arg0: BeanT, arg1: com.sun.xml.internal.bind.v2.runtime.XMLSerializer): void
                                public abstract serializeURIs(arg0: BeanT, arg1: com.sun.xml.internal.bind.v2.runtime.XMLSerializer): void
                                public abstract getLoader(arg0: com.sun.xml.internal.bind.v2.runtime.JAXBContextImpl, arg1: boolean): com.sun.xml.internal.bind.v2.runtime.unmarshaller.Loader
                                public abstract getTransducer(): com.sun.xml.internal.bind.v2.runtime.Transducer<BeanT>
                                protected link(arg0: com.sun.xml.internal.bind.v2.runtime.JAXBContextImpl): void
                                public wrapUp(): void
                                protected setLifecycleFlags(): void
                                public getLifecycleMethods(): com.sun.xml.internal.bind.v2.runtime.LifecycleMethods
                                public invokeBeforeUnmarshalMethod(arg0: com.sun.xml.internal.bind.v2.runtime.unmarshaller.UnmarshallerImpl, arg1: java.lang.Object, arg2: java.lang.Object): void
                                public invokeAfterUnmarshalMethod(arg0: com.sun.xml.internal.bind.v2.runtime.unmarshaller.UnmarshallerImpl, arg1: java.lang.Object, arg2: java.lang.Object): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}