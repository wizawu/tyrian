declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                namespace regexp {
                    namespace joni {
class Regex implements jdk.nashorn.internal.runtime.regexp.joni.constants.RegexState {
    protected analyser: jdk.nashorn.internal.runtime.regexp.joni.Analyser
    public constructor(arg0: java.lang.CharSequence)
    public constructor(arg0: java.lang.String | string)
    public constructor(arg0: char[])
    public constructor(arg0: char[], arg1: int, arg2: int)
    public constructor(arg0: char[], arg1: int, arg2: int, arg3: int)
    public constructor(arg0: char[], arg1: int, arg2: int, arg3: int, arg4: jdk.nashorn.internal.runtime.regexp.joni.Syntax)
    public constructor(arg0: char[], arg1: int, arg2: int, arg3: int, arg4: jdk.nashorn.internal.runtime.regexp.joni.WarnCallback)
    public constructor(arg0: char[], arg1: int, arg2: int, arg3: int, arg4: jdk.nashorn.internal.runtime.regexp.joni.Syntax, arg5: jdk.nashorn.internal.runtime.regexp.joni.WarnCallback)
    public constructor(arg0: char[], arg1: int, arg2: int, arg3: int, arg4: int, arg5: jdk.nashorn.internal.runtime.regexp.joni.Syntax, arg6: jdk.nashorn.internal.runtime.regexp.joni.WarnCallback)
    public compile(): jdk.nashorn.internal.runtime.regexp.joni.MatcherFactory
    public matcher(arg0: char[]): jdk.nashorn.internal.runtime.regexp.joni.Matcher
    public matcher(arg0: char[], arg1: int, arg2: int): jdk.nashorn.internal.runtime.regexp.joni.Matcher
    public getWarnings(): jdk.nashorn.internal.runtime.regexp.joni.WarnCallback
    public numberOfCaptures(): int
    public optimizeInfoToString(): string
    public getOptions(): int
    public dumpTree(): string
    public dumpByteCode(): string
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}