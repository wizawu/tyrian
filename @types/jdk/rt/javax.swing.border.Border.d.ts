declare namespace javax {
    namespace swing {
        namespace border {
            interface Border {
                paintBorder(arg0: java.awt.Component, arg1: java.awt.Graphics, arg2: int, arg3: int, arg4: int, arg5: int): void
                getBorderInsets(arg0: java.awt.Component): java.awt.Insets
                isBorderOpaque(): boolean
            }
        }
    }
}