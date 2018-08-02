declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                class BasicTransferable implements java.awt.datatransfer.Transferable , javax.swing.plaf.UIResource {
                    protected plainData: string
                    protected htmlData: string
                    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
                    public getTransferDataFlavors(): java.awt.datatransfer.DataFlavor[]
                    public isDataFlavorSupported(arg0: java.awt.datatransfer.DataFlavor): boolean
                    public getTransferData(arg0: java.awt.datatransfer.DataFlavor): java.lang.Object
                    protected isRicherFlavor(arg0: java.awt.datatransfer.DataFlavor): boolean
                    protected getRicherFlavors(): java.awt.datatransfer.DataFlavor[]
                    protected getRicherData(arg0: java.awt.datatransfer.DataFlavor): java.lang.Object
                    protected isHTMLFlavor(arg0: java.awt.datatransfer.DataFlavor): boolean
                    protected isHTMLSupported(): boolean
                    protected getHTMLData(): string
                    protected isPlainFlavor(arg0: java.awt.datatransfer.DataFlavor): boolean
                    protected isPlainSupported(): boolean
                    protected getPlainData(): string
                    protected isStringFlavor(arg0: java.awt.datatransfer.DataFlavor): boolean
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}