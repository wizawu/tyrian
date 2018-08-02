declare namespace javax {
    namespace accessibility {
        interface AccessibleComponent {
            getBackground(): java.awt.Color
            setBackground(arg0: java.awt.Color): void
            getForeground(): java.awt.Color
            setForeground(arg0: java.awt.Color): void
            getCursor(): java.awt.Cursor
            setCursor(arg0: java.awt.Cursor): void
            getFont(): java.awt.Font
            setFont(arg0: java.awt.Font): void
            getFontMetrics(arg0: java.awt.Font): java.awt.FontMetrics
            isEnabled(): boolean
            setEnabled(arg0: boolean): void
            isVisible(): boolean
            setVisible(arg0: boolean): void
            isShowing(): boolean
            contains(arg0: java.awt.Point): boolean
            getLocationOnScreen(): java.awt.Point
            getLocation(): java.awt.Point
            setLocation(arg0: java.awt.Point): void
            getBounds(): java.awt.Rectangle
            setBounds(arg0: java.awt.Rectangle): void
            getSize(): java.awt.Dimension
            setSize(arg0: java.awt.Dimension): void
            getAccessibleAt(arg0: java.awt.Point): javax.accessibility.Accessible
            isFocusTraversable(): boolean
            requestFocus(): void
            addFocusListener(arg0: java.awt.event.FocusListener): void
            removeFocusListener(arg0: java.awt.event.FocusListener): void
        }
    }
}