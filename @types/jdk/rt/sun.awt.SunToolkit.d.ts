declare namespace sun {
    namespace awt {
        abstract class SunToolkit extends java.awt.Toolkit implements sun.awt.WindowClosingSupport , sun.awt.WindowClosingListener , sun.awt.ComponentFactory , sun.awt.InputMethodSupport , sun.awt.KeyboardFocusManagerPeerProvider {
            public static GRAB_EVENT_MASK: int
            protected static numberOfButtons: int
            public static MAX_BUTTONS_SUPPORTED: int
            public static DEFAULT_WAIT_TIME: int
            public static DESKTOPFONTHINTS: string
            public constructor()
            public useBufferPerWindow(): boolean
            public createWindow(arg0: java.awt.Window): java.awt.peer.WindowPeer
            public createFrame(arg0: java.awt.Frame): java.awt.peer.FramePeer
            public createLightweightFrame(arg0: sun.awt.LightweightFrame): java.awt.peer.FramePeer
            public createDialog(arg0: java.awt.Dialog): java.awt.peer.DialogPeer
            public createButton(arg0: java.awt.Button): java.awt.peer.ButtonPeer
            public createTextField(arg0: java.awt.TextField): java.awt.peer.TextFieldPeer
            public createChoice(arg0: java.awt.Choice): java.awt.peer.ChoicePeer
            public createLabel(arg0: java.awt.Label): java.awt.peer.LabelPeer
            public createList(arg0: java.awt.List): java.awt.peer.ListPeer
            public createCheckbox(arg0: java.awt.Checkbox): java.awt.peer.CheckboxPeer
            public createScrollbar(arg0: java.awt.Scrollbar): java.awt.peer.ScrollbarPeer
            public createScrollPane(arg0: java.awt.ScrollPane): java.awt.peer.ScrollPanePeer
            public createTextArea(arg0: java.awt.TextArea): java.awt.peer.TextAreaPeer
            public createFileDialog(arg0: java.awt.FileDialog): java.awt.peer.FileDialogPeer
            public createMenuBar(arg0: java.awt.MenuBar): java.awt.peer.MenuBarPeer
            public createMenu(arg0: java.awt.Menu): java.awt.peer.MenuPeer
            public createPopupMenu(arg0: java.awt.PopupMenu): java.awt.peer.PopupMenuPeer
            public createMenuItem(arg0: java.awt.MenuItem): java.awt.peer.MenuItemPeer
            public createCheckboxMenuItem(arg0: java.awt.CheckboxMenuItem): java.awt.peer.CheckboxMenuItemPeer
            public createDragSourceContextPeer(arg0: java.awt.dnd.DragGestureEvent): java.awt.dnd.peer.DragSourceContextPeer
            public createTrayIcon(arg0: java.awt.TrayIcon): java.awt.peer.TrayIconPeer
            public createSystemTray(arg0: java.awt.SystemTray): java.awt.peer.SystemTrayPeer
            public isTraySupported(): boolean
            public getFontPeer(arg0: java.lang.String | string, arg1: int): java.awt.peer.FontPeer
            public createRobot(arg0: java.awt.Robot, arg1: java.awt.GraphicsDevice): java.awt.peer.RobotPeer
            public getKeyboardFocusManagerPeer(): java.awt.peer.KeyboardFocusManagerPeer
            public static awtLock(): void
            public static awtTryLock(): boolean
            public static awtUnlock(): void
            public static awtLockWait(): void
            public static awtLockWait(arg0: long): void
            public static awtLockNotify(): void
            public static awtLockNotifyAll(): void
            public static isAWTLockHeldByCurrentThread(): boolean
            public static createNewAppContext(): sun.awt.AppContext
            protected static targetToPeer(arg0: java.lang.Object): java.lang.Object
            protected static targetCreatedPeer(arg0: java.lang.Object, arg1: java.lang.Object): void
            protected static targetDisposedPeer(arg0: java.lang.Object, arg1: java.lang.Object): void
            public static targetToAppContext(arg0: java.lang.Object): sun.awt.AppContext
            public static setLWRequestStatus(arg0: java.awt.Window, arg1: boolean): void
            public static checkAndSetPolicy(arg0: java.awt.Container): void
            public static insertTargetMapping(arg0: java.lang.Object, arg1: sun.awt.AppContext): void
            public static postEvent(arg0: sun.awt.AppContext, arg1: java.awt.AWTEvent): void
            public static postPriorityEvent(arg0: java.awt.AWTEvent): void
            public static flushPendingEvents(): void
            public static flushPendingEvents(arg0: sun.awt.AppContext): void
            public static executeOnEventHandlerThread(arg0: java.lang.Object, arg1: java.lang.Runnable | java.lang.Runnable$$Lambda): void
            public static executeOnEventHandlerThread(arg0: java.lang.Object, arg1: java.lang.Runnable | java.lang.Runnable$$Lambda, arg2: long): void
            public static executeOnEventHandlerThread(arg0: sun.awt.PeerEvent): void
            public static invokeLaterOnAppContext(arg0: sun.awt.AppContext, arg1: java.lang.Runnable | java.lang.Runnable$$Lambda): void
            public static executeOnEDTAndWait(arg0: java.lang.Object, arg1: java.lang.Runnable | java.lang.Runnable$$Lambda): void
            public static isDispatchThreadForAppContext(arg0: java.lang.Object): boolean
            public getScreenSize(): java.awt.Dimension
            protected getScreenWidth(): int
            protected getScreenHeight(): int
            public getFontMetrics(arg0: java.awt.Font): java.awt.FontMetrics
            public getFontList(): java.lang.String[]
            public createPanel(arg0: java.awt.Panel): java.awt.peer.PanelPeer
            public createCanvas(arg0: java.awt.Canvas): java.awt.peer.CanvasPeer
            public disableBackgroundErase(arg0: java.awt.Canvas): void
            public disableBackgroundErase(arg0: java.awt.Component): void
            public static getSunAwtNoerasebackground(): boolean
            public static getSunAwtErasebackgroundonresize(): boolean
            public getImage(arg0: java.lang.String | string): java.awt.Image
            public getImage(arg0: java.net.URL): java.awt.Image
            protected getImageWithResolutionVariant(arg0: java.lang.String | string, arg1: java.lang.String | string): java.awt.Image
            protected getImageWithResolutionVariant(arg0: java.net.URL, arg1: java.net.URL): java.awt.Image
            public createImage(arg0: java.lang.String | string): java.awt.Image
            public createImage(arg0: java.net.URL): java.awt.Image
            public createImage(arg0: byte[], arg1: int, arg2: int): java.awt.Image
            public createImage(arg0: java.awt.image.ImageProducer): java.awt.Image
            public static createImageWithResolutionVariant(arg0: java.awt.Image, arg1: java.awt.Image): java.awt.Image
            public checkImage(arg0: java.awt.Image, arg1: int, arg2: int, arg3: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$Lambda): int
            public prepareImage(arg0: java.awt.Image, arg1: int, arg2: int, arg3: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$Lambda): boolean
            protected static imageCached(arg0: java.lang.String | string): boolean
            protected static imageCached(arg0: java.net.URL): boolean
            protected static imageExists(arg0: java.lang.String | string): boolean
            protected static imageExists(arg0: java.net.URL): boolean
            public static getScaledIconImage(arg0: java.util.List<java.awt.Image>, arg1: int, arg2: int): java.awt.image.BufferedImage
            public static getScaledIconData(arg0: java.util.List<java.awt.Image>, arg1: int, arg2: int): java.awt.image.DataBufferInt
            protected getSystemEventQueueImpl(): java.awt.EventQueue
            public static getSystemEventQueueImplPP(arg0: sun.awt.AppContext): java.awt.EventQueue
            public static getNativeContainer(arg0: java.awt.Component): java.awt.Container
            public static getHeavyweightComponent(arg0: java.awt.Component): java.awt.Component
            public getFocusAcceleratorKeyMask(): int
            public isPrintableCharacterModifiersMask(arg0: int): boolean
            public canPopupOverlapTaskBar(): boolean
            public createInputMethodWindow(arg0: java.lang.String | string, arg1: sun.awt.im.InputContext): java.awt.Window
            public enableInputMethodsForTextComponent(): boolean
            public static getStartupLocale(): java.util.Locale
            public getDefaultKeyboardLocale(): java.util.Locale
            public getWindowClosingListener(): sun.awt.WindowClosingListener
            public setWindowClosingListener(arg0: sun.awt.WindowClosingListener): void
            public windowClosingNotify(arg0: java.awt.event.WindowEvent): java.lang.RuntimeException
            public windowClosingDelivered(arg0: java.awt.event.WindowEvent): java.lang.RuntimeException
            protected getMouseInfoPeer(): java.awt.peer.MouseInfoPeer
            public static needsXEmbed(): boolean
            protected needsXEmbedImpl(): boolean
            protected isXEmbedServerRequested(): boolean
            public static isModalExcludedSupported(): boolean
            protected isModalExcludedSupportedImpl(): boolean
            public static setModalExcluded(arg0: java.awt.Window): void
            public static isModalExcluded(arg0: java.awt.Window): boolean
            public isModalityTypeSupported(arg0: java.awt.Dialog$ModalityType): boolean
            public isModalExclusionTypeSupported(arg0: java.awt.Dialog$ModalExclusionType): boolean
            public addModalityListener(arg0: sun.awt.ModalityListener): void
            public removeModalityListener(arg0: sun.awt.ModalityListener): void
            public notifyModalityPushed(arg0: java.awt.Dialog): void
            public notifyModalityPopped(arg0: java.awt.Dialog): void
            public static isLightweightOrUnknown(arg0: java.awt.Component): boolean
            public realSync(): void
            public realSync(arg0: long): void
            protected syncNativeQueue(arg0: long): boolean
            protected waitForIdle(arg0: long): boolean
            public grab(arg0: java.awt.Window): void
            public ungrab(arg0: java.awt.Window): void
            public static closeSplashScreen(): void
            public static setAAFontSettingsCondition(arg0: boolean): void
            protected getDesktopAAHints(): java.awt.RenderingHints
            public static getDesktopFontHints(): java.awt.RenderingHints
            public isDesktopSupported(): boolean
            public static consumeNextKeyTyped(arg0: java.awt.event.KeyEvent): void
            protected static dumpPeers(arg0: sun.util.logging.PlatformLogger): void
            public static getContainingWindow(arg0: java.awt.Component): java.awt.Window
            public static getSunAwtDisableMixing(): boolean
            public isNativeGTKAvailable(): boolean
            public setWindowDeactivationTime(arg0: java.awt.Window, arg1: long): void
            public getWindowDeactivationTime(arg0: java.awt.Window): long
            public isWindowOpacitySupported(): boolean
            public isWindowShapingSupported(): boolean
            public isWindowTranslucencySupported(): boolean
            public isTranslucencyCapable(arg0: java.awt.GraphicsConfiguration): boolean
            public isSwingBackbufferTranslucencySupported(): boolean
            public static isContainingTopLevelOpaque(arg0: java.awt.Component): boolean
            public static isContainingTopLevelTranslucent(arg0: java.awt.Component): boolean
            public needUpdateWindow(): boolean
            public getNumberOfButtons(): int
            public static isInstanceOf(arg0: java.lang.Object, arg1: java.lang.String | string): boolean
            protected static getLightweightFrame(arg0: java.awt.Component): sun.awt.LightweightFrame
            public static setSystemGenerated(arg0: java.awt.AWTEvent): void
            public static isSystemGenerated(arg0: java.awt.AWTEvent): boolean
            public static class: java.lang.Class<any>
        }
    }
}