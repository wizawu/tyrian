declare namespace javax {
  namespace sql {
    namespace rowset {
      namespace spi {

        class SyncProviderException extends java.sql.SQLException {

          static readonly serialVersionUID: long
          public constructor()
          public constructor(arg0: java.lang.String)
          public constructor(arg0: javax.sql.rowset.spi.SyncResolver)
          public getSyncResolver(): javax.sql.rowset.spi.SyncResolver
          public setSyncResolver(arg0: javax.sql.rowset.spi.SyncResolver): void
        }

      }
    }
  }
}
