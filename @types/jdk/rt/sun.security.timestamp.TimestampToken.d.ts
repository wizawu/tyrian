declare namespace sun {
    namespace security {
        namespace timestamp {
class TimestampToken {
    public constructor(arg0: byte[])
    public getDate(): java.util.Date
    public getHashAlgorithm(): sun.security.x509.AlgorithmId
    public getHashedMessage(): byte[]
    public getNonce(): java.math.BigInteger
    public getPolicyID(): string
    public getSerialNumber(): java.math.BigInteger
    public static class: java.lang.Class<any>
}

        }
    }
}