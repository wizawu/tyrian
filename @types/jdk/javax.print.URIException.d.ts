declare namespace javax {
  namespace print {
    interface URIException {
      readonly URIInaccessible: int
      readonly URISchemeNotSupported: int
      readonly URIOtherProblem: int
      getUnsupportedURI(): java.net.URI
      getReason(): number
    }
  }
}
