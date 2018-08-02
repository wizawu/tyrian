declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                namespace regexp {
                    namespace joni {
class Syntax implements jdk.nashorn.internal.runtime.regexp.joni.constants.SyntaxProperties {
    public options: int
    public metaCharTable: jdk.nashorn.internal.runtime.regexp.joni.Syntax$MetaCharTable
    public static RUBY: jdk.nashorn.internal.runtime.regexp.joni.Syntax
    public static DEFAULT: jdk.nashorn.internal.runtime.regexp.joni.Syntax
    public static ASIS: jdk.nashorn.internal.runtime.regexp.joni.Syntax
    public static PosixBasic: jdk.nashorn.internal.runtime.regexp.joni.Syntax
    public static PosixExtended: jdk.nashorn.internal.runtime.regexp.joni.Syntax
    public static Emacs: jdk.nashorn.internal.runtime.regexp.joni.Syntax
    public static Grep: jdk.nashorn.internal.runtime.regexp.joni.Syntax
    public static GnuRegex: jdk.nashorn.internal.runtime.regexp.joni.Syntax
    public static Java: jdk.nashorn.internal.runtime.regexp.joni.Syntax
    public static Perl: jdk.nashorn.internal.runtime.regexp.joni.Syntax
    public static PerlNG: jdk.nashorn.internal.runtime.regexp.joni.Syntax
    public static JAVASCRIPT: jdk.nashorn.internal.runtime.regexp.joni.Syntax
    public constructor(arg0: int, arg1: int, arg2: int, arg3: int, arg4: jdk.nashorn.internal.runtime.regexp.joni.Syntax$MetaCharTable)
    protected isOp(arg0: int): boolean
    public opVariableMetaCharacters(): boolean
    public opDotAnyChar(): boolean
    public opAsteriskZeroInf(): boolean
    public opEscAsteriskZeroInf(): boolean
    public opPlusOneInf(): boolean
    public opEscPlusOneInf(): boolean
    public opQMarkZeroOne(): boolean
    public opEscQMarkZeroOne(): boolean
    public opBraceInterval(): boolean
    public opEscBraceInterval(): boolean
    public opVBarAlt(): boolean
    public opEscVBarAlt(): boolean
    public opLParenSubexp(): boolean
    public opEscLParenSubexp(): boolean
    public opEscAZBufAnchor(): boolean
    public opEscCapitalGBeginAnchor(): boolean
    public opDecimalBackref(): boolean
    public opBracketCC(): boolean
    public opEscWWord(): boolean
    public opEscLtGtWordBeginEnd(): boolean
    public opEscBWordBound(): boolean
    public opEscSWhiteSpace(): boolean
    public opEscDDigit(): boolean
    public opLineAnchor(): boolean
    public opPosixBracket(): boolean
    public opQMarkNonGreedy(): boolean
    public opEscControlChars(): boolean
    public opEscCControl(): boolean
    public opEscOctal3(): boolean
    public opEscXHex2(): boolean
    public opEscXBraceHex8(): boolean
    protected isOp2(arg0: int): boolean
    public op2EscCapitalQQuote(): boolean
    public op2QMarkGroupEffect(): boolean
    public op2OptionPerl(): boolean
    public op2OptionRuby(): boolean
    public op2PlusPossessiveRepeat(): boolean
    public op2PlusPossessiveInterval(): boolean
    public op2CClassSetOp(): boolean
    public op2QMarkLtNamedGroup(): boolean
    public op2EscKNamedBackref(): boolean
    public op2EscGSubexpCall(): boolean
    public op2AtMarkCaptureHistory(): boolean
    public op2EscCapitalCBarControl(): boolean
    public op2EscCapitalMBarMeta(): boolean
    public op2EscVVtab(): boolean
    public op2EscUHex4(): boolean
    public op2EscGnuBufAnchor(): boolean
    public op2EscPBraceCharProperty(): boolean
    public op2EscPBraceCircumflexNot(): boolean
    public op2EscHXDigit(): boolean
    public op2IneffectiveEscape(): boolean
    protected isBehavior(arg0: int): boolean
    public contextIndepRepeatOps(): boolean
    public contextInvalidRepeatOps(): boolean
    public allowUnmatchedCloseSubexp(): boolean
    public allowInvalidInterval(): boolean
    public allowIntervalLowAbbrev(): boolean
    public strictCheckBackref(): boolean
    public differentLengthAltLookBehind(): boolean
    public captureOnlyNamedGroup(): boolean
    public allowMultiplexDefinitionName(): boolean
    public fixedIntervalIsGreedyOnly(): boolean
    public notNewlineInNegativeCC(): boolean
    public backSlashEscapeInCC(): boolean
    public allowEmptyRangeInCC(): boolean
    public allowDoubleRangeOpInCC(): boolean
    public warnCCOpNotEscaped(): boolean
    public warnReduntantNestedRepeat(): boolean
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}