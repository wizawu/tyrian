declare namespace java {
  namespace util {
    namespace regex {

      class Matcher implements java.util.regex.MatchResult {
        parentPattern: java.util.regex.Pattern
        groups: int[]
        from: int
        to: int
        lookbehindTo: int
        text: java.lang.CharSequence
        static readonly ENDANCHOR: int
        static readonly NOANCHOR: int
        acceptMode: int
        first: int
        last: int
        oldLast: int
        lastAppendPosition: int
        locals: int[]
        localsPos: java.util.regex.IntHashSet[]
        hitEnd: boolean
        requireEnd: boolean
        transparentBounds: boolean
        anchoringBounds: boolean
        modCount: int
        constructor()
        constructor(arg0: java.util.regex.Pattern, arg1: java.lang.CharSequence)
        public pattern(): java.util.regex.Pattern
        public toMatchResult(): java.util.regex.MatchResult
        public usePattern(arg0: java.util.regex.Pattern): java.util.regex.Matcher
        public reset(): java.util.regex.Matcher
        public reset(arg0: java.lang.CharSequence): java.util.regex.Matcher
        public start(): int
        public start(arg0: int): int
        public start(arg0: java.lang.String): int
        public end(): int
        public end(arg0: int): int
        public end(arg0: java.lang.String): int
        public group(): java.lang.String
        public group(arg0: int): java.lang.String
        public group(arg0: java.lang.String): java.lang.String
        public groupCount(): int
        public matches(): boolean
        public find(): boolean
        public find(arg0: int): boolean
        public lookingAt(): boolean
        public static quoteReplacement(arg0: java.lang.String): java.lang.String
        public appendReplacement(arg0: java.lang.StringBuffer, arg1: java.lang.String): java.util.regex.Matcher
        public appendReplacement(arg0: java.lang.StringBuilder, arg1: java.lang.String): java.util.regex.Matcher
        public appendTail(arg0: java.lang.StringBuffer): java.lang.StringBuffer
        public appendTail(arg0: java.lang.StringBuilder): java.lang.StringBuilder
        public replaceAll(arg0: java.lang.String): java.lang.String
        public replaceAll(arg0: java.util.function$.Function<java.util.regex.MatchResult,java.lang.String>): java.lang.String
        public results(): java.util.stream.Stream<java.util.regex.MatchResult>
        public replaceFirst(arg0: java.lang.String): java.lang.String
        public replaceFirst(arg0: java.util.function$.Function<java.util.regex.MatchResult,java.lang.String>): java.lang.String
        public region(arg0: int, arg1: int): java.util.regex.Matcher
        public regionStart(): int
        public regionEnd(): int
        public hasTransparentBounds(): boolean
        public useTransparentBounds(arg0: boolean): java.util.regex.Matcher
        public hasAnchoringBounds(): boolean
        public useAnchoringBounds(arg0: boolean): java.util.regex.Matcher
        public toString(): java.lang.String
        public hitEnd(): boolean
        public requireEnd(): boolean
        search(arg0: int): boolean
        match(arg0: int, arg1: int): boolean
        getTextLength(): int
        getSubSequence(arg0: int, arg1: int): java.lang.CharSequence
        charAt(arg0: int): char
        getMatchedGroupIndex(arg0: java.lang.String): int
      }

    }
  }
}
