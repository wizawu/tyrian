declare namespace sun {
    namespace security {
        namespace provider {
            namespace certpath {
                class RevocationChecker$Mode extends java.lang.Enum<sun.security.provider.certpath.RevocationChecker$Mode> {
                    public static PREFER_OCSP: sun.security.provider.certpath.RevocationChecker$Mode
                    public static PREFER_CRLS: sun.security.provider.certpath.RevocationChecker$Mode
                    public static ONLY_CRLS: sun.security.provider.certpath.RevocationChecker$Mode
                    public static ONLY_OCSP: sun.security.provider.certpath.RevocationChecker$Mode
                    public static values(): sun.security.provider.certpath.RevocationChecker$Mode[]
                    public static valueOf(arg0: java.lang.String | string): sun.security.provider.certpath.RevocationChecker$Mode
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}