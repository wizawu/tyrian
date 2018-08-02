declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace policy {
                            namespace subject {
                                class BindingSubject {
                                    public static createBindingSubject(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.policy.subject.BindingSubject
                                    public static createOperationSubject(arg0: javax.xml.namespace.QName, arg1: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.policy.subject.BindingSubject
                                    public static createInputMessageSubject(arg0: javax.xml.namespace.QName, arg1: javax.xml.namespace.QName, arg2: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.policy.subject.BindingSubject
                                    public static createOutputMessageSubject(arg0: javax.xml.namespace.QName, arg1: javax.xml.namespace.QName, arg2: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.policy.subject.BindingSubject
                                    public static createFaultMessageSubject(arg0: javax.xml.namespace.QName, arg1: javax.xml.namespace.QName, arg2: javax.xml.namespace.QName): com.sun.xml.internal.ws.api.policy.subject.BindingSubject
                                    public getName(): javax.xml.namespace.QName
                                    public getParent(): com.sun.xml.internal.ws.api.policy.subject.BindingSubject
                                    public isBindingSubject(): boolean
                                    public isOperationSubject(): boolean
                                    public isMessageSubject(): boolean
                                    public isInputMessageSubject(): boolean
                                    public isOutputMessageSubject(): boolean
                                    public isFaultMessageSubject(): boolean
                                    public equals(arg0: java.lang.Object): boolean
                                    public hashCode(): int
                                    public toString(): string
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