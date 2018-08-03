declare namespace sun {
    namespace security {
        namespace x509 {
            interface GeneralNameInterface {
                NAME_ANY: int
                NAME_RFC822: int
                NAME_DNS: int
                NAME_X400: int
                NAME_DIRECTORY: int
                NAME_EDI: int
                NAME_URI: int
                NAME_IP: int
                NAME_OID: int
                NAME_DIFF_TYPE: int
                NAME_MATCH: int
                NAME_NARROWS: int
                NAME_WIDENS: int
                NAME_SAME_TYPE: int
                getType(): int
                encode(arg0: sun.security.util.DerOutputStream): void
                constrains(arg0: sun.security.x509.GeneralNameInterface): int
                subtreeDepth(): int
            }
        }
    }
}