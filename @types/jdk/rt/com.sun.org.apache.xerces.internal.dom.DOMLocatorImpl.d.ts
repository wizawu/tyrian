declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace dom {
class DOMLocatorImpl implements org.w3c.dom.DOMLocator {
    public fColumnNumber: int
    public fLineNumber: int
    public fRelatedNode: org.w3c.dom.Node
    public fUri: string
    public fByteOffset: int
    public fUtf16Offset: int
    public constructor()
    public constructor(arg0: int, arg1: int, arg2: java.lang.String | string)
    public constructor(arg0: int, arg1: int, arg2: int, arg3: java.lang.String | string)
    public constructor(arg0: int, arg1: int, arg2: int, arg3: org.w3c.dom.Node, arg4: java.lang.String | string)
    public constructor(arg0: int, arg1: int, arg2: int, arg3: org.w3c.dom.Node, arg4: java.lang.String | string, arg5: int)
    public getLineNumber(): int
    public getColumnNumber(): int
    public getUri(): string
    public getRelatedNode(): org.w3c.dom.Node
    public getByteOffset(): int
    public getUtf16Offset(): int
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}