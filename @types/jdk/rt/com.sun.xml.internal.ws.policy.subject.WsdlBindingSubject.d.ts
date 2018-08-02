declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace policy {
                        namespace subject {
                            class WsdlBindingSubject {
                                public static createBindingSubject(arg0: javax.xml.namespace.QName): com.sun.xml.internal.ws.policy.subject.WsdlBindingSubject
                                public static createBindingOperationSubject(arg0: javax.xml.namespace.QName, arg1: javax.xml.namespace.QName): com.sun.xml.internal.ws.policy.subject.WsdlBindingSubject
                                public static createBindingMessageSubject(arg0: javax.xml.namespace.QName, arg1: javax.xml.namespace.QName, arg2: javax.xml.namespace.QName, arg3: com.sun.xml.internal.ws.policy.subject.WsdlBindingSubject$WsdlMessageType): com.sun.xml.internal.ws.policy.subject.WsdlBindingSubject
                                public getName(): javax.xml.namespace.QName
                                public getMessageType(): com.sun.xml.internal.ws.policy.subject.WsdlBindingSubject$WsdlMessageType
                                public getParent(): com.sun.xml.internal.ws.policy.subject.WsdlBindingSubject
                                public isBindingSubject(): boolean
                                public isBindingOperationSubject(): boolean
                                public isBindingMessageSubject(): boolean
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