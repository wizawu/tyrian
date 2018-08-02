declare namespace sun {
    namespace security {
        namespace provider {
            namespace certpath {
                class PKIXExtendedParameters extends java.security.cert.PKIXBuilderParameters {
                    public constructor(arg0: java.security.cert.PKIXBuilderParameters, arg1: java.security.Timestamp, arg2: java.lang.String | string)
                    public getTimestamp(): java.security.Timestamp
                    public setTimestamp(arg0: java.security.Timestamp): void
                    public getVariant(): string
                    public setDate(arg0: java.util.Date): void
                    public addCertPathChecker(arg0: java.security.cert.PKIXCertPathChecker): void
                    public setMaxPathLength(arg0: int): void
                    public getMaxPathLength(): int
                    public toString(): string
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
                    public setCertPathCheckers(arg0: java.util.List<java.security.cert.PKIXCertPathChecker>): void
                    public getCertPathCheckers(): java.util.List<java.security.cert.PKIXCertPathChecker>
                    public getSigProvider(): string
                    public setSigProvider(arg0: java.lang.String | string): void
                    public getTargetCertConstraints(): java.security.cert.CertSelector
                    public setTargetCertConstraints(arg0: java.security.cert.CertSelector): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}