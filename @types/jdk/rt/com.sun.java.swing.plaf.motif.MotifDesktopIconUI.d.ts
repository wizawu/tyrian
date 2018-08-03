declare namespace com {
    namespace sun {
        namespace java {
            namespace swing {
                namespace plaf {
                    namespace motif {
                        class MotifDesktopIconUI extends javax.swing.plaf.basic.BasicDesktopIconUI {
                            protected desktopIconActionListener: com.sun.java.swing.plaf.motif.MotifDesktopIconUI$DesktopIconActionListener
                            protected desktopIconMouseListener: com.sun.java.swing.plaf.motif.MotifDesktopIconUI$DesktopIconMouseListener
                            protected defaultIcon: javax.swing.Icon
                            protected iconButton: com.sun.java.swing.plaf.motif.MotifDesktopIconUI$IconButton
                            protected iconLabel: com.sun.java.swing.plaf.motif.MotifDesktopIconUI$IconLabel
                            public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
                            public constructor()
                            protected installDefaults(): void
                            protected installComponents(): void
                            protected uninstallComponents(): void
                            protected installListeners(): void
                            protected showSystemMenu(): void
                            protected hideSystemMenu(): void
                            protected createIconLabel(arg0: javax.swing.JInternalFrame): com.sun.java.swing.plaf.motif.MotifDesktopIconUI$IconLabel
                            protected createIconButton(arg0: javax.swing.Icon): com.sun.java.swing.plaf.motif.MotifDesktopIconUI$IconButton
                            protected createDesktopIconActionListener(): com.sun.java.swing.plaf.motif.MotifDesktopIconUI$DesktopIconActionListener
                            protected createDesktopIconMouseListener(): com.sun.java.swing.plaf.motif.MotifDesktopIconUI$DesktopIconMouseListener
                            protected uninstallDefaults(): void
                            protected uninstallListeners(): void
                            public getMinimumSize(arg0: javax.swing.JComponent): java.awt.Dimension
                            public getPreferredSize(arg0: javax.swing.JComponent): java.awt.Dimension
                            public getMaximumSize(arg0: javax.swing.JComponent): java.awt.Dimension
                            public getDefaultIcon(): javax.swing.Icon
                            public setDefaultIcon(arg0: javax.swing.Icon): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}