declare namespace java {
    namespace util {
        namespace stream {
class MatchOps {
    public static makeRef<T>(arg0: java.util.function$.Predicate<T>, arg1: java.util.stream.MatchOps$MatchKind): java.util.stream.TerminalOp<T, java.lang.Boolean>
    public static makeInt(arg0: java.util.function$.IntPredicate, arg1: java.util.stream.MatchOps$MatchKind): java.util.stream.TerminalOp<java.lang.Integer, java.lang.Boolean>
    public static makeLong(arg0: java.util.function$.LongPredicate, arg1: java.util.stream.MatchOps$MatchKind): java.util.stream.TerminalOp<java.lang.Long, java.lang.Boolean>
    public static makeDouble(arg0: java.util.function$.DoublePredicate, arg1: java.util.stream.MatchOps$MatchKind): java.util.stream.TerminalOp<java.lang.Double, java.lang.Boolean>
    public static class: java.lang.Class<any>
}

        }
    }
}