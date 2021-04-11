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
        constructor(arg0: java.util.regex.Pattern, arg1: string | java.lang.CharSequence)
        public pattern(): java.util.regex.Pattern
        public toMatchResult(): java.util.regex.MatchResult
        public usePattern(arg0: java.util.regex.Pattern): java.util.regex.Matcher
        public reset(): java.util.regex.Matcher
        public reset(arg0: string | java.lang.CharSequence): java.util.regex.Matcher
        public start(): number
        public start(arg0: number | java.lang.Integer): number
        public start(arg0: java.lang.String | string): number
        public end(): number
        public end(arg0: number | java.lang.Integer): number
        public end(arg0: java.lang.String | string): number
        public group(): java.lang.String
        public group(arg0: number | java.lang.Integer): java.lang.String
        public group(arg0: java.lang.String | string): java.lang.String
        public groupCount(): number
        public matches(): boolean
        public find(): boolean
        public find(arg0: number | java.lang.Integer): boolean
        public lookingAt(): boolean
        public static quoteReplacement(arg0: java.lang.String | string): java.lang.String
        public appendReplacement(arg0: java.lang.StringBuffer, arg1: java.lang.String | string): java.util.regex.Matcher
        public appendReplacement(arg0: java.lang.StringBuilder, arg1: java.lang.String | string): java.util.regex.Matcher
        public appendTail(arg0: java.lang.StringBuffer): java.lang.StringBuffer
        public appendTail(arg0: java.lang.StringBuilder): java.lang.StringBuilder
        public replaceAll(arg0: java.lang.String | string): java.lang.String
        public replaceAll(arg0: java.util.function$.Function<java.util.regex.MatchResult,java.lang.String>): java.lang.String
        public results(): java.util.stream.Stream<java.util.regex.MatchResult>
        public replaceFirst(arg0: java.lang.String | string): java.lang.String
        public replaceFirst(arg0: java.util.function$.Function<java.util.regex.MatchResult,java.lang.String>): java.lang.String
        public region(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.util.regex.Matcher
        public regionStart(): number
        public regionEnd(): number
        public hasTransparentBounds(): boolean
        public useTransparentBounds(arg0: boolean | java.lang.Boolean): java.util.regex.Matcher
        public hasAnchoringBounds(): boolean
        public useAnchoringBounds(arg0: boolean | java.lang.Boolean): java.util.regex.Matcher
        public toString(): java.lang.String
        public hitEnd(): boolean
        public requireEnd(): boolean
        search(arg0: number | java.lang.Integer): boolean
        match(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): boolean
        getTextLength(): number
        getSubSequence(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): string
        charAt(arg0: number | java.lang.Integer): string
        getMatchedGroupIndex(arg0: java.lang.String | string): number
      }

    }
  }
}
