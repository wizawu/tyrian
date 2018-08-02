declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                class BasicFileChooserUI$BasicFileView extends javax.swing.filechooser.FileView {
                    protected iconCache: java.util.Hashtable<java.io.File, javax.swing.Icon>
                    public constructor(arg0: javax.swing.plaf.basic.BasicFileChooserUI)
                    public clearIconCache(): void
                    public getName(arg0: java.io.File): string
                    public getDescription(arg0: java.io.File): string
                    public getTypeDescription(arg0: java.io.File): string
                    public getCachedIcon(arg0: java.io.File): javax.swing.Icon
                    public cacheIcon(arg0: java.io.File, arg1: javax.swing.Icon): void
                    public getIcon(arg0: java.io.File): javax.swing.Icon
                    public isHidden(arg0: java.io.File): boolean
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}