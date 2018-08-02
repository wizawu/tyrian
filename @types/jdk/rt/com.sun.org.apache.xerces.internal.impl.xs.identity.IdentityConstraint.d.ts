declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace xs {
                                namespace identity {
                                    abstract class IdentityConstraint implements com.sun.org.apache.xerces.internal.xs.XSIDCDefinition {
                                        protected type: short
                                        protected fNamespace: string
                                        protected fIdentityConstraintName: string
                                        protected fElementName: string
                                        protected fSelector: com.sun.org.apache.xerces.internal.impl.xs.identity.Selector
                                        protected fFieldCount: int
                                        protected fFields: com.sun.org.apache.xerces.internal.impl.xs.identity.Field[]
                                        protected fAnnotations: com.sun.org.apache.xerces.internal.impl.xs.XSAnnotationImpl[]
                                        protected fNumAnnotations: int
                                        protected constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string)
                                        public getIdentityConstraintName(): string
                                        public setSelector(arg0: com.sun.org.apache.xerces.internal.impl.xs.identity.Selector): void
                                        public getSelector(): com.sun.org.apache.xerces.internal.impl.xs.identity.Selector
                                        public addField(arg0: com.sun.org.apache.xerces.internal.impl.xs.identity.Field): void
                                        public getFieldCount(): int
                                        public getFieldAt(arg0: int): com.sun.org.apache.xerces.internal.impl.xs.identity.Field
                                        public getElementName(): string
                                        public toString(): string
                                        public equals(arg0: com.sun.org.apache.xerces.internal.impl.xs.identity.IdentityConstraint): boolean
                                        public getType(): short
                                        public getName(): string
                                        public getNamespace(): string
                                        public getCategory(): short
                                        public getSelectorStr(): string
                                        public getFieldStrs(): com.sun.org.apache.xerces.internal.xs.StringList
                                        public getRefKey(): com.sun.org.apache.xerces.internal.xs.XSIDCDefinition
                                        public getAnnotations(): com.sun.org.apache.xerces.internal.xs.XSObjectList
                                        public getNamespaceItem(): com.sun.org.apache.xerces.internal.xs.XSNamespaceItem
                                        public addAnnotation(arg0: com.sun.org.apache.xerces.internal.impl.xs.XSAnnotationImpl): void
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
}