declare namespace sun {
    namespace security {
        namespace provider {
            namespace certpath {
                class OCSPResponse$ResponseStatus extends java.lang.Enum<sun.security.provider.certpath.OCSPResponse$ResponseStatus> {
                    public static readonly SUCCESSFUL: sun.security.provider.certpath.OCSPResponse$ResponseStatus
                    public static readonly MALFORMED_REQUEST: sun.security.provider.certpath.OCSPResponse$ResponseStatus
                    public static readonly INTERNAL_ERROR: sun.security.provider.certpath.OCSPResponse$ResponseStatus
                    public static readonly TRY_LATER: sun.security.provider.certpath.OCSPResponse$ResponseStatus
                    public static readonly UNUSED: sun.security.provider.certpath.OCSPResponse$ResponseStatus
                    public static readonly SIG_REQUIRED: sun.security.provider.certpath.OCSPResponse$ResponseStatus
                    public static readonly UNAUTHORIZED: sun.security.provider.certpath.OCSPResponse$ResponseStatus
                    public static values(): sun.security.provider.certpath.OCSPResponse$ResponseStatus[]
                    public static valueOf(arg0: java.lang.String | string): sun.security.provider.certpath.OCSPResponse$ResponseStatus
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}