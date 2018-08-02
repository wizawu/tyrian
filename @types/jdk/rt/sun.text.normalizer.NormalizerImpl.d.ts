declare namespace sun {
    namespace text {
        namespace normalizer {
            class NormalizerImpl {
                public static QC_NFC: int
                public static QC_NFKC: int
                public static QC_NFD: int
                public static QC_NFKD: int
                public static QC_ANY_NO: int
                public static QC_MAYBE: int
                public static QC_ANY_MAYBE: int
                public static QC_MASK: int
                public static COMBINES_ANY: int
                public static CC_MASK: int
                public static INDEX_MIN_NFC_NO_MAYBE: int
                public static INDEX_MIN_NFKC_NO_MAYBE: int
                public static INDEX_MIN_NFD_NO_MAYBE: int
                public static INDEX_MIN_NFKD_NO_MAYBE: int
                public static MIN_WITH_LEAD_CC: int
                public static JAMO_L_BASE: int
                public static JAMO_V_BASE: int
                public static JAMO_T_BASE: int
                public static HANGUL_BASE: int
                public static JAMO_L_COUNT: int
                public static JAMO_V_COUNT: int
                public static JAMO_T_COUNT: int
                public static HANGUL_COUNT: int
                public static OPTIONS_SETS_MASK: int
                public static BEFORE_PRI_29: int
                public static OPTIONS_COMPAT: int
                public static OPTIONS_COMPOSE_CONTIGUOUS: int
                public static WITHOUT_CORRIGENDUM4_CORRECTIONS: int
                public static getFromIndexesArr(arg0: int): int
                public static getNorm32(arg0: char): long
                public static getNorm32FromSurrogatePair(arg0: long, arg1: char): long
                public static getUnicodeVersion(): sun.text.normalizer.VersionInfo
                public static getFCD16(arg0: char): char
                public static getFCD16FromSurrogatePair(arg0: char, arg1: char): char
                public static getFCD16(arg0: int): int
                public static isNFDSafe(arg0: long, arg1: int, arg2: int): boolean
                public static isTrueStarter(arg0: long, arg1: int, arg2: int): boolean
                public static quickCheck(arg0: char[], arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: boolean, arg7: sun.text.normalizer.UnicodeSet): sun.text.normalizer.NormalizerBase$QuickCheckResult
                public static decompose(arg0: char[], arg1: int, arg2: int, arg3: char[], arg4: int, arg5: int, arg6: boolean, arg7: int[], arg8: sun.text.normalizer.UnicodeSet): int
                public static compose(arg0: char[], arg1: int, arg2: int, arg3: char[], arg4: int, arg5: int, arg6: int, arg7: sun.text.normalizer.UnicodeSet): int
                public static getCombiningClass(arg0: int): int
                public static isFullCompositionExclusion(arg0: int): boolean
                public static isCanonSafeStart(arg0: int): boolean
                public static isNFSkippable(arg0: int, arg1: sun.text.normalizer.NormalizerBase$Mode, arg2: long): boolean
                public static addPropertyStarts(arg0: sun.text.normalizer.UnicodeSet): sun.text.normalizer.UnicodeSet
                public static quickCheck(arg0: int, arg1: int): int
                public static getNX(arg0: int): sun.text.normalizer.UnicodeSet
                public static getDecompose(arg0: int[], arg1: java.lang.String[]): int
                public static canonicalDecomposeWithSingleQuotation(arg0: java.lang.String | string): string
                public static convert(arg0: java.lang.String | string): string
                public static class: java.lang.Class<any>
            }
        }
    }
}