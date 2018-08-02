declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                namespace regexp {
                    namespace joni {
class ScanEnvironment {
    public syntax: jdk.nashorn.internal.runtime.regexp.joni.Syntax
    public reg: jdk.nashorn.internal.runtime.regexp.joni.Regex
    public numMem: int
    public memNodes: jdk.nashorn.internal.runtime.regexp.joni.ast.Node[]
    public constructor(arg0: jdk.nashorn.internal.runtime.regexp.joni.Regex, arg1: jdk.nashorn.internal.runtime.regexp.joni.Syntax)
    public clear(): void
    public addMemEntry(): int
    public setMemNode(arg0: int, arg1: jdk.nashorn.internal.runtime.regexp.joni.ast.Node): void
    public convertBackslashValue(arg0: int): int
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}