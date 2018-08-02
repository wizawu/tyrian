declare namespace sun {
    namespace print {
        class ServiceDialog extends javax.swing.JDialog implements java.awt.event.ActionListener {
            public static WAITING: int
            public static APPROVE: int
            public static CANCEL: int
            public constructor(arg0: java.awt.GraphicsConfiguration, arg1: int, arg2: int, arg3: javax.print.PrintService[], arg4: int, arg5: javax.print.DocFlavor, arg6: javax.print.attribute.PrintRequestAttributeSet, arg7: java.awt.Dialog)
            public constructor(arg0: java.awt.GraphicsConfiguration, arg1: int, arg2: int, arg3: javax.print.PrintService[], arg4: int, arg5: javax.print.DocFlavor, arg6: javax.print.attribute.PrintRequestAttributeSet, arg7: java.awt.Frame)
            public constructor(arg0: java.awt.GraphicsConfiguration, arg1: int, arg2: int, arg3: javax.print.PrintService, arg4: javax.print.DocFlavor, arg5: javax.print.attribute.PrintRequestAttributeSet, arg6: java.awt.Dialog)
            public constructor(arg0: java.awt.GraphicsConfiguration, arg1: int, arg2: int, arg3: javax.print.PrintService, arg4: javax.print.DocFlavor, arg5: javax.print.attribute.PrintRequestAttributeSet, arg6: java.awt.Frame)
            public getStatus(): int
            public getAttributes(): javax.print.attribute.PrintRequestAttributeSet
            public getPrintService(): javax.print.PrintService
            public dispose(arg0: int): void
            public actionPerformed(arg0: java.awt.event.ActionEvent): void
            public static initResource(): void
            public static getMsg(arg0: java.lang.String | string): string
            public static showNoPrintService(arg0: java.awt.GraphicsConfiguration): void
            public static class: java.lang.Class<any>
        }
    }
}