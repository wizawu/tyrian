declare namespace org {
    namespace w3c {
        namespace dom {
interface Text extends org.w3c.dom.CharacterData {
    splitText(arg0: int): org.w3c.dom.Text
    isElementContentWhitespace(): boolean
    getWholeText(): string
    replaceWholeText(arg0: java.lang.String | string): org.w3c.dom.Text
}

        }
    }
}