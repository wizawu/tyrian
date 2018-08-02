declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                namespace parser {
                    class Entity implements javax.swing.text.html.parser.DTDConstants {
                        public name: string
                        public type: int
                        public data: char[]
                        public constructor(arg0: java.lang.String | string, arg1: int, arg2: char[])
                        public getName(): string
                        public getType(): int
                        public isParameter(): boolean
                        public isGeneral(): boolean
                        public getData(): char[]
                        public getString(): string
                        public static name2type(arg0: java.lang.String | string): int
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}