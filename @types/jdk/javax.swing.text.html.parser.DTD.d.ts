declare namespace javax {
  namespace swing {
    namespace text {
      namespace html {
        namespace parser {

          class DTD implements javax.swing.text.html.parser.DTDConstants {
            public name: java.lang.String
            public elements: java.util.Vector<javax.swing.text.html.parser.Element>
            public elementHash: java.util.Hashtable<java.lang.String,javax.swing.text.html.parser.Element>
            public entityHash: java.util.Hashtable<java.lang.Object,javax.swing.text.html.parser.Entity>
            public readonly pcdata: javax.swing.text.html.parser.Element
            public readonly html: javax.swing.text.html.parser.Element
            public readonly meta: javax.swing.text.html.parser.Element
            public readonly base: javax.swing.text.html.parser.Element
            public readonly isindex: javax.swing.text.html.parser.Element
            public readonly head: javax.swing.text.html.parser.Element
            public readonly body: javax.swing.text.html.parser.Element
            public readonly applet: javax.swing.text.html.parser.Element
            public readonly param: javax.swing.text.html.parser.Element
            public readonly p: javax.swing.text.html.parser.Element
            public readonly title: javax.swing.text.html.parser.Element
            readonly style: javax.swing.text.html.parser.Element
            readonly link: javax.swing.text.html.parser.Element
            readonly script: javax.swing.text.html.parser.Element
            public static readonly FILE_VERSION: int
            protected constructor(arg0: java.lang.String | string)
            public getName(): java.lang.String
            public getEntity(arg0: java.lang.String | string): javax.swing.text.html.parser.Entity
            public getEntity(arg0: number | java.lang.Integer): javax.swing.text.html.parser.Entity
            elementExists(arg0: java.lang.String | string): boolean
            public getElement(arg0: java.lang.String | string): javax.swing.text.html.parser.Element
            public getElement(arg0: number | java.lang.Integer): javax.swing.text.html.parser.Element
            public defineEntity(arg0: java.lang.String | string, arg1: number | java.lang.Integer, arg2: string[] | java.lang.Character[]): javax.swing.text.html.parser.Entity
            public defineElement(arg0: java.lang.String | string, arg1: number | java.lang.Integer, arg2: boolean | java.lang.Boolean, arg3: boolean | java.lang.Boolean, arg4: javax.swing.text.html.parser.ContentModel, arg5: java.util.BitSet, arg6: java.util.BitSet, arg7: javax.swing.text.html.parser.AttributeList): javax.swing.text.html.parser.Element
            public defineAttributes(arg0: java.lang.String | string, arg1: javax.swing.text.html.parser.AttributeList): void
            public defEntity(arg0: java.lang.String | string, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): javax.swing.text.html.parser.Entity
            protected defEntity(arg0: java.lang.String | string, arg1: number | java.lang.Integer, arg2: java.lang.String | string): javax.swing.text.html.parser.Entity
            protected defElement(arg0: java.lang.String | string, arg1: number | java.lang.Integer, arg2: boolean | java.lang.Boolean, arg3: boolean | java.lang.Boolean, arg4: javax.swing.text.html.parser.ContentModel, arg5: java.lang.String[] | string[], arg6: java.lang.String[] | string[], arg7: javax.swing.text.html.parser.AttributeList): javax.swing.text.html.parser.Element
            protected defAttributeList(arg0: java.lang.String | string, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: java.lang.String | string, arg4: java.lang.String | string, arg5: javax.swing.text.html.parser.AttributeList): javax.swing.text.html.parser.AttributeList
            protected defContentModel(arg0: number | java.lang.Integer, arg1: java.lang.Object | any, arg2: javax.swing.text.html.parser.ContentModel): javax.swing.text.html.parser.ContentModel
            public toString(): java.lang.String
            public static putDTDHash(arg0: java.lang.String | string, arg1: javax.swing.text.html.parser.DTD): void
            public static getDTD(arg0: java.lang.String | string): javax.swing.text.html.parser.DTD
            public read(arg0: java.io.DataInputStream): void
          }

        }
      }
    }
  }
}
