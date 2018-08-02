declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace dom {
class TextImpl extends com.sun.org.apache.xerces.internal.dom.CharacterDataImpl implements org.w3c.dom.CharacterData , org.w3c.dom.Text {
    public constructor()
    public constructor(arg0: com.sun.org.apache.xerces.internal.dom.CoreDocumentImpl, arg1: java.lang.String | string)
    public setValues(arg0: com.sun.org.apache.xerces.internal.dom.CoreDocumentImpl, arg1: java.lang.String | string): void
    public getNodeType(): short
    public getNodeName(): string
    public setIgnorableWhitespace(arg0: boolean): void
    public isElementContentWhitespace(): boolean
    public getWholeText(): string
    protected insertTextContent(arg0: java.lang.StringBuffer): void
    public replaceWholeText(arg0: java.lang.String | string): org.w3c.dom.Text
    public isIgnorableWhitespace(): boolean
    public splitText(arg0: int): org.w3c.dom.Text
    public replaceData(arg0: java.lang.String | string): void
    public removeData(): string
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}