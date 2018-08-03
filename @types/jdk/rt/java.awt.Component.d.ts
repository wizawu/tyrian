declare namespace java {
    namespace awt {
        abstract class Component implements java.awt.image.ImageObserver , java.awt.MenuContainer , java.io.Serializable {
            public static readonly TOP_ALIGNMENT: float
            public static readonly CENTER_ALIGNMENT: float
            public static readonly BOTTOM_ALIGNMENT: float
            public static readonly LEFT_ALIGNMENT: float
            public static readonly RIGHT_ALIGNMENT: float
            protected accessibleContext: javax.accessibility.AccessibleContext
            protected constructor()
            public getName(): string
            public setName(arg0: java.lang.String | string): void
            public getParent(): java.awt.Container
            public getPeer(): java.awt.peer.ComponentPeer
            public setDropTarget(arg0: java.awt.dnd.DropTarget): void
            public getDropTarget(): java.awt.dnd.DropTarget
            public getGraphicsConfiguration(): java.awt.GraphicsConfiguration
            public getTreeLock(): java.lang.Object
            public getToolkit(): java.awt.Toolkit
            public isValid(): boolean
            public isDisplayable(): boolean
            public isVisible(): boolean
            public getMousePosition(): java.awt.Point
            public isShowing(): boolean
            public isEnabled(): boolean
            public setEnabled(arg0: boolean): void
            public enable(): void
            public enable(arg0: boolean): void
            public disable(): void
            public isDoubleBuffered(): boolean
            public enableInputMethods(arg0: boolean): void
            public setVisible(arg0: boolean): void
            public show(): void
            public show(arg0: boolean): void
            public hide(): void
            public getForeground(): java.awt.Color
            public setForeground(arg0: java.awt.Color): void
            public isForegroundSet(): boolean
            public getBackground(): java.awt.Color
            public setBackground(arg0: java.awt.Color): void
            public isBackgroundSet(): boolean
            public getFont(): java.awt.Font
            public setFont(arg0: java.awt.Font): void
            public isFontSet(): boolean
            public getLocale(): java.util.Locale
            public setLocale(arg0: java.util.Locale): void
            public getColorModel(): java.awt.image.ColorModel
            public getLocation(): java.awt.Point
            public getLocationOnScreen(): java.awt.Point
            public location(): java.awt.Point
            public setLocation(arg0: int, arg1: int): void
            public move(arg0: int, arg1: int): void
            public setLocation(arg0: java.awt.Point): void
            public getSize(): java.awt.Dimension
            public size(): java.awt.Dimension
            public setSize(arg0: int, arg1: int): void
            public resize(arg0: int, arg1: int): void
            public setSize(arg0: java.awt.Dimension): void
            public resize(arg0: java.awt.Dimension): void
            public getBounds(): java.awt.Rectangle
            public bounds(): java.awt.Rectangle
            public setBounds(arg0: int, arg1: int, arg2: int, arg3: int): void
            public reshape(arg0: int, arg1: int, arg2: int, arg3: int): void
            public setBounds(arg0: java.awt.Rectangle): void
            public getX(): int
            public getY(): int
            public getWidth(): int
            public getHeight(): int
            public getBounds(arg0: java.awt.Rectangle): java.awt.Rectangle
            public getSize(arg0: java.awt.Dimension): java.awt.Dimension
            public getLocation(arg0: java.awt.Point): java.awt.Point
            public isOpaque(): boolean
            public isLightweight(): boolean
            public setPreferredSize(arg0: java.awt.Dimension): void
            public isPreferredSizeSet(): boolean
            public getPreferredSize(): java.awt.Dimension
            public preferredSize(): java.awt.Dimension
            public setMinimumSize(arg0: java.awt.Dimension): void
            public isMinimumSizeSet(): boolean
            public getMinimumSize(): java.awt.Dimension
            public minimumSize(): java.awt.Dimension
            public setMaximumSize(arg0: java.awt.Dimension): void
            public isMaximumSizeSet(): boolean
            public getMaximumSize(): java.awt.Dimension
            public getAlignmentX(): float
            public getAlignmentY(): float
            public getBaseline(arg0: int, arg1: int): int
            public getBaselineResizeBehavior(): java.awt.Component$BaselineResizeBehavior
            public doLayout(): void
            public layout(): void
            public validate(): void
            public invalidate(): void
            public revalidate(): void
            public getGraphics(): java.awt.Graphics
            public getFontMetrics(arg0: java.awt.Font): java.awt.FontMetrics
            public setCursor(arg0: java.awt.Cursor): void
            public getCursor(): java.awt.Cursor
            public isCursorSet(): boolean
            public paint(arg0: java.awt.Graphics): void
            public update(arg0: java.awt.Graphics): void
            public paintAll(arg0: java.awt.Graphics): void
            public repaint(): void
            public repaint(arg0: long): void
            public repaint(arg0: int, arg1: int, arg2: int, arg3: int): void
            public repaint(arg0: long, arg1: int, arg2: int, arg3: int, arg4: int): void
            public print(arg0: java.awt.Graphics): void
            public printAll(arg0: java.awt.Graphics): void
            public imageUpdate(arg0: java.awt.Image, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int): boolean
            public createImage(arg0: java.awt.image.ImageProducer): java.awt.Image
            public createImage(arg0: int, arg1: int): java.awt.Image
            public createVolatileImage(arg0: int, arg1: int): java.awt.image.VolatileImage
            public createVolatileImage(arg0: int, arg1: int, arg2: java.awt.ImageCapabilities): java.awt.image.VolatileImage
            public prepareImage(arg0: java.awt.Image, arg1: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$Lambda): boolean
            public prepareImage(arg0: java.awt.Image, arg1: int, arg2: int, arg3: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$Lambda): boolean
            public checkImage(arg0: java.awt.Image, arg1: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$Lambda): int
            public checkImage(arg0: java.awt.Image, arg1: int, arg2: int, arg3: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$Lambda): int
            public setIgnoreRepaint(arg0: boolean): void
            public getIgnoreRepaint(): boolean
            public contains(arg0: int, arg1: int): boolean
            public inside(arg0: int, arg1: int): boolean
            public contains(arg0: java.awt.Point): boolean
            public getComponentAt(arg0: int, arg1: int): java.awt.Component
            public locate(arg0: int, arg1: int): java.awt.Component
            public getComponentAt(arg0: java.awt.Point): java.awt.Component
            public deliverEvent(arg0: java.awt.Event): void
            public dispatchEvent(arg0: java.awt.AWTEvent): void
            public postEvent(arg0: java.awt.Event): boolean
            public addComponentListener(arg0: java.awt.event.ComponentListener): void
            public removeComponentListener(arg0: java.awt.event.ComponentListener): void
            public getComponentListeners(): java.awt.event.ComponentListener[]
            public addFocusListener(arg0: java.awt.event.FocusListener): void
            public removeFocusListener(arg0: java.awt.event.FocusListener): void
            public getFocusListeners(): java.awt.event.FocusListener[]
            public addHierarchyListener(arg0: java.awt.event.HierarchyListener): void
            public removeHierarchyListener(arg0: java.awt.event.HierarchyListener): void
            public getHierarchyListeners(): java.awt.event.HierarchyListener[]
            public addHierarchyBoundsListener(arg0: java.awt.event.HierarchyBoundsListener): void
            public removeHierarchyBoundsListener(arg0: java.awt.event.HierarchyBoundsListener): void
            public getHierarchyBoundsListeners(): java.awt.event.HierarchyBoundsListener[]
            public addKeyListener(arg0: java.awt.event.KeyListener): void
            public removeKeyListener(arg0: java.awt.event.KeyListener): void
            public getKeyListeners(): java.awt.event.KeyListener[]
            public addMouseListener(arg0: java.awt.event.MouseListener): void
            public removeMouseListener(arg0: java.awt.event.MouseListener): void
            public getMouseListeners(): java.awt.event.MouseListener[]
            public addMouseMotionListener(arg0: java.awt.event.MouseMotionListener): void
            public removeMouseMotionListener(arg0: java.awt.event.MouseMotionListener): void
            public getMouseMotionListeners(): java.awt.event.MouseMotionListener[]
            public addMouseWheelListener(arg0: java.awt.event.MouseWheelListener): void
            public removeMouseWheelListener(arg0: java.awt.event.MouseWheelListener): void
            public getMouseWheelListeners(): java.awt.event.MouseWheelListener[]
            public addInputMethodListener(arg0: java.awt.event.InputMethodListener): void
            public removeInputMethodListener(arg0: java.awt.event.InputMethodListener): void
            public getInputMethodListeners(): java.awt.event.InputMethodListener[]
            public getListeners<T extends java.util.EventListener>(arg0: java.lang.Class<T>): T[]
            public getInputMethodRequests<T extends java.util.EventListener>(): java.awt.im.InputMethodRequests
            public getInputContext<T extends java.util.EventListener>(): java.awt.im.InputContext
            protected enableEvents<T extends java.util.EventListener>(arg0: long): void
            protected disableEvents<T extends java.util.EventListener>(arg0: long): void
            protected coalesceEvents<T extends java.util.EventListener>(arg0: java.awt.AWTEvent, arg1: java.awt.AWTEvent): java.awt.AWTEvent
            protected processEvent<T extends java.util.EventListener>(arg0: java.awt.AWTEvent): void
            protected processComponentEvent<T extends java.util.EventListener>(arg0: java.awt.event.ComponentEvent): void
            protected processFocusEvent<T extends java.util.EventListener>(arg0: java.awt.event.FocusEvent): void
            protected processKeyEvent<T extends java.util.EventListener>(arg0: java.awt.event.KeyEvent): void
            protected processMouseEvent<T extends java.util.EventListener>(arg0: java.awt.event.MouseEvent): void
            protected processMouseMotionEvent<T extends java.util.EventListener>(arg0: java.awt.event.MouseEvent): void
            protected processMouseWheelEvent<T extends java.util.EventListener>(arg0: java.awt.event.MouseWheelEvent): void
            protected processInputMethodEvent<T extends java.util.EventListener>(arg0: java.awt.event.InputMethodEvent): void
            protected processHierarchyEvent<T extends java.util.EventListener>(arg0: java.awt.event.HierarchyEvent): void
            protected processHierarchyBoundsEvent<T extends java.util.EventListener>(arg0: java.awt.event.HierarchyEvent): void
            public handleEvent<T extends java.util.EventListener>(arg0: java.awt.Event): boolean
            public mouseDown<T extends java.util.EventListener>(arg0: java.awt.Event, arg1: int, arg2: int): boolean
            public mouseDrag<T extends java.util.EventListener>(arg0: java.awt.Event, arg1: int, arg2: int): boolean
            public mouseUp<T extends java.util.EventListener>(arg0: java.awt.Event, arg1: int, arg2: int): boolean
            public mouseMove<T extends java.util.EventListener>(arg0: java.awt.Event, arg1: int, arg2: int): boolean
            public mouseEnter<T extends java.util.EventListener>(arg0: java.awt.Event, arg1: int, arg2: int): boolean
            public mouseExit<T extends java.util.EventListener>(arg0: java.awt.Event, arg1: int, arg2: int): boolean
            public keyDown<T extends java.util.EventListener>(arg0: java.awt.Event, arg1: int): boolean
            public keyUp<T extends java.util.EventListener>(arg0: java.awt.Event, arg1: int): boolean
            public action<T extends java.util.EventListener>(arg0: java.awt.Event, arg1: java.lang.Object): boolean
            public addNotify<T extends java.util.EventListener>(): void
            public removeNotify<T extends java.util.EventListener>(): void
            public gotFocus<T extends java.util.EventListener>(arg0: java.awt.Event, arg1: java.lang.Object): boolean
            public lostFocus<T extends java.util.EventListener>(arg0: java.awt.Event, arg1: java.lang.Object): boolean
            public isFocusTraversable<T extends java.util.EventListener>(): boolean
            public isFocusable<T extends java.util.EventListener>(): boolean
            public setFocusable<T extends java.util.EventListener>(arg0: boolean): void
            public setFocusTraversalKeys<T extends java.util.EventListener>(arg0: int, arg1: java.util.Set<java.awt.AWTKeyStroke>): void
            public getFocusTraversalKeys<T extends java.util.EventListener>(arg0: int): java.util.Set<java.awt.AWTKeyStroke>
            public areFocusTraversalKeysSet<T extends java.util.EventListener>(arg0: int): boolean
            public setFocusTraversalKeysEnabled<T extends java.util.EventListener>(arg0: boolean): void
            public getFocusTraversalKeysEnabled<T extends java.util.EventListener>(): boolean
            public requestFocus<T extends java.util.EventListener>(): void
            protected requestFocus<T extends java.util.EventListener>(arg0: boolean): boolean
            public requestFocusInWindow<T extends java.util.EventListener>(): boolean
            protected requestFocusInWindow<T extends java.util.EventListener>(arg0: boolean): boolean
            public getFocusCycleRootAncestor<T extends java.util.EventListener>(): java.awt.Container
            public isFocusCycleRoot<T extends java.util.EventListener>(arg0: java.awt.Container): boolean
            public transferFocus<T extends java.util.EventListener>(): void
            public nextFocus<T extends java.util.EventListener>(): void
            public transferFocusBackward<T extends java.util.EventListener>(): void
            public transferFocusUpCycle<T extends java.util.EventListener>(): void
            public hasFocus<T extends java.util.EventListener>(): boolean
            public isFocusOwner<T extends java.util.EventListener>(): boolean
            public add<T extends java.util.EventListener>(arg0: java.awt.PopupMenu): void
            public remove<T extends java.util.EventListener>(arg0: java.awt.MenuComponent): void
            protected paramString<T extends java.util.EventListener>(): string
            public toString<T extends java.util.EventListener>(): string
            public list<T extends java.util.EventListener>(): void
            public list<T extends java.util.EventListener>(arg0: java.io.PrintStream): void
            public list<T extends java.util.EventListener>(arg0: java.io.PrintStream, arg1: int): void
            public list<T extends java.util.EventListener>(arg0: java.io.PrintWriter): void
            public list<T extends java.util.EventListener>(arg0: java.io.PrintWriter, arg1: int): void
            public addPropertyChangeListener<T extends java.util.EventListener>(arg0: java.beans.PropertyChangeListener): void
            public removePropertyChangeListener<T extends java.util.EventListener>(arg0: java.beans.PropertyChangeListener): void
            public getPropertyChangeListeners<T extends java.util.EventListener>(): java.beans.PropertyChangeListener[]
            public addPropertyChangeListener<T extends java.util.EventListener>(arg0: java.lang.String | string, arg1: java.beans.PropertyChangeListener): void
            public removePropertyChangeListener<T extends java.util.EventListener>(arg0: java.lang.String | string, arg1: java.beans.PropertyChangeListener): void
            public getPropertyChangeListeners<T extends java.util.EventListener>(arg0: java.lang.String | string): java.beans.PropertyChangeListener[]
            protected firePropertyChange<T extends java.util.EventListener>(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: java.lang.Object): void
            protected firePropertyChange<T extends java.util.EventListener>(arg0: java.lang.String | string, arg1: boolean, arg2: boolean): void
            protected firePropertyChange<T extends java.util.EventListener>(arg0: java.lang.String | string, arg1: int, arg2: int): void
            public firePropertyChange<T extends java.util.EventListener>(arg0: java.lang.String | string, arg1: byte, arg2: byte): void
            public firePropertyChange<T extends java.util.EventListener>(arg0: java.lang.String | string, arg1: char, arg2: char): void
            public firePropertyChange<T extends java.util.EventListener>(arg0: java.lang.String | string, arg1: short, arg2: short): void
            public firePropertyChange<T extends java.util.EventListener>(arg0: java.lang.String | string, arg1: long, arg2: long): void
            public firePropertyChange<T extends java.util.EventListener>(arg0: java.lang.String | string, arg1: float, arg2: float): void
            public firePropertyChange<T extends java.util.EventListener>(arg0: java.lang.String | string, arg1: double, arg2: double): void
            public setComponentOrientation<T extends java.util.EventListener>(arg0: java.awt.ComponentOrientation): void
            public getComponentOrientation<T extends java.util.EventListener>(): java.awt.ComponentOrientation
            public applyComponentOrientation<T extends java.util.EventListener>(arg0: java.awt.ComponentOrientation): void
            public getAccessibleContext<T extends java.util.EventListener>(): javax.accessibility.AccessibleContext
            public static class: java.lang.Class<any>
        }
    }
}