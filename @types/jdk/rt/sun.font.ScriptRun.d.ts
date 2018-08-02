declare namespace sun {
    namespace font {
        class ScriptRun {
            public constructor()
            public constructor(arg0: char[], arg1: int, arg2: int)
            public init(arg0: char[], arg1: int, arg2: int): void
            public getScriptStart(): int
            public getScriptLimit(): int
            public getScriptCode(): int
            public next(): boolean
            public static class: java.lang.Class<any>
        }
    }
}