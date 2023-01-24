declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace basic {
        class BasicBorders$FieldBorder
          extends javax.swing.border.AbstractBorder
          implements javax.swing.plaf.UIResource
        {
          protected shadow: java.awt.Color
          protected darkShadow: java.awt.Color
          protected highlight: java.awt.Color
          protected lightHighlight: java.awt.Color
          public constructor(arg0: java.awt.Color, arg1: java.awt.Color, arg2: java.awt.Color, arg3: java.awt.Color)
          public paintBorder(
            arg0: java.awt.Component,
            arg1: java.awt.Graphics,
            arg2: number | java.lang.Integer,
            arg3: number | java.lang.Integer,
            arg4: number | java.lang.Integer,
            arg5: number | java.lang.Integer
          ): void
          public getBorderInsets(arg0: java.awt.Component, arg1: java.awt.Insets): java.awt.Insets
        }
      }
    }
  }
}
