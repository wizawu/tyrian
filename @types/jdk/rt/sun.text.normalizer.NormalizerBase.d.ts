declare namespace sun {
    namespace text {
        namespace normalizer {
            class NormalizerBase implements java.lang.Cloneable {
                public static readonly UNICODE_3_2: int
                public static readonly DONE: int
                public static readonly NONE: sun.text.normalizer.NormalizerBase$Mode
                public static readonly NFD: sun.text.normalizer.NormalizerBase$Mode
                public static readonly NFKD: sun.text.normalizer.NormalizerBase$Mode
                public static readonly NFC: sun.text.normalizer.NormalizerBase$Mode
                public static readonly NFKC: sun.text.normalizer.NormalizerBase$Mode
                public static readonly NO: sun.text.normalizer.NormalizerBase$QuickCheckResult
                public static readonly YES: sun.text.normalizer.NormalizerBase$QuickCheckResult
                public static readonly MAYBE: sun.text.normalizer.NormalizerBase$QuickCheckResult
                public static readonly UNICODE_3_2_0_ORIGINAL: int
                public static readonly UNICODE_LATEST: int
                public constructor(arg0: java.lang.String | string, arg1: sun.text.normalizer.NormalizerBase$Mode, arg2: int)
                public constructor(arg0: java.text.CharacterIterator, arg1: sun.text.normalizer.NormalizerBase$Mode)
                public constructor(arg0: java.text.CharacterIterator, arg1: sun.text.normalizer.NormalizerBase$Mode, arg2: int)
                public clone(): java.lang.Object
                public static compose(arg0: java.lang.String | string, arg1: boolean, arg2: int): string
                public static decompose(arg0: java.lang.String | string, arg1: boolean): string
                public static decompose(arg0: java.lang.String | string, arg1: boolean, arg2: int): string
                public static normalize(arg0: char[], arg1: int, arg2: int, arg3: char[], arg4: int, arg5: int, arg6: sun.text.normalizer.NormalizerBase$Mode, arg7: int): int
                public current(): int
                public next(): int
                public previous(): int
                public reset(): void
                public setIndexOnly(arg0: int): void
                public setIndex(arg0: int): int
                public getBeginIndex(): int
                public getEndIndex(): int
                public getIndex(): int
                public endIndex(): int
                public setMode(arg0: sun.text.normalizer.NormalizerBase$Mode): void
                public getMode(): sun.text.normalizer.NormalizerBase$Mode
                public setText(arg0: java.lang.String | string): void
                public setText(arg0: java.text.CharacterIterator): void
                public static isNFSkippable(arg0: int, arg1: sun.text.normalizer.NormalizerBase$Mode): boolean
                public constructor(arg0: java.lang.String | string, arg1: sun.text.normalizer.NormalizerBase$Mode)
                public static normalize(arg0: java.lang.String | string, arg1: java.text.Normalizer$Form): string
                public static normalize(arg0: java.lang.String | string, arg1: java.text.Normalizer$Form, arg2: int): string
                public static isNormalized(arg0: java.lang.String | string, arg1: java.text.Normalizer$Form): boolean
                public static isNormalized(arg0: java.lang.String | string, arg1: java.text.Normalizer$Form, arg2: int): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}