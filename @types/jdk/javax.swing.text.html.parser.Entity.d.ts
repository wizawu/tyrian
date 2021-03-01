declare namespace javax {
  namespace swing {
    namespace text {
      namespace html {
        namespace parser {

          class Entity implements javax.swing.text.html.parser.DTDConstants {

            public name: java.lang.String
            public type: int
            public data: char[]
            static entityTypes: java.util.Hashtable<java.lang.String,java.lang.Integer>
            public constructor(arg0: java.lang.String, arg1: int, arg2: char[])
            public getName(): java.lang.String
            public getType(): int
            public isParameter(): boolean
            public isGeneral(): boolean
            public getData(): char[]
            public getString(): java.lang.String
            public static name2type(arg0: java.lang.String): int
          }

        }
      }
    }
  }
}
