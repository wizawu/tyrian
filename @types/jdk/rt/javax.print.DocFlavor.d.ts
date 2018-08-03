declare namespace javax {
    namespace print {
        class DocFlavor implements java.io.Serializable , java.lang.Cloneable {
            public static readonly hostEncoding: string
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
            public getMimeType(): string
            public getMediaType(): string
            public getMediaSubtype(): string
            public getParameter(arg0: java.lang.String | string): string
            public getRepresentationClassName(): string
            public toString(): string
            public hashCode(): int
            public equals(arg0: java.lang.Object): boolean
            public static class: java.lang.Class<any>
        }
    }
}