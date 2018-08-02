declare namespace java {
    namespace security {
        namespace cert {
class PKIXParameters implements java.security.cert.CertPathParameters {
    public constructor(arg0: java.util.Set<java.security.cert.TrustAnchor>)
    public constructor(arg0: java.security.KeyStore)
    public getTrustAnchors(): java.util.Set<java.security.cert.TrustAnchor>
    public setTrustAnchors(arg0: java.util.Set<java.security.cert.TrustAnchor>): void
    public getInitialPolicies(): java.util.Set<java.lang.String>
    public setInitialPolicies(arg0: java.util.Set<java.lang.String>): void
    public setCertStores(arg0: java.util.List<java.security.cert.CertStore>): void
    public addCertStore(arg0: java.security.cert.CertStore): void
    public getCertStores(): java.util.List<java.security.cert.CertStore>
    public setRevocationEnabled(arg0: boolean): void
    public isRevocationEnabled(): boolean
    public setExplicitPolicyRequired(arg0: boolean): void
    public isExplicitPolicyRequired(): boolean
    public setPolicyMappingInhibited(arg0: boolean): void
    public isPolicyMappingInhibited(): boolean
    public setAnyPolicyInhibited(arg0: boolean): void
    public isAnyPolicyInhibited(): boolean
    public setPolicyQualifiersRejected(arg0: boolean): void
    public getPolicyQualifiersRejected(): boolean
    public getDate(): java.util.Date
    public setDate(arg0: java.util.Date): void
    public setCertPathCheckers(arg0: java.util.List<java.security.cert.PKIXCertPathChecker>): void
    public getCertPathCheckers(): java.util.List<java.security.cert.PKIXCertPathChecker>
    public addCertPathChecker(arg0: java.security.cert.PKIXCertPathChecker): void
    public getSigProvider(): string
    public setSigProvider(arg0: java.lang.String | string): void
    public getTargetCertConstraints(): java.security.cert.CertSelector
    public setTargetCertConstraints(arg0: java.security.cert.CertSelector): void
    public clone(): java.lang.Object
    public toString(): string
    public static class: java.lang.Class<any>
}

        }
    }
}