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
      public constructor(arg0: java.lang.String, arg1: java.lang.String)
      public constructor(arg0: java.lang.String)
      public constructor(arg0: java.net.URL, arg1: java.lang.String)
      public constructor(arg0: java.net.URL)
      public constructor(arg0: java.awt.Image, arg1: java.lang.String)
      public constructor(arg0: java.awt.Image)
      public constructor(arg0: byte[], arg1: java.lang.String)
      public constructor(arg0: byte[])
      public constructor()
      protected loadImage(arg0: java.awt.Image): void
      public getImageLoadStatus(): int
      public getImage(): java.awt.Image
      public setImage(arg0: java.awt.Image): void
      public getDescription(): java.lang.String
      public setDescription(arg0: java.lang.String): void
      public paintIcon(arg0: java.awt.Component, arg1: java.awt.Graphics, arg2: int, arg3: int): void
      public getIconWidth(): int
      public getIconHeight(): int
      public setImageObserver(arg0: java.awt.image.ImageObserver): void
      public getImageObserver(): java.awt.image.ImageObserver
      public toString(): java.lang.String
      public getAccessibleContext(): javax.accessibility.AccessibleContext
    }

  }
}
