declare namespace sun {
    namespace text {
        namespace normalizer {
class NormalizerBase$Mode {
    protected normalize(arg0: char[], arg1: int, arg2: int, arg3: char[], arg4: int, arg5: int, arg6: sun.text.normalizer.UnicodeSet): int
    protected normalize(arg0: char[], arg1: int, arg2: int, arg3: char[], arg4: int, arg5: int, arg6: int): int
    protected normalize(arg0: java.lang.String | string, arg1: int): string
    protected getMinC(): int
    protected getMask(): int
    protected getPrevBoundary(): sun.text.normalizer.NormalizerBase$IsPrevBoundary
    protected getNextBoundary(): sun.text.normalizer.NormalizerBase$IsNextBoundary
    protected quickCheck(arg0: char[], arg1: int, arg2: int, arg3: boolean, arg4: sun.text.normalizer.UnicodeSet): sun.text.normalizer.NormalizerBase$QuickCheckResult
    protected isNFSkippable(arg0: int): boolean
    public static class: java.lang.Class<any>
}

        }
    }
}