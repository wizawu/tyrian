declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace xs {
                                abstract class XMLSchemaValidator$ValueStoreBase implements com.sun.org.apache.xerces.internal.impl.xs.identity.ValueStore {
                                    protected fIdentityConstraint: com.sun.org.apache.xerces.internal.impl.xs.identity.IdentityConstraint
                                    protected fFieldCount: int
                                    protected fFields: com.sun.org.apache.xerces.internal.impl.xs.identity.Field[]
                                    protected fLocalValues: java.lang.Object[]
                                    protected fLocalValueTypes: short[]
                                    protected fLocalItemValueTypes: com.sun.org.apache.xerces.internal.xs.ShortList[]
                                    protected fValuesCount: int
                                    public readonly fValues: java.util.Vector
                                    public fValueTypes: com.sun.org.apache.xerces.internal.impl.xs.XMLSchemaValidator$ShortVector
                                    public fItemValueTypes: java.util.Vector
                                    protected constructor(arg0: com.sun.org.apache.xerces.internal.impl.xs.XMLSchemaValidator, arg1: com.sun.org.apache.xerces.internal.impl.xs.identity.IdentityConstraint)
                                    public clear(): void
                                    public append(arg0: com.sun.org.apache.xerces.internal.impl.xs.XMLSchemaValidator$ValueStoreBase): void
                                    public startValueScope(): void
                                    public endValueScope(): void
                                    public endDocumentFragment(): void
                                    public endDocument(): void
                                    public reportError(arg0: java.lang.String | string, arg1: java.lang.Object[]): void
                                    public addValue(arg0: com.sun.org.apache.xerces.internal.impl.xs.identity.Field, arg1: java.lang.Object, arg2: short, arg3: com.sun.org.apache.xerces.internal.xs.ShortList): void
                                    public contains(): boolean
                                    public contains(arg0: com.sun.org.apache.xerces.internal.impl.xs.XMLSchemaValidator$ValueStoreBase): int
                                    protected checkDuplicateValues(): void
                                    protected toString(arg0: java.lang.Object[]): string
                                    protected toString(arg0: java.util.Vector, arg1: int, arg2: int): string
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