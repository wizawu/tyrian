declare namespace javax {
  namespace swing {
    namespace text {
      namespace html {
        namespace parser {
          class AttributeList implements javax.swing.text.html.parser.DTDConstants, java.io.Serializable {
            public name: java.lang.String
            public type: int
            public values: java.util.Vector<unknown>
            public modifier: int
            public value: java.lang.String
            public next: javax.swing.text.html.parser.AttributeList
            static attributeTypes: java.util.Hashtable<java.lang.Object, java.lang.Object>
            constructor()
            public constructor(arg0: java.lang.String | string)
            public constructor(
              arg0: java.lang.String | string,
              arg1: number | java.lang.Integer,
              arg2: number | java.lang.Integer,
              arg3: java.lang.String | string,
              arg4: java.util.Vector<unknown>,
              arg5: javax.swing.text.html.parser.AttributeList
            )
            public getName(): java.lang.String
            public getType(): number
            public getModifier(): number
            public getValues(): java.util.Enumeration<unknown>
            public getValue(): java.lang.String
            public getNext(): javax.swing.text.html.parser.AttributeList
            public toString(): java.lang.String
            static defineAttributeType(arg0: java.lang.String | string, arg1: number | java.lang.Integer): void
            public static name2type(arg0: java.lang.String | string): number
            public static type2name(arg0: number | java.lang.Integer): java.lang.String
          }
        }
      }
    }
  }
}
