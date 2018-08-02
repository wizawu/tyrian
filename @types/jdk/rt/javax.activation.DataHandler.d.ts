declare namespace javax {
    namespace activation {
class DataHandler implements java.awt.datatransfer.Transferable {
    public constructor(arg0: javax.activation.DataSource)
    public constructor(arg0: java.lang.Object, arg1: java.lang.String | string)
    public constructor(arg0: java.net.URL)
    public getDataSource(): javax.activation.DataSource
    public getName(): string
    public getContentType(): string
    public getInputStream(): java.io.InputStream
    public writeTo(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
    public getOutputStream(): java.io.OutputStream
    public getTransferDataFlavors(): java.awt.datatransfer.DataFlavor[]
    public isDataFlavorSupported(arg0: java.awt.datatransfer.DataFlavor): boolean
    public getTransferData(arg0: java.awt.datatransfer.DataFlavor): java.lang.Object
    public setCommandMap(arg0: javax.activation.CommandMap): void
    public getPreferredCommands(): javax.activation.CommandInfo[]
    public getAllCommands(): javax.activation.CommandInfo[]
    public getCommand(arg0: java.lang.String | string): javax.activation.CommandInfo
    public getContent(): java.lang.Object
    public getBean(arg0: javax.activation.CommandInfo): java.lang.Object
    public static setDataContentHandlerFactory(arg0: javax.activation.DataContentHandlerFactory | javax.activation.DataContentHandlerFactory$$Lambda): void
    public static class: java.lang.Class<any>
}

    }
}