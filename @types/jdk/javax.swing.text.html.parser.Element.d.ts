declare namespace javax {
  namespace swing {
    namespace text {
      namespace html {
        namespace parser {

          class Element implements javax.swing.text.html.parser.DTDConstants, java.io.Serializable {

            public index: int
            public name: java.lang.String
            public oStart: boolean
            public oEnd: boolean
            public inclusions: java.util.BitSet
            public exclusions: java.util.BitSet
            public type: int
            public content: javax.swing.text.html.parser.ContentModel
            public atts: javax.swing.text.html.parser.AttributeList
            public data: java.lang.Object
            static contentTypes: java.util.Hashtable<java.lang.String,java.lang.Integer>
            constructor()
            constructor(arg0: java.lang.String, arg1: int)
            static getMaxIndex(): int
            public getName(): java.lang.String
            public omitStart(): boolean
            public omitEnd(): boolean
            public getType(): int
            public getContent(): javax.swing.text.html.parser.ContentModel
            public getAttributes(): javax.swing.text.html.parser.AttributeList
            public getIndex(): int
            public isEmpty(): boolean
            public toString(): java.lang.String
            public getAttribute(arg0: java.lang.String): javax.swing.text.html.parser.AttributeList
            public getAttributeByValue(arg0: java.lang.String): javax.swing.text.html.parser.AttributeList
            public static name2type(arg0: java.lang.String): int
          }

        }
      }
    }
  }
}
