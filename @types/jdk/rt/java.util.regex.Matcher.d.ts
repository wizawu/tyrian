declare namespace java {
    namespace util {
        namespace regex {
            class Matcher implements java.util.regex.MatchResult {
                public pattern(): java.util.regex.Pattern
                public toMatchResult(): java.util.regex.MatchResult
                public usePattern(arg0: java.util.regex.Pattern): java.util.regex.Matcher
                public reset(): java.util.regex.Matcher
                public reset(arg0: java.lang.CharSequence): java.util.regex.Matcher
                public start(): int
                public start(arg0: int): int
                public start(arg0: java.lang.String | string): int
                public end(): int
                public end(arg0: int): int
                public end(arg0: java.lang.String | string): int
                public group(): string
                public group(arg0: int): string
                public group(arg0: java.lang.String | string): string
                public groupCount(): int
                public matches(): boolean
                public find(): boolean
                public find(arg0: int): boolean
                public lookingAt(): boolean
                public static quoteReplacement(arg0: java.lang.String | string): string
                public appendReplacement(arg0: java.lang.StringBuffer, arg1: java.lang.String | string): java.util.regex.Matcher
                public appendTail(arg0: java.lang.StringBuffer): java.lang.StringBuffer
                public replaceAll(arg0: java.lang.String | string): string
                public replaceFirst(arg0: java.lang.String | string): string
                public region(arg0: int, arg1: int): java.util.regex.Matcher
                public regionStart(): int
                public regionEnd(): int
                public hasTransparentBounds(): boolean
                public useTransparentBounds(arg0: boolean): java.util.regex.Matcher
                public hasAnchoringBounds(): boolean
                public useAnchoringBounds(arg0: boolean): java.util.regex.Matcher
                public toString(): string
                public hitEnd(): boolean
                public requireEnd(): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}