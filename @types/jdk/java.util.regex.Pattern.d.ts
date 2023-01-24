declare namespace java {
  namespace util {
    namespace regex {
      class Pattern implements java.io.Serializable {
        public static readonly UNIX_LINES: int
        public static readonly CASE_INSENSITIVE: int
        public static readonly COMMENTS: int
        public static readonly MULTILINE: int
        public static readonly LITERAL: int
        public static readonly DOTALL: int
        public static readonly UNICODE_CASE: int
        public static readonly CANON_EQ: int
        public static readonly UNICODE_CHARACTER_CLASS: int
        root: java.util.regex.Pattern$Node
        matchRoot: java.util.regex.Pattern$Node
        buffer: int[]
        predicate: java.util.regex.Pattern$CharPredicate
        namedGroups: java.util.Map<java.lang.String, java.lang.Integer>
        groupNodes: java.util.regex.Pattern$GroupHead[]
        topClosureNodes: java.util.List<java.util.regex.Pattern$Node>
        localTCNCount: int
        hasGroupRef: boolean
        capturingGroupCount: int
        localCount: int
        static readonly MAX_REPS: int
        static lookbehindEnd: java.util.regex.Pattern$Node
        static readonly accept: java.util.regex.Pattern$Node
        static readonly lastAccept: java.util.regex.Pattern$Node
        static readonly $assertionsDisabled: boolean
        public static compile(arg0: java.lang.String | string): java.util.regex.Pattern
        public static compile(
          arg0: java.lang.String | string,
          arg1: number | java.lang.Integer
        ): java.util.regex.Pattern
        public pattern(): java.lang.String
        public toString(): java.lang.String
        public matcher(arg0: string | java.lang.CharSequence): java.util.regex.Matcher
        public flags(): number
        public static matches(arg0: java.lang.String | string, arg1: string | java.lang.CharSequence): boolean
        public split(arg0: string | java.lang.CharSequence, arg1: number | java.lang.Integer): java.lang.String[]
        public split(arg0: string | java.lang.CharSequence): java.lang.String[]
        public static quote(arg0: java.lang.String | string): java.lang.String
        namedGroups(): java.util.Map<java.lang.String, java.lang.Integer>
        static VertWS(): java.util.regex.Pattern$BmpCharPredicate
        static HorizWS(): java.util.regex.Pattern$BmpCharPredicate
        static ALL(): java.util.regex.Pattern$CharPredicate
        static DOT(): java.util.regex.Pattern$CharPredicate
        static UNIXDOT(): java.util.regex.Pattern$CharPredicate
        static SingleS(arg0: number | java.lang.Integer): java.util.regex.Pattern$CharPredicate
        static Single(arg0: number | java.lang.Integer): java.util.regex.Pattern$BmpCharPredicate
        static SingleI(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer
        ): java.util.regex.Pattern$BmpCharPredicate
        static SingleU(arg0: number | java.lang.Integer): java.util.regex.Pattern$CharPredicate
        static Range(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer
        ): java.util.regex.Pattern$CharPredicate
        static CIRange(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer
        ): java.util.regex.Pattern$CharPredicate
        static CIRangeU(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer
        ): java.util.regex.Pattern$CharPredicate
        public asPredicate(): java.util.function$.Predicate<java.lang.String>
        public asMatchPredicate(): java.util.function$.Predicate<java.lang.String>
        public splitAsStream(arg0: string | java.lang.CharSequence): java.util.stream.Stream<java.lang.String>
      }
    }
  }
}
