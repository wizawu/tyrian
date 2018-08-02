declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                namespace parser {
                    class AttributeList implements javax.swing.text.html.parser.DTDConstants , java.io.Serializable {
                        public name: string
                        public type: int
                        public values: java.util.Vector<any>
                        public modifier: int
                        public value: string
                        public next: javax.swing.text.html.parser.AttributeList
                        public constructor(arg0: java.lang.String | string)
                        public constructor(arg0: java.lang.String | string, arg1: int, arg2: int, arg3: java.lang.String | string, arg4: java.util.Vector<any>, arg5: javax.swing.text.html.parser.AttributeList)
                        public getName(): string
                        public getType(): int
                        public getModifier(): int
                        public getValues(): java.util.Enumeration<any>
                        public getValue(): string
                        public getNext(): javax.swing.text.html.parser.AttributeList
                        public toString(): string
                        public static name2type(arg0: java.lang.String | string): int
                        public static type2name(arg0: int): string
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}