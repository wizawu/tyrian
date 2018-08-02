declare namespace javax {
    namespace activation {
        class ActivationDataFlavor extends java.awt.datatransfer.DataFlavor {
            public constructor(arg0: java.lang.Class, arg1: java.lang.String | string, arg2: java.lang.String | string)
            public constructor(arg0: java.lang.Class, arg1: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
            public getMimeType(): string
            public getRepresentationClass(): java.lang.Class
            public getHumanPresentableName(): string
            public setHumanPresentableName(arg0: java.lang.String | string): void
            public equals(arg0: java.awt.datatransfer.DataFlavor): boolean
            public isMimeTypeEqual(arg0: java.lang.String | string): boolean
            protected normalizeMimeTypeParameter(arg0: java.lang.String | string, arg1: java.lang.String | string): string
            protected normalizeMimeType(arg0: java.lang.String | string): string
            public static class: java.lang.Class<any>
        }
    }
}