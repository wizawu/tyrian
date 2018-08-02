declare namespace javax {
    namespace swing {
        namespace tree {
            class DefaultTreeCellRenderer extends javax.swing.JLabel implements javax.swing.tree.TreeCellRenderer {
                protected selected: boolean
                protected hasFocus: boolean
                protected closedIcon: javax.swing.Icon
                protected leafIcon: javax.swing.Icon
                protected openIcon: javax.swing.Icon
                protected textSelectionColor: java.awt.Color
                protected textNonSelectionColor: java.awt.Color
                protected backgroundSelectionColor: java.awt.Color
                protected backgroundNonSelectionColor: java.awt.Color
                protected borderSelectionColor: java.awt.Color
                public constructor()
                public updateUI(): void
                public getDefaultOpenIcon(): javax.swing.Icon
                public getDefaultClosedIcon(): javax.swing.Icon
                public getDefaultLeafIcon(): javax.swing.Icon
                public setOpenIcon(arg0: javax.swing.Icon): void
                public getOpenIcon(): javax.swing.Icon
                public setClosedIcon(arg0: javax.swing.Icon): void
                public getClosedIcon(): javax.swing.Icon
                public setLeafIcon(arg0: javax.swing.Icon): void
                public getLeafIcon(): javax.swing.Icon
                public setTextSelectionColor(arg0: java.awt.Color): void
                public getTextSelectionColor(): java.awt.Color
                public setTextNonSelectionColor(arg0: java.awt.Color): void
                public getTextNonSelectionColor(): java.awt.Color
                public setBackgroundSelectionColor(arg0: java.awt.Color): void
                public getBackgroundSelectionColor(): java.awt.Color
                public setBackgroundNonSelectionColor(arg0: java.awt.Color): void
                public getBackgroundNonSelectionColor(): java.awt.Color
                public setBorderSelectionColor(arg0: java.awt.Color): void
                public getBorderSelectionColor(): java.awt.Color
                public setFont(arg0: java.awt.Font): void
                public getFont(): java.awt.Font
                public setBackground(arg0: java.awt.Color): void
                public getTreeCellRendererComponent(arg0: javax.swing.JTree | javax.swing.JTree$$Lambda, arg1: java.lang.Object, arg2: boolean, arg3: boolean, arg4: boolean, arg5: int, arg6: boolean): java.awt.Component
                public paint(arg0: java.awt.Graphics): void
                public getPreferredSize(): java.awt.Dimension
                public validate(): void
                public invalidate(): void
                public revalidate(): void
                public repaint(arg0: long, arg1: int, arg2: int, arg3: int, arg4: int): void
                public repaint(arg0: java.awt.Rectangle): void
                public repaint(): void
                protected firePropertyChange(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: java.lang.Object): void
                public firePropertyChange(arg0: java.lang.String | string, arg1: byte, arg2: byte): void
                public firePropertyChange(arg0: java.lang.String | string, arg1: char, arg2: char): void
                public firePropertyChange(arg0: java.lang.String | string, arg1: short, arg2: short): void
                public firePropertyChange(arg0: java.lang.String | string, arg1: int, arg2: int): void
                public firePropertyChange(arg0: java.lang.String | string, arg1: long, arg2: long): void
                public firePropertyChange(arg0: java.lang.String | string, arg1: float, arg2: float): void
                public firePropertyChange(arg0: java.lang.String | string, arg1: double, arg2: double): void
                public firePropertyChange(arg0: java.lang.String | string, arg1: boolean, arg2: boolean): void
                public static class: java.lang.Class<any>
            }
            class DefaultTreeCellRenderer$$Lambda extends javax.swing.JLabel implements javax.swing.tree.TreeCellRenderer {
                protected selected: boolean
            }
        }
    }
}