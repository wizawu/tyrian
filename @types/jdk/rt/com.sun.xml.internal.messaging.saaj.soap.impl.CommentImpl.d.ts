declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace messaging {
                    namespace saaj {
                        namespace soap {
                            namespace impl {
                                class CommentImpl extends com.sun.org.apache.xerces.internal.dom.CommentImpl implements javax.xml.soap.Text , org.w3c.dom.Comment {
                                    protected static log: java.util.logging.Logger
                                    protected static rb: java.util.ResourceBundle
                                    public constructor(arg0: com.sun.xml.internal.messaging.saaj.soap.SOAPDocumentImpl, arg1: java.lang.String | string)
                                    public getValue(): string
                                    public setValue(arg0: java.lang.String | string): void
                                    public setParentElement(arg0: javax.xml.soap.SOAPElement): void
                                    public getParentElement(): javax.xml.soap.SOAPElement
                                    public detachNode(): void
                                    public recycleNode(): void
                                    public isComment(): boolean
                                    public splitText(arg0: int): org.w3c.dom.Text
                                    public replaceWholeText(arg0: java.lang.String | string): org.w3c.dom.Text
                                    public getWholeText(): string
                                    public isElementContentWhitespace(): boolean
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