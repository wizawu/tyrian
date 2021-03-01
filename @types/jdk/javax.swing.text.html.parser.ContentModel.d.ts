declare namespace javax {
  namespace swing {
    namespace text {
      namespace html {
        namespace parser {

          class ContentModel implements java.io.Serializable {

            public type: int
            public content: java.lang.Object
            public next: javax.swing.text.html.parser.ContentModel
            public constructor()
            public constructor(arg0: javax.swing.text.html.parser.Element)
            public constructor(arg0: int, arg1: javax.swing.text.html.parser.ContentModel)
            public constructor(arg0: int, arg1: java.lang.Object, arg2: javax.swing.text.html.parser.ContentModel)
            public empty(): boolean
            public getElements(arg0: java.util.Vector<javax.swing.text.html.parser.Element>): void
            public first(arg0: java.lang.Object): boolean
            public first(): javax.swing.text.html.parser.Element
            public toString(): java.lang.String
          }

        }
      }
    }
  }
}
