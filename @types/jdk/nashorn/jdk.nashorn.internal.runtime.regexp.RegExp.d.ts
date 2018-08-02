declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                namespace regexp {
abstract class RegExp {
    protected groupsInNegativeLookahead: jdk.nashorn.internal.runtime.BitVector
    protected constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
    public getSource(): string
    public setGlobal(arg0: boolean): void
    public isGlobal(): boolean
    public isIgnoreCase(): boolean
    public isMultiline(): boolean
    public getGroupsInNegativeLookahead(): jdk.nashorn.internal.runtime.BitVector
    public match(arg0: java.lang.String | string): jdk.nashorn.internal.runtime.regexp.RegExpMatcher
    protected static throwParserException(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public static class: java.lang.Class<any>
}

                }
            }
        }
    }
}