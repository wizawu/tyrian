declare namespace java {
  namespace sql {

    interface Savepoint {
      getSavepointId(): number
      getSavepointName(): java.lang.String
    }

  }
}
