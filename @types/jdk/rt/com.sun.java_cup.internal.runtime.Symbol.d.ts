declare namespace com {
    namespace sun {
        namespace java_cup {
            namespace internal {
                namespace runtime {
                    class Symbol {
                        public sym: int
                        public parse_state: int
                        public left: int
                        public right: int
                        public value: java.lang.Object
                        public constructor(arg0: int, arg1: int, arg2: int, arg3: java.lang.Object)
                        public constructor(arg0: int, arg1: java.lang.Object)
                        public constructor(arg0: int, arg1: int, arg2: int)
                        public constructor(arg0: int)
                        public constructor(arg0: int, arg1: int)
                        public toString(): string
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}