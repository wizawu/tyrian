declare namespace javax {
    namespace activation {
        class ObjectDataContentHandler implements javax.activation.DataContentHandler {
            public constructor(arg0: javax.activation.DataContentHandler, arg1: java.lang.Object, arg2: java.lang.String | string)
            public getDCH(): javax.activation.DataContentHandler
            public getTransferDataFlavors(): java.awt.datatransfer.DataFlavor[]
            public getTransferData(arg0: java.awt.datatransfer.DataFlavor, arg1: javax.activation.DataSource): java.lang.Object
            public getContent(arg0: javax.activation.DataSource): java.lang.Object
            public writeTo(arg0: java.lang.Object, arg1: java.lang.String | string, arg2: java.io.OutputStream): void
            public static class: java.lang.Class<any>
        }
    }
}