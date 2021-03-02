declare namespace java {
  namespace util {
    namespace function$ {

      interface LongPredicate {
        test(arg0: long): boolean
        and(arg0: java.util.function$.LongPredicate): java.util.function$.LongPredicate
        negate(): java.util.function$.LongPredicate
        or(arg0: java.util.function$.LongPredicate): java.util.function$.LongPredicate
      }

    }
  }
}
