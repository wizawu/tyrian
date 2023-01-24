declare namespace org {
  namespace w3c {
    namespace dom {
      interface Text extends org.w3c.dom.CharacterData {
        splitText(arg0: number | java.lang.Integer): org.w3c.dom.Text
        isElementContentWhitespace(): boolean
        getWholeText(): java.lang.String
        replaceWholeText(arg0: java.lang.String | string): org.w3c.dom.Text
      }
    }
  }
}
