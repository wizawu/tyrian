declare namespace java {
  namespace util {
    namespace regex {
      interface MatchResult {
        start(): number
        start(arg0: number | java.lang.Integer): number
        end(): number
        end(arg0: number | java.lang.Integer): number
        group(): java.lang.String
        group(arg0: number | java.lang.Integer): java.lang.String
        groupCount(): number
      }
    }
  }
}
