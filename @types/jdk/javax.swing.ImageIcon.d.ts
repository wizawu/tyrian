declare namespace javax {
  namespace swing {
    class ImageIcon implements javax.swing.Icon, java.io.Serializable, javax.accessibility.Accessible {
      image: java.awt.Image
      loadStatus: int
      imageObserver: java.awt.image.ImageObserver
      description: java.lang.String
      protected static readonly component: java.awt.Component
      protected static readonly tracker: java.awt.MediaTracker
      width: int
      height: int
      public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
      public constructor(arg0: java.lang.String | string)
      public constructor(arg0: java.net.URL, arg1: java.lang.String | string)
      public constructor(arg0: java.net.URL)
      public constructor(arg0: java.awt.Image, arg1: java.lang.String | string)
      public constructor(arg0: java.awt.Image)
      public constructor(arg0: number[] | java.lang.Byte[], arg1: java.lang.String | string)
      public constructor(arg0: number[] | java.lang.Byte[])
      public constructor()
      protected loadImage(arg0: java.awt.Image): void
      public getImageLoadStatus(): number
      public getImage(): java.awt.Image
      public setImage(arg0: java.awt.Image): void
      public getDescription(): java.lang.String
      public setDescription(arg0: java.lang.String | string): void
      public paintIcon(
        arg0: java.awt.Component,
        arg1: java.awt.Graphics,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer
      ): void
      public getIconWidth(): number
      public getIconHeight(): number
      public setImageObserver(arg0: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$lambda): void
      public getImageObserver(): java.awt.image.ImageObserver
      public toString(): java.lang.String
      public getAccessibleContext(): javax.accessibility.AccessibleContext
    }
  }
}
