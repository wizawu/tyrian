declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                namespace regexp {
                    namespace joni {
abstract class Matcher extends jdk.nashorn.internal.runtime.regexp.joni.encoding.IntHolder {
    protected regex: jdk.nashorn.internal.runtime.regexp.joni.Regex
    protected chars: char[]
    protected str: int
    protected end: int
    protected msaStart: int
    protected msaOptions: int
    protected msaRegion: jdk.nashorn.internal.runtime.regexp.joni.Region
    protected msaBestLen: int
    protected msaBestS: int
    protected msaBegin: int
    protected msaEnd: int
    public constructor(arg0: jdk.nashorn.internal.runtime.regexp.joni.Regex, arg1: char[])
    public constructor(arg0: jdk.nashorn.internal.runtime.regexp.joni.Regex, arg1: char[], arg2: int, arg3: int)
    protected matchAt(arg0: int, arg1: int, arg2: int): int
    public getRegion(): jdk.nashorn.internal.runtime.regexp.joni.Region
    public getBegin(): int
    public getEnd(): int
    protected msaInit(arg0: int, arg1: int): void
    public match(arg0: int, arg1: int, arg2: int): int
    public search(arg0: int, arg1: int, arg2: int): int
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}