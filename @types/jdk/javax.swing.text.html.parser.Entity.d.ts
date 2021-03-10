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
            public constructor(arg0: java.lang.String | string, arg1: number | java.lang.Integer, arg2: string[] | java.lang.Character[])
            public getName(): java.lang.String
            public getType(): number
            public isParameter(): boolean
            public isGeneral(): boolean
            public getData(): string[]
            public getString(): java.lang.String
            public static name2type(arg0: java.lang.String | string): number
          }

        }
      }
    }
  }
}
