declare namespace java {
  namespace sql {

    interface Savepoint {

      getSavepointId(): int
      getSavepointName(): java.lang.String
    }

  }
}
