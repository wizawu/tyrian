declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace security {
                            namespace c14n {
                                namespace implementations {
class NameSpaceSymbTable {
    public constructor()
    public getUnrenderedNodes(arg0: java.util.Collection<org.w3c.dom.Attr>): void
    public outputNodePush(): void
    public outputNodePop(): void
    public push(): void
    public pop(): void
    public getMapping(arg0: java.lang.String | string): org.w3c.dom.Attr
    public getMappingWithoutRendered(arg0: java.lang.String | string): org.w3c.dom.Attr
    public addMapping(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: org.w3c.dom.Attr): boolean
    public addMappingAndRender(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: org.w3c.dom.Attr): org.w3c.dom.Node
    public getLevel(): int
    public removeMapping(arg0: java.lang.String | string): void
    public removeMappingIfNotRender(arg0: java.lang.String | string): void
    public removeMappingIfRender(arg0: java.lang.String | string): boolean
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