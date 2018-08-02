declare namespace javax {
    namespace swing {
class ImageIcon implements javax.swing.Icon , java.io.Serializable , javax.accessibility.Accessible {
    protected static component: java.awt.Component
    protected static tracker: java.awt.MediaTracker
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
    public constructor(arg0: java.lang.String | string)
    public constructor(arg0: java.net.URL, arg1: java.lang.String | string)
    public constructor(arg0: java.net.URL)
    public constructor(arg0: java.awt.Image, arg1: java.lang.String | string)
    public constructor(arg0: java.awt.Image)
    public constructor(arg0: byte[], arg1: java.lang.String | string)
    public constructor(arg0: byte[])
    public constructor()
    protected loadImage(arg0: java.awt.Image): void
    public getImageLoadStatus(): int
    public getImage(): java.awt.Image
    public setImage(arg0: java.awt.Image): void
    public getDescription(): string
    public setDescription(arg0: java.lang.String | string): void
    public paintIcon(arg0: java.awt.Component, arg1: java.awt.Graphics, arg2: int, arg3: int): void
    public getIconWidth(): int
    public getIconHeight(): int
    public setImageObserver(arg0: java.awt.image.ImageObserver): void
    public getImageObserver(): java.awt.image.ImageObserver
    public toString(): string
    public getAccessibleContext(): javax.accessibility.AccessibleContext
    public static class: java.lang.Class<any>
}

class ImageIcon$$Lambda implements javax.swing.Icon , java.io.Serializable , javax.accessibility.Accessible {
    protected static component: java.awt.Component
}

    }
}