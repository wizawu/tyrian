declare namespace java {
  namespace util {
    namespace regex {

      interface MatchResult {

        start(): int
        start(arg0: int): int
        end(): int
        end(arg0: int): int
        group(): java.lang.String
        group(arg0: int): java.lang.String
        groupCount(): int
      }

    }
  }
}
