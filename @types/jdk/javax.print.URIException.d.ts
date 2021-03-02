declare namespace javax {
  namespace print {

    interface URIException {
      public static readonly URIInaccessible: int
      public static readonly URISchemeNotSupported: int
      public static readonly URIOtherProblem: int
      getUnsupportedURI(): java.net.URI
      getReason(): int
    }

  }
}
