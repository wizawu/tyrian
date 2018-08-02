declare namespace sun {
    namespace nio {
        namespace cs {
            class Surrogate$Parser {
                public constructor()
                public character(): int
                public isPair(): boolean
                public increment(): int
                public error(): java.nio.charset.CoderResult
                public unmappableResult(): java.nio.charset.CoderResult
                public parse(arg0: char, arg1: java.nio.CharBuffer | java.nio.CharBuffer$$Lambda): int
                public parse(arg0: char, arg1: char[], arg2: int, arg3: int): int
                public static class: java.lang.Class<any>
            }
        }
    }
}