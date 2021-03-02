declare namespace com {
  namespace sun {
    namespace java {
      namespace accessibility {
        namespace util {

          class AWTEventMonitor {
            protected static componentWithFocus: java.awt.Component
            protected static componentListener: java.awt.event.ComponentListener
            protected static containerListener: java.awt.event.ContainerListener
            protected static focusListener: java.awt.event.FocusListener
            protected static keyListener: java.awt.event.KeyListener
            protected static mouseListener: java.awt.event.MouseListener
            protected static mouseMotionListener: java.awt.event.MouseMotionListener
            protected static windowListener: java.awt.event.WindowListener
            protected static actionListener: java.awt.event.ActionListener
            protected static adjustmentListener: java.awt.event.AdjustmentListener
            protected static itemListener: java.awt.event.ItemListener
            protected static textListener: java.awt.event.TextListener
            public constructor()
            public static getComponentWithFocus(): java.awt.Component
            public static addComponentListener(arg0: java.awt.event.ComponentListener): void
            public static removeComponentListener(arg0: java.awt.event.ComponentListener): void
            public static addContainerListener(arg0: java.awt.event.ContainerListener): void
            public static removeContainerListener(arg0: java.awt.event.ContainerListener): void
            public static addFocusListener(arg0: java.awt.event.FocusListener): void
            public static removeFocusListener(arg0: java.awt.event.FocusListener): void
            public static addKeyListener(arg0: java.awt.event.KeyListener): void
            public static removeKeyListener(arg0: java.awt.event.KeyListener): void
            public static addMouseListener(arg0: java.awt.event.MouseListener): void
            public static removeMouseListener(arg0: java.awt.event.MouseListener): void
            public static addMouseMotionListener(arg0: java.awt.event.MouseMotionListener): void
            public static removeMouseMotionListener(arg0: java.awt.event.MouseMotionListener): void
            public static addWindowListener(arg0: java.awt.event.WindowListener): void
            public static removeWindowListener(arg0: java.awt.event.WindowListener): void
            public static addActionListener(arg0: java.awt.event.ActionListener | java.awt.event.ActionListener$$lambda): void
            public static removeActionListener(arg0: java.awt.event.ActionListener | java.awt.event.ActionListener$$lambda): void
            public static addAdjustmentListener(arg0: java.awt.event.AdjustmentListener | java.awt.event.AdjustmentListener$$lambda): void
            public static removeAdjustmentListener(arg0: java.awt.event.AdjustmentListener | java.awt.event.AdjustmentListener$$lambda): void
            public static addItemListener(arg0: java.awt.event.ItemListener | java.awt.event.ItemListener$$lambda): void
            public static removeItemListener(arg0: java.awt.event.ItemListener | java.awt.event.ItemListener$$lambda): void
            public static addTextListener(arg0: java.awt.event.TextListener | java.awt.event.TextListener$$lambda): void
            public static removeTextListener(arg0: java.awt.event.TextListener | java.awt.event.TextListener$$lambda): void
          }

        }
      }
    }
  }
}
