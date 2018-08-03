declare namespace javax {
    namespace activation {
        interface DataContentHandler {
            getTransferDataFlavors(): java.awt.datatransfer.DataFlavor[]
            getTransferData(arg0: java.awt.datatransfer.DataFlavor, arg1: javax.activation.DataSource): java.lang.Object
            getContent(arg0: javax.activation.DataSource): java.lang.Object
            writeTo(arg0: java.lang.Object, arg1: java.lang.String | string, arg2: java.io.OutputStream | java.io.OutputStream$$Lambda): void
        }
    }
}