declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace runtime {
                            interface Transducer<ValueT> {
                                isDefault(): boolean
                                useNamespace(): boolean
                                declareNamespace(arg0: ValueT, arg1: com.sun.xml.internal.bind.v2.runtime.XMLSerializer): void
                                print(arg0: ValueT): java.lang.CharSequence
                                parse(arg0: java.lang.CharSequence): ValueT
                                writeText(arg0: com.sun.xml.internal.bind.v2.runtime.XMLSerializer, arg1: ValueT, arg2: java.lang.String | string): void
                                writeLeafElement(arg0: com.sun.xml.internal.bind.v2.runtime.XMLSerializer, arg1: com.sun.xml.internal.bind.v2.runtime.Name, arg2: ValueT, arg3: java.lang.String | string): void
                                getTypeName(arg0: ValueT): javax.xml.namespace.QName
                            }
                        }
                    }
                }
            }
        }
    }
}