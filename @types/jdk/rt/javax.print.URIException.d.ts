declare namespace javax {
    namespace print {
interface URIException {
    URIInaccessible: int
    URISchemeNotSupported: int
    URIOtherProblem: int
    getUnsupportedURI(): java.net.URI
    getReason(): int
}

    }
}