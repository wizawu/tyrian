declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace xs {
class XMLSchemaValidator$ValueStoreCache {
    protected fValueStores: java.util.Vector
    protected fIdentityConstraint2ValueStoreMap: java.util.Map<com.sun.org.apache.xerces.internal.impl.xs.XMLSchemaValidator$LocalIDKey, com.sun.org.apache.xerces.internal.impl.xs.XMLSchemaValidator$ValueStoreBase>
    protected fGlobalMapStack: java.util.Stack<java.util.Map<com.sun.org.apache.xerces.internal.impl.xs.identity.IdentityConstraint, com.sun.org.apache.xerces.internal.impl.xs.XMLSchemaValidator$ValueStoreBase>>
    protected fGlobalIDConstraintMap: java.util.Map<com.sun.org.apache.xerces.internal.impl.xs.identity.IdentityConstraint, com.sun.org.apache.xerces.internal.impl.xs.XMLSchemaValidator$ValueStoreBase>
    public constructor(arg0: com.sun.org.apache.xerces.internal.impl.xs.XMLSchemaValidator)
    public startDocument(): void
    public startElement(): void
    public endElement(): void
    public initValueStoresFor(arg0: com.sun.org.apache.xerces.internal.impl.xs.XSElementDecl, arg1: com.sun.org.apache.xerces.internal.impl.xs.identity.FieldActivator): void
    public getValueStoreFor(arg0: com.sun.org.apache.xerces.internal.impl.xs.identity.IdentityConstraint, arg1: int): com.sun.org.apache.xerces.internal.impl.xs.XMLSchemaValidator$ValueStoreBase
    public getGlobalValueStoreFor(arg0: com.sun.org.apache.xerces.internal.impl.xs.identity.IdentityConstraint): com.sun.org.apache.xerces.internal.impl.xs.XMLSchemaValidator$ValueStoreBase
    public transplant(arg0: com.sun.org.apache.xerces.internal.impl.xs.identity.IdentityConstraint, arg1: int): void
    public endDocument(): void
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