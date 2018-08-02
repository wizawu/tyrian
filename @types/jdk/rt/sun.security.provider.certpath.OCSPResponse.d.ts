declare namespace sun {
    namespace security {
        namespace provider {
            namespace certpath {
class OCSPResponse {
    public constructor(arg0: byte[])
    public getResponseStatus(): sun.security.provider.certpath.OCSPResponse$ResponseStatus
    public getSingleResponse(arg0: sun.security.provider.certpath.CertId): sun.security.provider.certpath.OCSPResponse$SingleResponse
    public getCertIds(): java.util.Set<sun.security.provider.certpath.CertId>
    public getResponderId(): sun.security.provider.certpath.ResponderId
    public toString(): string
    public static class: java.lang.Class<any>
}

            }
        }
    }
}