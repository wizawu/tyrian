declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                namespace regexp {
                    namespace joni {
abstract class ScannerSupport extends jdk.nashorn.internal.runtime.regexp.joni.encoding.IntHolder implements jdk.nashorn.internal.runtime.regexp.joni.exception.ErrorMessages {
    protected chars: char[]
    protected p: int
    protected stop: int
    protected c: int
    protected _p: int
    protected constructor(arg0: char[], arg1: int, arg2: int)
    protected getBegin(): int
    protected getEnd(): int
    protected scanUnsignedNumber(): int
    protected scanUnsignedHexadecimalNumber(arg0: int): int
    protected scanUnsignedOctalNumber(arg0: int): int
    protected reset(): void
    protected mark(): void
    protected restore(): void
    protected inc(): void
    protected fetch(): void
    protected fetchTo(): int
    protected unfetch(): void
    protected peek(): int
    protected peekIs(arg0: int): boolean
    protected left(): boolean
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}