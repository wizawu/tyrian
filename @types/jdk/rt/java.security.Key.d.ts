declare namespace java {
    namespace security {
interface Key extends java.io.Serializable {
    serialVersionUID: long
    getAlgorithm(): string
    getFormat(): string
    getEncoded(): byte[]
}

    }
}