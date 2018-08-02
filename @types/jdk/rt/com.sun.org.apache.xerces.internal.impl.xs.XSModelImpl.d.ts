declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace xs {
class XSModelImpl extends java.util.AbstractList implements com.sun.org.apache.xerces.internal.xs.XSModel , com.sun.org.apache.xerces.internal.xs.XSNamespaceItemList {
    public constructor(arg0: com.sun.org.apache.xerces.internal.impl.xs.SchemaGrammar[])
    public constructor(arg0: com.sun.org.apache.xerces.internal.impl.xs.SchemaGrammar[], arg1: short)
    public getNamespaces(): com.sun.org.apache.xerces.internal.xs.StringList
    public getNamespaceItems(): com.sun.org.apache.xerces.internal.xs.XSNamespaceItemList
    public getComponents(arg0: short): com.sun.org.apache.xerces.internal.xs.XSNamedMap
    public getComponentsByNamespace(arg0: short, arg1: java.lang.String | string): com.sun.org.apache.xerces.internal.xs.XSNamedMap
    public getTypeDefinition(arg0: java.lang.String | string, arg1: java.lang.String | string): com.sun.org.apache.xerces.internal.xs.XSTypeDefinition
    public getTypeDefinition(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): com.sun.org.apache.xerces.internal.xs.XSTypeDefinition
    public getAttributeDeclaration(arg0: java.lang.String | string, arg1: java.lang.String | string): com.sun.org.apache.xerces.internal.xs.XSAttributeDeclaration
    public getAttributeDeclaration(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): com.sun.org.apache.xerces.internal.xs.XSAttributeDeclaration
    public getElementDeclaration(arg0: java.lang.String | string, arg1: java.lang.String | string): com.sun.org.apache.xerces.internal.xs.XSElementDeclaration
    public getElementDeclaration(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): com.sun.org.apache.xerces.internal.xs.XSElementDeclaration
    public getAttributeGroup(arg0: java.lang.String | string, arg1: java.lang.String | string): com.sun.org.apache.xerces.internal.xs.XSAttributeGroupDefinition
    public getAttributeGroup(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): com.sun.org.apache.xerces.internal.xs.XSAttributeGroupDefinition
    public getModelGroupDefinition(arg0: java.lang.String | string, arg1: java.lang.String | string): com.sun.org.apache.xerces.internal.xs.XSModelGroupDefinition
    public getModelGroupDefinition(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): com.sun.org.apache.xerces.internal.xs.XSModelGroupDefinition
    public getNotationDeclaration(arg0: java.lang.String | string, arg1: java.lang.String | string): com.sun.org.apache.xerces.internal.xs.XSNotationDeclaration
    public getNotationDeclaration(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): com.sun.org.apache.xerces.internal.xs.XSNotationDeclaration
    public getAnnotations(): com.sun.org.apache.xerces.internal.xs.XSObjectList
    public hasIDConstraints(): boolean
    public getSubstitutionGroup(arg0: com.sun.org.apache.xerces.internal.xs.XSElementDeclaration): com.sun.org.apache.xerces.internal.xs.XSObjectList
    public getLength(): int
    public item(arg0: int): com.sun.org.apache.xerces.internal.xs.XSNamespaceItem
    public get(arg0: int): java.lang.Object
    public size(): int
    public iterator(): java.util.Iterator
    public listIterator(): java.util.ListIterator
    public listIterator(arg0: int): java.util.ListIterator
    public toArray(): java.lang.Object[]
    public toArray(arg0: java.lang.Object[]): java.lang.Object[]
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